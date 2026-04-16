import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Settings, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n';

const CampusMaintenance = () => {
    const { t } = useI18n();

    return (
        <div className="pt-20 pb-32 min-h-screen flex items-center justify-center bg-secondary relative overflow-hidden font-body">
            <Helmet>
                <title>{t('maintenance.title')}</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-3xl mx-auto flex flex-col items-center">
                    
                    {/* Illustration */}
                    <div className="w-64 h-64 md:w-80 md:h-80 mb-10 relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                        <img 
                            src="/Imágenes/chica TI.png" 
                            alt="Plataforma en mantenimiento" 
                            className="w-full h-full object-contain relative z-10"
                            loading="eager"
                        />
                    </div>

                    <span className="bg-primary/20 text-primary px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-flex items-center gap-2 font-heading">
                        <Settings className="w-3.5 h-3.5 animate-spin-slow" />
                        {t('maintenance.badge')}
                    </span>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 uppercase tracking-tight text-white font-heading leading-tight">
                        {t('maintenance.h1_1')} <span className="text-primary italic">{t('maintenance.h1_2')}</span>
                    </h1>

                    <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-2xl mx-auto">
                        {t('maintenance.desc')}
                    </p>

                    <Link
                        to="/cursos"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-secondary rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 hover:shadow-[0_20px_40px_rgba(178,197,53,0.5)] transition-all shadow-[0_10px_30px_rgba(178,197,53,0.3)] font-heading group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        {t('maintenance.btn_back')}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CampusMaintenance;
