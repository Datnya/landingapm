/**
 * Netlify Function: submission-created
 * 
 * Automatically triggered by Netlify on ANY form submission.
 * Routes to appropriate handler based on form_name.
 * 
 * REQUIRES: SENDGRID_API_KEY environment variable in Netlify Dashboard.
 */

const fs = require('fs');
const path = require('path');

async function sendEmail(apiKey, payload) {
    const resp = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    if (!resp.ok) {
        const text = await resp.text();
        console.error('SendGrid error:', resp.status, text);
    }
    return resp;
}

async function handleContactForm(data, apiKey) {
    const {
        tipo_servicio, nombre, cargo, email, telefono, ciudad, ruc,
        empresa, industria, como_se_entero, trabajadores,
        // Consultoría / Auditoría fields
        normas_interes, normas_interes_otro, etapa, mensaje, mapa_procesos, organigrama,
        // Formación fields
        norma_formacion, norma_formacion_otro, objetivos_capacitacion,
        objetivo_otro, colaboradores_capacitacion, areas_capacitacion,
        area_otro, modalidad_capacitacion, sistema_gestion,
        sistema_gestion_cual, fecha_inicio_capacitacion, requisitos_especificos,
        // Medicina fields
        mensaje_medicina
    } = data;

    const fecha = new Date().toLocaleString('es-PE', { timeZone: 'America/Lima' });

    const serviceName = {
        consultoria: 'Consultoría',
        auditoria: 'Auditoría',
        formacion: 'Formación',
        medicina: 'Medicina Ocupacional'
    }[tipo_servicio] || tipo_servicio || 'No especificado';

    // Build notification body based on service type
    let notifBody = `
Nuevo Lead - ${serviceName}

── DATOS DEL CONTACTO ──
📌 Nombre: ${nombre || '-'}
💼 Cargo: ${cargo || '-'}
📧 Email: ${email || '-'}
📱 Tel: ${telefono || '-'}
🏙️ Ciudad: ${ciudad || '-'}
🔢 RUC: ${ruc || '-'}
🏢 Empresa: ${empresa || '-'}
🏭 Industria: ${industria || '-'}
📡 Fuente: ${como_se_entero || '-'}
👥 Trabajadores: ${trabajadores || '-'}
`.trim();

    if (tipo_servicio === 'consultoria' || tipo_servicio === 'auditoria') {
        notifBody += `\n\n── CONSULTORÍA / AUDITORÍA ──
📐 Normas de interés: ${normas_interes || '-'}${normas_interes_otro ? ' → ' + normas_interes_otro : ''}
⏱️ Etapa: ${etapa || '-'}
📝 Mensaje: ${mensaje || 'Sin mensaje'}`;
        if (mapa_procesos) notifBody += `\n📎 Mapa de Procesos: ${mapa_procesos}`;
        if (organigrama) notifBody += `\n📎 Organigrama: ${organigrama}`;
    } else if (tipo_servicio === 'formacion') {
        notifBody += `\n\n── FORMACIÓN / CAPACITACIÓN ──
📚 Norma/Tema: ${norma_formacion || '-'}${norma_formacion_otro ? ' → ' + norma_formacion_otro : ''}
🎯 Objetivos: ${objetivos_capacitacion || '-'}${objetivo_otro ? ' → ' + objetivo_otro : ''}
👥 Colaboradores: ${colaboradores_capacitacion || '-'}
🏢 Áreas: ${areas_capacitacion || '-'}${area_otro ? ' → ' + area_otro : ''}
📋 Modalidad: ${modalidad_capacitacion || '-'}
⚙️ Sistema de Gestión: ${sistema_gestion || '-'}${sistema_gestion_cual ? ' → ' + sistema_gestion_cual : ''}
📅 Fecha estimada inicio: ${fecha_inicio_capacitacion || 'No especificada'}
📝 Requisitos especiales: ${requisitos_especificos || 'Ninguno'}`;
    } else if (tipo_servicio === 'medicina') {
        notifBody += `\n\n── MEDICINA OCUPACIONAL ──
📝 Mensaje: ${mensaje_medicina || 'Sin mensaje'}`;
    }

    notifBody += `\n\n📅 Fecha de envío: ${fecha}`;
    if (tipo_servicio === 'consultoria' || tipo_servicio === 'auditoria') {
        notifBody += `\n🎁 Checklist ISO 9001 enviado automáticamente al lead.`;
    }

    // 1) Notify APM team
    await sendEmail(apiKey, {
        personalizations: [{ to: [{ email: 'consultas@apmgroup.pe' }], subject: `Nuevo Lead (${serviceName}): ${nombre} - ${empresa}` }],
        from: { email: 'consultas@apmgroup.pe', name: 'APM Group Web' },
        content: [{ type: 'text/plain', value: notifBody }]
    });

    // 2) Send checklist PDF to user (only for Consultoría/Auditoría)
    if (email && (tipo_servicio === 'consultoria' || tipo_servicio === 'auditoria')) {
        let pdfBase64 = '';
        try {
            const pdfPath = path.resolve(__dirname, '..', '..', 'dist', 'Herramientas', 'Checklist descargable.pdf');
            pdfBase64 = fs.readFileSync(pdfPath).toString('base64');
        } catch (e) {
            try {
                const alt = path.resolve(__dirname, '..', '..', 'public', 'Herramientas', 'Checklist descargable.pdf');
                pdfBase64 = fs.readFileSync(alt).toString('base64');
            } catch (e2) { console.error('PDF not found:', e2.message); }
        }

        const html = `
<div style="font-family:'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08)">
<div style="background:#1a1a2e;padding:40px 30px;text-align:center"><h1 style="color:#B2C535;margin:0">APM Group</h1><p style="color:rgba(255,255,255,0.6);margin:10px 0 0;font-size:14px">Consultoría · Auditoría · Formación</p></div>
<div style="padding:40px 30px">
<h2 style="color:#1a1a2e;font-size:22px">Estimado/a ${nombre || 'profesional'},</h2>
<p style="color:#555;line-height:1.8">Gracias por su interés en <strong style="color:#1a1a2e">APM Group</strong>. Hemos recibido su solicitud y nuestro equipo la revisará a la brevedad.</p>
<p style="color:#555;line-height:1.8">Como parte de nuestro compromiso, adjuntamos <strong style="color:#B2C535">gratuitamente</strong> nuestro <strong>Checklist de Diagnóstico ISO 9001:2015</strong>, desarrollado por auditores con +50 diagnósticos realizados.</p>
<div style="background:#f8fbe7;border-left:4px solid #B2C535;padding:20px;border-radius:8px;margin:25px 0"><p style="margin:0;color:#1a1a2e;font-weight:bold">📎 Documento adjunto:</p><p style="margin:5px 0 0;color:#555">Checklist Diagnóstico ISO 9001:2015 (PDF)</p></div>
<p style="color:#555;line-height:1.8">Un consultor se comunicará con usted en máximo <strong>24 horas hábiles</strong>.</p>
<p style="color:#555;line-height:1.8;margin-top:25px">Cordialmente,<br><strong style="color:#1a1a2e">El equipo de APM Group</strong><br><span style="color:#B2C535;font-size:13px">consultas@apmgroup.pe · +51 967 170 627</span></p>
</div>
<div style="background:#1a1a2e;padding:20px;text-align:center"><p style="color:rgba(255,255,255,0.4);font-size:11px;margin:0">© 2026 APM Group. Todos los derechos reservados.</p></div>
</div>`;

        const emailPayload = {
            personalizations: [{ to: [{ email }], subject: 'Checklist diagnóstico 9001 para tu empresa' }],
            from: { email: 'consultas@apmgroup.pe', name: 'APM Group' },
            content: [{ type: 'text/html', value: html }]
        };
        if (pdfBase64) {
            emailPayload.attachments = [{ content: pdfBase64, filename: 'Checklist_Diagnostico_ISO9001_APMGroup.pdf', type: 'application/pdf', disposition: 'attachment' }];
        }
        await sendEmail(apiKey, emailPayload);
        console.log(`✅ Checklist sent to ${email}`);
    }

    // 3) Send confirmation email to user (for Formación and Medicina)
    if (email && (tipo_servicio === 'formacion' || tipo_servicio === 'medicina')) {
        const html = `
<div style="font-family:'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08)">
<div style="background:#1a1a2e;padding:40px 30px;text-align:center"><h1 style="color:#B2C535;margin:0">APM Group</h1><p style="color:rgba(255,255,255,0.6);margin:10px 0 0;font-size:14px">Consultoría · Auditoría · Formación</p></div>
<div style="padding:40px 30px">
<h2 style="color:#1a1a2e;font-size:22px">Estimado/a ${nombre || 'profesional'},</h2>
<p style="color:#555;line-height:1.8">Gracias por su interés en nuestros servicios de <strong style="color:#B2C535">${serviceName}</strong>. Hemos recibido su solicitud correctamente.</p>
<p style="color:#555;line-height:1.8">Un especialista de nuestro equipo se comunicará con usted en máximo <strong>24 horas hábiles</strong> para brindarle una propuesta personalizada.</p>
<p style="color:#555;line-height:1.8;margin-top:25px">Cordialmente,<br><strong style="color:#1a1a2e">El equipo de APM Group</strong><br><span style="color:#B2C535;font-size:13px">consultas@apmgroup.pe · +51 967 170 627</span></p>
</div>
<div style="background:#1a1a2e;padding:20px;text-align:center"><p style="color:rgba(255,255,255,0.4);font-size:11px;margin:0">© 2026 APM Group. Todos los derechos reservados.</p></div>
</div>`;

        await sendEmail(apiKey, {
            personalizations: [{ to: [{ email }], subject: `Solicitud de ${serviceName} recibida - APM Group` }],
            from: { email: 'consultas@apmgroup.pe', name: 'APM Group' },
            content: [{ type: 'text/html', value: html }]
        });
        console.log(`✅ Confirmation sent to ${email} for ${serviceName}`);
    }
}

