/**
 * Netlify Function: track-visitor
 * 
 * Called from the frontend on page load. Uses the visitor's IP to get
 * geolocation (country/city) and sends a notification email to APM.
 * 
 * NOTE: We cannot obtain the visitor's email address just from a page visit.
 * Only IP-based geolocation info is available.
 * 
 * REQUIRES: SENDGRID_API_KEY environment variable.
 */

exports.handler = async function(event) {
    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const apiKey = process.env.SENDGRID_API_KEY;
        if (!apiKey) {
            return { statusCode: 200, body: JSON.stringify({ ok: true, note: 'Email not configured' }) };
        }

        // Get visitor IP from Netlify headers
        const ip = event.headers['x-forwarded-for']?.split(',')[0]?.trim() 
                || event.headers['client-ip'] 
                || 'unknown';

        // Get geolocation from free API
        let geo = { country: 'Desconocido', city: 'Desconocida', region: '' };
        try {
            const geoResp = await fetch(`https://ipapi.co/${ip}/json/`);
            if (geoResp.ok) {
                const geoData = await geoResp.json();
                geo.country = geoData.country_name || 'Desconocido';
                geo.city = geoData.city || 'Desconocida';
                geo.region = geoData.region || '';
            }
        } catch (geoErr) {
            console.warn('Geolocation lookup failed:', geoErr.message);
        }

        // Parse request body for page info
        let pageUrl = '/';
        try {
            const body = JSON.parse(event.body || '{}');
            pageUrl = body.page || '/';
        } catch (e) {}

        const fecha = new Date().toLocaleString('es-PE', { timeZone: 'America/Lima' });

        const emailBody = `
Nueva visualización de usuario

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DETALLES DE LA VISITA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌐 IP:        ${ip}
🌍 País:      ${geo.country}
🏙️ Ciudad:    ${geo.city}${geo.region ? `, ${geo.region}` : ''}
📄 Página:    ${pageUrl}
📅 Fecha:     ${fecha}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Nota: No es posible obtener el correo electrónico de un visitante
que no ha iniciado sesión ni completado un formulario.

-- 
APM Group | Sistema de Tracking Web
        `.trim();

        await fetch('https://api.sendgrid.com/v3/mail/send', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                personalizations: [{ 
                    to: [{ email: 'consultas@apmgroup.pe' }], 
                    subject: 'Nueva visualización de usuario' 
                }],
                from: { email: 'consultas@apmgroup.pe', name: 'APM Group Web' },
                content: [{ type: 'text/plain', value: emailBody }]
            })
        });

        return { 
            statusCode: 200, 
            headers: { 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify({ ok: true }) 
        };
    } catch (error) {
        console.error('Visitor tracking error:', error);
        return { statusCode: 200, body: JSON.stringify({ ok: false }) };
    }
};
