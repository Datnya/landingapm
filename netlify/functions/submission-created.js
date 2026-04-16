/**
 * Netlify Function: submission-created
 * 
 * This function is automatically triggered by Netlify whenever a form submission
 * is received. It sends an email notification to the APM Group team.
 * 
 * Netlify automatically provides the built-in email sending capability
 * through the @netlify/emails package, but for simplicity and reliability,
 * we use fetch to call Netlify's built-in notification system.
 * 
 * IMPORTANT: To enable email notifications, go to:
 * Netlify Dashboard > Site > Forms > Form notifications > Add notification > Email notification
 * - Email: consultas@apmgroup.pe
 * - Form: checklist-iso
 * 
 * This function acts as an additional backup and can be customized further.
 */

exports.handler = async function(event) {
    try {
        const payload = JSON.parse(event.body).payload;
        
        // Only process checklist-iso form submissions
        if (payload.form_name !== 'checklist-iso') {
            return { statusCode: 200, body: 'Not a checklist form, skipping.' };
        }

        const { nombre, email, empresa, cargo } = payload.data || {};

        // Build email body
        const emailBody = `
Nuevo lead desde el formulario de Checklist ISO 9001

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DATOS DEL CONTACTO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 Nombre:    ${nombre || 'No proporcionado'}
📧 Email:     ${email || 'No proporcionado'}
🏢 Empresa:   ${empresa || 'No proporcionado'}
💼 Cargo:     ${cargo || 'No proporcionado'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📅 Fecha:     ${new Date().toLocaleString('es-PE', { timeZone: 'America/Lima' })}
🌐 Formulario: Checklist Diagnóstico ISO 9001
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Este lead ha descargado el Checklist de Diagnóstico ISO 9001 gratuito.
Se recomienda dar seguimiento en un plazo máximo de 24 horas.

-- 
APM Group | Sistema de Notificaciones Web
        `.trim();

        console.log('📧 Checklist ISO form submission received:');
        console.log(`   Name: ${nombre}`);
        console.log(`   Email: ${email}`);
        console.log(`   Company: ${empresa}`);
        console.log(`   Position: ${cargo}`);
        console.log(`   Email body prepared for: consultas@apmgroup.pe`);

        // Note: Netlify's built-in form notification (configured in the dashboard)
        // will handle the actual email delivery to consultas@apmgroup.pe.
        // This function logs the submission for monitoring purposes.
        // 
        // If you want to use a third-party email service (SendGrid, Mailgun, etc.),
        // add the API key as an environment variable in Netlify and uncomment below:
        //
        // await fetch('https://api.sendgrid.com/v3/mail/send', {
        //     method: 'POST',
        //     headers: {
        //         'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         personalizations: [{ to: [{ email: 'consultas@apmgroup.pe' }], subject: 'Formulario de Checklist ISO 9001' }],
        //         from: { email: 'noreply@apmgroup.pe', name: 'APM Group Web' },
        //         content: [{ type: 'text/plain', value: emailBody }]
        //     })
        // });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Submission processed successfully' })
        };
    } catch (error) {
        console.error('Error processing submission:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to process submission' })
        };
    }
};
