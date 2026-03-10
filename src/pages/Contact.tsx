import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';
import { useI18n } from '../i18n';

// ── Google Maps embed URL for: Calle José Gálvez 438, Miraflores, Lima, Perú ─
// Coordinates: -12.1189, -77.0323
const MAPS_EMBED_URL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.9213!2d-77.03456!3d-12.11892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c82b6e7d5e4b%3A0xa2f4b22a4c5d6789!2sCalle%20Jos%C3%A9%20G%C3%A1lvez%20438%2C%20Miraflores%2C%20Lima%2C%20Per%C3%BA!5e0!3m2!1ses!2spe!4v1740000000000";

const Contact = () => {
    const { t } = useI18n();
    const [agreed, setAgreed] = useState(false);

    const contactInfo = [
        {
            icon: <Mail className="text-primary w-6 h-6" />,
            titleKey: 'contact.info_email',
            value: "consultas@apmgroup.pe",
            link: "mailto:consultas@apmgroup.pe"
        },
        {
            icon: <Phone className="text-primary w-6 h-6" />,
            titleKey: 'contact.info_phone',
            value: "+51 967 170 627",
            link: "https://wa.me/51967170627"
        },
        {
            icon: <MapPin className="text-primary w-6 h-6" />,
            titleKey: 'contact.info_location',
            value: "Calle José Gálvez 438, Miraflores, Lima",
            link: "https://maps.google.com/?q=Calle+José+Gálvez+438,+Miraflores,+Lima"
        },
        {
            icon: <Clock className="text-primary w-6 h-6" />,
            titleKey: 'contact.info_schedule',
            value: "Lunes a Viernes: 9:00 AM - 6:00 PM",
            link: "#"
        }
    ];

    const inputClass = "w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/25 focus:outline-none focus:border-primary focus:bg-white/10 transition-all text-sm font-medium font-body";
    const labelClass = "text-xs font-black uppercase tracking-widest text-primary/90 ml-1 mb-1.5 block font-heading";
    const selectOptionClass = "bg-[#171717] text-white";

    return (
        <div className="pt-20">
            {/* ── Hero ─────────────────────────────────────────────────────── */}
            <section className="bg-secondary text-white py-24 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img src="/Imágenes/Contact.jpg" alt="Background" className="w-full h-full object-cover object-bottom" />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <p className="uppercase font-black text-primary tracking-[0.25em] mb-4 text-sm animate-pulse font-heading">
                        {t('contact.label')}
                    </p>
                    <h1 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tight font-heading">
                        {t('contact.title')}
                    </h1>
                    <p className="max-w-3xl mx-auto text-white/70 text-lg md:text-xl font-medium leading-relaxed">
                        {t('contact.description')}
                    </p>
                </div>
            </section>

            {/* ── Form Section ─────────────────────────────────────────────── */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F9FBE7]/30 -z-10 skew-x-[-12deg] translate-x-20" />

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                        {/* Left: Info */}
                        <div className="lg:col-span-4 space-y-10 lg:sticky lg:top-28">
                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-5xl font-black text-secondary leading-tight uppercase tracking-tighter font-heading">
                                    {t('contact.connect_title_1')} <br />
                                    <span className="text-primary italic">{t('contact.connect_title_2')}</span>
                                </h2>
                                <div className="w-16 h-1 bg-primary rounded-full" />
                                <p className="text-secondary/60 font-medium leading-relaxed max-w-sm">
                                    {t('contact.connect_desc')}
                                </p>
                            </div>

                            <div className="space-y-6">
                                {contactInfo.map((info, idx) => (
                                    <a key={idx} href={info.link} target={info.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="flex items-center gap-5 group">
                                        <div className="w-12 h-12 rounded-xl bg-secondary text-white flex items-center justify-center group-hover:bg-primary group-hover:text-secondary transition-all duration-300">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-secondary/30 font-heading">{t(info.titleKey)}</p>
                                            <p className="text-secondary font-bold text-sm">{info.value}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className="flex gap-4 pt-6">
                                {[
                                    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/company/apm-group-peru/" },
                                    { icon: <Facebook size={20} />, href: "#" },
                                    { icon: <Instagram size={20} />, href: "#" },
                                    { icon: <Youtube size={20} />, href: "#" }
                                ].map((social, idx) => (
                                    <a key={idx} href={social.href} className="w-10 h-10 rounded-lg border border-black/10 flex items-center justify-center text-secondary/40 hover:text-primary hover:border-primary transition-all">
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className="lg:col-span-8">
                            <div className="bg-secondary/80 backdrop-blur-xl rounded-[50px] p-10 md:p-14 shadow-[0_50px_100px_rgba(0,0,0,0.15)] relative overflow-hidden group border border-white/10">
                                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-1000" />
                                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/15 transition-all duration-1000" />

                                <div className="relative z-10">
                                    <div className="mb-10">
                                        <span className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block font-heading">
                                            {t('contact.form_badge')}
                                        </span>
                                        <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-3 leading-none font-heading">
                                            {t('contact.form_title_1')}{' '}
                                            <span className="text-primary italic">{t('contact.form_title_2')}</span>
                                        </h3>
                                        <p className="text-white/50 font-medium text-sm">{t('contact.form_subtitle')}</p>
                                    </div>

                                    <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="space-y-6">
                                        {/* Row 1: Nombre + Cargo */}
                                        <input type="hidden" name="form-name" value="contact" />
                                        <p className="hidden"><label>Don’t fill this out if you're human: <input name="bot-field" /></label></p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className={labelClass}>{t('contact.field_name')} *</label>
                                                <input required type="text" name="nombre" placeholder={t('contact.placeholder_name')} className={inputClass} />
                                            </div>
                                            <div>
                                                <label className={labelClass}>{t('contact.field_cargo')} *</label>
                                                <input required type="text" name="cargo" placeholder={t('contact.placeholder_cargo')} className={inputClass} />
                                            </div>
                                        </div>

                                        {/* Row 2: Email + Teléfono */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className={labelClass}>{t('contact.field_email')} *</label>
                                                <input required type="email" name="email" placeholder={t('contact.placeholder_email')} className={inputClass} />
                                            </div>
                                            <div>
                                                <label className={labelClass}>{t('contact.field_phone')} *</label>
                                                <input required type="tel" name="telefono" placeholder={t('contact.placeholder_phone')} className={inputClass} />
                                            </div>
                                        </div>

                                        {/* Row 3: Ciudad + RUC */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className={labelClass}>{t('contact.field_city')} *</label>
                                                <input required type="text" name="ciudad" placeholder={t('contact.placeholder_city')} className={inputClass} />
                                            </div>
                                            <div>
                                                <label className={labelClass}>{t('contact.field_ruc')} *</label>
                                                <input required type="text" name="ruc" placeholder={t('contact.placeholder_ruc')} maxLength={11} className={inputClass} />
                                            </div>
                                        </div>

                                        {/* Row 4: Empresa + Industria */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className={labelClass}>{t('contact.field_company')} *</label>
                                                <input required type="text" name="empresa" placeholder={t('contact.placeholder_company')} className={inputClass} />
                                            </div>
                                            <div>
                                                <label className={labelClass}>{t('contact.field_industry')} *</label>
                                                <select required name="industria" defaultValue="" className={`${inputClass} cursor-pointer appearance-none`}>
                                                    <option value="" disabled className={selectOptionClass}>{t('contact.select_industry')}</option>
                                                    {([
                                                        ['manufactura', 'industry_manufactura'],
                                                        ['construccion', 'industry_construccion'],
                                                        ['mineria', 'industry_mineria'],
                                                        ['energia', 'industry_energia'],
                                                        ['retail', 'industry_retail'],
                                                        ['logistica', 'industry_logistica'],
                                                        ['salud', 'industry_salud'],
                                                        ['educacion', 'industry_educacion'],
                                                        ['financiero', 'industry_financiero'],
                                                        ['tecnologia', 'industry_tecnologia'],
                                                        ['agroindustria', 'industry_agroindustria'],
                                                        ['publico', 'industry_publico'],
                                                        ['otro', 'industry_otro'],
                                                    ] as [string, string][]).map(([val, key]) => (
                                                        <option key={val} value={val} className={selectOptionClass}>
                                                            {t(`contact.${key}`)}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        {/* Row 5: Línea de Servicio + Cómo se enteró */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className={labelClass}>{t('contact.field_service')} *</label>
                                                <select required name="servicio" defaultValue="" className={`${inputClass} cursor-pointer appearance-none`}>
                                                    <option value="" disabled className={selectOptionClass}>{t('contact.select_service')}</option>
                                                    {([
                                                        ['auditoria', 'service_auditoria'],
                                                        ['consultoria', 'service_consultoria'],
                                                        ['formacion', 'service_formacion'],
                                                        ['sostenibilidad', 'service_sostenibilidad'],
                                                        ['business', 'service_business'],
                                                    ] as [string, string][]).map(([val, key]) => (
                                                        <option key={val} value={val} className={selectOptionClass}>
                                                            {t(`contact.${key}`)}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div>
                                                <label className={labelClass}>{t('contact.field_how')} *</label>
                                                <select required name="como_se_entero" defaultValue="" className={`${inputClass} cursor-pointer appearance-none`}>
                                                    <option value="" disabled className={selectOptionClass}>{t('contact.select_how')}</option>
                                                    {([
                                                        ['linkedin', 'how_linkedin'],
                                                        ['google', 'how_google'],
                                                        ['recomendacion', 'how_recomendacion'],
                                                        ['webinar', 'how_webinar'],
                                                        ['redes', 'how_redes'],
                                                        ['evento', 'how_evento'],
                                                        ['email', 'how_email'],
                                                        ['otro', 'how_otro'],
                                                    ] as [string, string][]).map(([val, key]) => (
                                                        <option key={val} value={val} className={selectOptionClass}>
                                                            {t(`contact.${key}`)}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        {/* Mensaje */}
                                        <div>
                                            <label className={labelClass}>{t('contact.field_message')} *</label>
                                            <textarea
                                                required
                                                name="mensaje"
                                                rows={4}
                                                placeholder={t('contact.placeholder_message')}
                                                className={inputClass}
                                            />
                                        </div>

                                        {/* Privacy checkbox */}
                                        <div className="flex items-start gap-4 p-5 bg-white/5 rounded-2xl border border-white/10">
                                            <button
                                                type="button"
                                                role="checkbox"
                                                aria-checked={agreed}
                                                onClick={() => setAgreed(v => !v)}
                                                className={`flex-shrink-0 w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all mt-0.5 ${agreed ? 'bg-primary border-primary' : 'border-white/30 hover:border-primary/60'}`}
                                            >
                                                {agreed && (
                                                    <svg className="w-3.5 h-3.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                )}
                                            </button>
                                            <p className="text-white/50 text-sm font-medium leading-relaxed">
                                                {t('contact.privacy').split('<a>')[0]}
                                                <a href="#" className="text-primary font-bold hover:underline">
                                                    {t('contact.privacy').split('<a>')[1]?.split('</a>')[0]}
                                                </a>
                                                {t('contact.privacy').split('</a>')[1]}
                                            </p>
                                        </div>

                                        {/* Submit */}
                                        <button
                                            type="submit"
                                            disabled={!agreed}
                                            className={`w-full py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-4 group transition-all shadow-[0_20px_50px_rgba(178,197,53,0.3)] font-heading ${agreed ? 'bg-primary text-secondary hover:bg-white hover:scale-[1.02] cursor-pointer' : 'bg-white/10 text-white/30 cursor-not-allowed'}`}
                                        >
                                            {t('contact.submit')}
                                            <Send size={16} className={agreed ? "group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" : ""} />
                                        </button>

                                        <p className="text-center text-white/20 text-[10px] font-bold uppercase tracking-widest font-heading">
                                            {t('contact.disclaimer')}
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Map: Calle José Gálvez 438, Miraflores ───────────────────── */}
            <section className="h-[500px] w-full relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                <iframe
                    src={MAPS_EMBED_URL}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="APM Group — Calle José Gálvez 438, Miraflores, Lima"
                />
                <div className="absolute top-10 left-10 bg-white p-8 rounded-3xl shadow-2xl max-w-sm pointer-events-none border border-black/5">
                    <h5 className="text-secondary font-black uppercase tracking-tight mb-1 font-heading">{t('contact.office')}</h5>
                    <p className="text-primary font-bold text-sm mb-2">Calle José Gálvez 438, Miraflores</p>
                    <p className="text-secondary/60 text-sm font-medium">{t('contact.office_desc')}</p>
                </div>
            </section>
        </div>
    );
};

export default Contact;
