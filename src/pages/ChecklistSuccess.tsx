import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Download, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n';

const ChecklistSuccess = () => {
    const { t } = useI18n();

    return (
        <div className="pt-20 min-h-screen flex items-center justify-center bg-[#FAFBF5] relative overflow-hidden">
            <Helmet>
                <title>{t('checklist_success.title')}</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-2xl mx-auto bg-white p-12 md:p-16 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-primary/20">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                        <Download className="w-12 h-12 text-primary" />
                    </div>

                    <span className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block font-heading">
                        {t('checklist_success.badge')}
                    </span>

                    <h1 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight text-secondary font-heading line-clamp-2">
                        {t('checklist_success.h1')}
                    </h1>

                    <p className="text-secondary/70 text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-xl mx-auto font-body">
                        {t('checklist_success.desc')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="/Herramientas/Checklist.pdf"
                            download="Checklist_Diagnostico_ISO_9001_APM_Group.pdf"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-secondary rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 hover:bg-secondary hover:text-white transition-all shadow-[0_10px_30px_rgba(178,197,53,0.3)] font-heading group"
                        >
                            <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                            {t('checklist_success.btn_download')}
                        </a>
                        
                        <Link
                            to="/servicios"
                            className="inline-flex items-center gap-3 px-8 py-5 border border-secondary/20 text-secondary/70 rounded-2xl font-bold text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-all font-heading"
                        >
                            {t('checklist_success.btn_more')}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChecklistSuccess;
