import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Success = () => {
    return (
        <div className="pt-20 min-h-screen flex items-center justify-center bg-[#F8F9FA] relative overflow-hidden">
            <Helmet>
                <title>Mensaje Enviado | APM Group</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-2xl mx-auto bg-white p-12 md:p-16 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-primary/20">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle className="w-12 h-12 text-primary" />
                    </div>

                    <h1 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight text-secondary font-heading line-clamp-2">
                        ¡Mensaje enviado con éxito!
                    </h1>

                    <p className="text-secondary/70 text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-xl mx-auto font-body">
                        Gracias por contactar a <span className="text-primary font-bold">APM Group</span>. Nuestro equipo de especialistas revisará tu solicitud y te contactará en breve.
                    </p>

                    <Link
                        to="/"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-secondary text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 hover:bg-primary transition-all shadow-[0_10px_30px_rgba(0,0,0,0.1)] font-heading group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        Volver al inicio
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Success;
