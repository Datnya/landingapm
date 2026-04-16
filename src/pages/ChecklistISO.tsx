import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useI18n } from '../i18n';

// ── SVG Icons ────────────────────────────────────────────────────────────────
const IconShield = () => (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const IconClipboard = () => (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
);

const IconTrendUp = () => (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);


const IconDownload = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const IconCheckCircle = () => (
    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const IconStar = () => (
    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);


const ChecklistISO = () => {
    const { t } = useI18n();
    const [agreed, setAgreed] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            // @ts-ignore
            body: new URLSearchParams(formData).toString()
        })
        .then(() => {
            navigate('/exito-checklist');
        })
        .catch((error) => {
            console.error('Error:', error);
            // Redirect to success page anyway in development so the flow can be verified locally
            navigate('/exito-checklist');
        });
    };

    const inputClass = "w-full bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 text-secondary placeholder:text-secondary/30 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-sm font-medium font-body";
    const labelClass = "text-xs font-black uppercase tracking-widest text-secondary/60 ml-1 mb-1.5 block font-heading";

    const benefits = [
        t('checklist.ben_1'),
        t('checklist.ben_2'),
        t('checklist.ben_3'),
        t('checklist.ben_4'),
        t('checklist.ben_5'),
    ];

    const features = [
        {
            icon: <IconClipboard />,
            title: t('checklist.feat1_title'),
            desc: t('checklist.feat1_desc'),
        },

        {
            icon: <IconTrendUp />,
            title: t('checklist.feat2_title'),
            desc: t('checklist.feat2_desc'),
        },
        {
            icon: <IconShield />,
            title: t('checklist.feat3_title'),
            desc: t('checklist.feat3_desc'),
        },
    ];

    return (
        <div className="pt-20">
            <Helmet>
                <title>{t('checklist.title')}</title>
                <meta name="description" content={t('checklist.desc')} />
                <link rel="canonical" href="https://apmgroup.pe/checklist-iso-9001" />
            </Helmet>

            {/* ── HERO SECTION ──────────────────────────────────────────────── */}
            <section className="bg-secondary text-white py-20 md:py-28 relative overflow-hidden">
                {/* Background glow effects */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT: Copy */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-3">
                                <span className="bg-primary text-black px-5 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest inline-block animate-pulse font-heading">
                                    {t('checklist.badge')}
                                </span>
                                <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">{t('checklist.author')}</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] uppercase tracking-tight font-heading">
                                {t('checklist.h1_1')}
                                <span className="text-primary italic">{t('checklist.h1_2')}</span>
                            </h1>

                            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-xl font-medium">
                                {t('checklist.p1')}<span className="text-white font-bold">{t('checklist.p1_bold')}</span>
                            </p>

                            {/* Stats */}
                            <div className="flex flex-wrap gap-8 pt-4">
                                <div>
                                    <p className="text-4xl md:text-5xl font-black text-primary font-heading leading-none">{t('checklist.stat1_val')}</p>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mt-1 whitespace-pre-wrap">{t('checklist.stat1_desc').replace(' ', '\n')}</p>
                                </div>
                                <div>
                                    <p className="text-4xl md:text-5xl font-black text-primary font-heading leading-none">{t('checklist.stat2_val')}</p>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mt-1 whitespace-pre-wrap">{t('checklist.stat2_desc').replace(' ', '\n')}</p>
                                </div>
                                <div>
                                    <p className="text-4xl md:text-5xl font-black text-primary font-heading leading-none">{t('checklist.stat3_val')}</p>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mt-1 whitespace-pre-wrap">{t('checklist.stat3_desc').replace(' ', '\n')}</p>
                                </div>
                            </div>

                            {/* Trust line */}
                            <div className="flex items-center gap-2 pt-2">
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => <IconStar key={i} />)}
                                </div>
                                <span className="text-white/40 text-xs font-bold">{t('checklist.trust')}</span>
                            </div>
                        </div>

                        {/* RIGHT: Form Card */}
                        <div className="relative">
                            <div className="absolute -top-8 -right-8 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

                            <div className="relative bg-white rounded-[40px] p-8 md:p-10 shadow-[0_40px_80px_rgba(0,0,0,0.3)] border border-white/20">
                                <div className="mb-8">
                                    <h2 className="text-2xl md:text-3xl font-black text-secondary uppercase tracking-tight font-heading leading-tight">
                                        {t('checklist.form_h2_1')} <span className="text-primary">{t('checklist.form_h2_2')}</span>
                                    </h2>
                                    <p className="text-secondary/50 font-medium text-sm mt-2">
                                        {t('checklist.form_desc')}
                                    </p>
                                </div>

                                <form name="checklist-iso" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-5">
                                    <input type="hidden" name="form-name" value="checklist-iso" />
                                    <p className="hidden"><label>Don't fill this out if you're human: <input name="bot-field" /></label></p>

                                    <div>
                                        <label className={labelClass}>{t('checklist.f_name')}</label>
                                        <input required type="text" name="nombre" placeholder={t('checklist.f_name_ph')} className={inputClass} />
                                    </div>

                                    <div>
                                        <label className={labelClass}>{t('checklist.f_email')}</label>
                                        <input required type="email" name="email" placeholder={t('checklist.f_email_ph')} className={inputClass} />
                                    </div>

                                    <div>
                                        <label className={labelClass}>{t('checklist.f_company')}</label>
                                        <input required type="text" name="empresa" placeholder={t('checklist.f_company_ph')} className={inputClass} />
                                    </div>

                                    <div>
                                        <label className={labelClass}>{t('checklist.f_role')}</label>
                                        <input type="text" name="cargo" placeholder={t('checklist.f_role_ph')} className={inputClass} />
                                    </div>

                                    {/* Privacy checkbox */}
                                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl">
                                        <button
                                            type="button"
                                            role="checkbox"
                                            aria-checked={agreed}
                                            onClick={() => setAgreed(v => !v)}
                                            className={`flex-shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all mt-0.5 ${agreed ? 'bg-primary border-primary' : 'border-gray-300 hover:border-primary/60'}`}
                                        >
                                            {agreed && (
                                                <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            )}
                                        </button>
                                        <p className="text-secondary/50 text-xs font-medium leading-relaxed">
                                            {t('checklist.f_terms')}
                                        </p>
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        disabled={!agreed}
                                        className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 group transition-all font-heading ${agreed ? 'bg-primary text-secondary hover:bg-secondary hover:text-white hover:scale-[1.02] cursor-pointer shadow-[0_15px_40px_rgba(178,197,53,0.4)]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                                    >
                                        {t('checklist.f_btn')}
                                        <IconDownload />
                                    </button>

                                    <p className="text-center text-secondary/30 text-[10px] font-bold uppercase tracking-widest font-heading">
                                        {t('checklist.f_footer')}
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT YOU GET ──────────────────────────────────────────────── */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F9FBE7]/40 -z-10 skew-x-[-12deg] translate-x-20" />

                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <p className="uppercase font-black text-primary tracking-[0.25em] mb-4 text-sm font-heading">
                            {t('checklist.what_badge')}
                        </p>
                        <h2 className="text-4xl md:text-5xl font-black text-secondary mb-6 leading-tight uppercase tracking-tight font-heading">
                            {t('checklist.what_h2_1')}
                            <span className="text-primary italic">{t('checklist.what_h2_2')}</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {features.map((feat, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 hover:border-primary/30 hover:translate-y-[-8px] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 group">
                                <div className="w-16 h-16 bg-[#F9FBE7] rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    {feat.icon}
                                </div>
                                <h3 className="text-lg font-black text-secondary uppercase tracking-tight mb-3 font-heading">{feat.title}</h3>
                                <p className="text-secondary/50 text-sm font-medium leading-relaxed">{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BENEFITS + IMAGE ──────────────────────────────────────────── */}
            <section className="py-24 bg-[#FAFBF5]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="absolute -top-6 -left-6 w-full h-full bg-primary/10 rounded-[40px] -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700" />
                            <div className="rounded-[40px] overflow-hidden shadow-2xl border border-black/5">
                                <img
                                    src="/Imágenes/checklist-iso-hero.png"
                                    alt="Consultor APM Group revisando checklist de diagnóstico ISO 9001"
                                    className="w-full h-[500px] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
                                    loading="lazy"
                                />
                            </div>
                            {/* Floating badge */}
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-primary/10">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                                        <IconShield />
                                    </div>
                                    <div>
                                        <p className="font-black text-secondary text-sm uppercase font-heading">ISO 9001:2015</p>
                                        <p className="text-secondary/40 text-xs font-bold">Metodología certificada</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Benefits list */}
                        <div className="space-y-8">
                            <div>
                                <p className="uppercase font-black text-primary tracking-[0.25em] mb-4 text-sm font-heading">
                                    {t('checklist.ben_badge')}
                                </p>
                                <h2 className="text-3xl md:text-4xl font-black text-secondary leading-tight uppercase tracking-tight font-heading">
                                    {t('checklist.ben_h2_1')}
                                    <span className="text-primary italic">{t('checklist.ben_h2_2')}</span>
                                </h2>
                            </div>

                            <div className="space-y-4">
                                {benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:border-primary/20 transition-all group">
                                        <IconCheckCircle />
                                        <p className="text-secondary/70 font-medium text-sm leading-relaxed group-hover:text-secondary transition-colors">{benefit}</p>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="#top"
                                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                                className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-secondary rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 hover:shadow-[0_20px_40px_rgba(178,197,53,0.4)] transition-all shadow-[0_10px_30px_rgba(178,197,53,0.3)] font-heading"
                            >
                                {t('checklist.ben_cta')}
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA ────────────────────────────────────────────────── */}
            <section className="py-24 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
                    <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="bg-primary/20 text-primary px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest inline-block mb-6 font-heading">
                        {t('checklist.final_badge')}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-[0.9] mb-6 font-heading max-w-4xl mx-auto">
                        {t('checklist.final_h2_1')}
                        <span className="text-primary italic">{t('checklist.final_h2_2')}</span>
                    </h2>
                    <p className="text-white/50 text-lg font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
                        {t('checklist.final_p')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contacto"
                            className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-primary text-secondary rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 hover:shadow-[0_20px_40px_rgba(178,197,53,0.5)] transition-all shadow-[0_10px_30px_rgba(178,197,53,0.3)] font-heading"
                        >
                            {t('checklist.final_btn_1')}
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                        </a>
                        <a
                            href="https://wa.me/51967170627"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-8 py-6 border border-white/20 text-white/70 rounded-2xl font-bold text-xs uppercase tracking-widest hover:border-primary/60 hover:text-primary transition-all font-heading"
                        >
                            {t('checklist.final_btn_2')}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ChecklistISO;