async function handleChecklistForm(data, apiKey) {
    const { nombre, email, empresa, cargo } = data;
    const fecha = new Date().toLocaleString('es-PE', { timeZone: 'America/Lima' });

    await sendEmail(apiKey, {
        personalizations: [{ to: [{ email: 'consultas@apmgroup.pe' }], subject: `Formulario de Checklist ISO 9001 - ${nombre}` }],
        from: { email: 'consultas@apmgroup.pe', name: 'APM Group Web' },
        content: [{ type: 'text/plain', value: `Nuevo lead Checklist ISO\n\n📌 ${nombre}\n📧 ${email}\n🏢 ${empresa}\n💼 ${cargo}\n📅 ${fecha}` }]
    });
}

exports.handler = async function(event) {
    try {
        const payload = JSON.parse(event.body).payload;
        const apiKey = process.env.SENDGRID_API_KEY;

        if (!apiKey) {
            console.warn('⚠️ SENDGRID_API_KEY not set');
            return { statusCode: 200, body: 'Email service not configured.' };
        }

        const formName = payload.form_name;
        const data = payload.data || {};

        if (formName === 'contacto-apm') {
            await handleContactForm(data, apiKey);
        } else if (formName === 'checklist-iso') {
            await handleChecklistForm(data, apiKey);
        } else {
            console.log(`Unknown form: ${formName}`);
        }

        return { statusCode: 200, body: JSON.stringify({ message: 'OK' }) };
    } catch (error) {
        console.error('Error:', error);
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
};
