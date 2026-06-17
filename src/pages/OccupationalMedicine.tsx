import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, Activity, Stethoscope, ShieldCheck, FileText, CalendarCheck, Users, Brain, Eye, Ear, Smile, Linkedin } from 'lucide-react';
import { useI18n } from '../i18n';

const OccupationalMedicinePage = () => {
    const { t, locale } = useI18n();

    const subservicios = [
        {
            title: locale === 'en' ? "Health Technical Report" : "Informe TÃ©cnico de Salud",
            description: locale === 'en' ? "Preparation and presentation of reports on workers' health status, medical surveillance results, and preventive recommendations." : "ElaboraciÃ³n y presentaciÃ³n de informes sobre el estado de salud de los trabajadores, resultados de vigilancia mÃ©dica y recomendaciones preventivas.",
            icon: <FileText className="w-8 h-8" />
        },
        {
            title: locale === 'en' ? "Annual Plan and Schedule" : "Plan Anual y Cronograma",
            description: locale === 'en' ? "Formulation of the annual occupational health plan with scheduled activities for the whole year, objectives, responsible parties, and indicators." : "FormulaciÃ³n del plan anual de salud ocupacional con actividades programadas para todo el aÃ±o, objetivos, responsables e indicadores.",
            icon: <CalendarCheck className="w-8 h-8" />
        },
        {
            title: locale === 'en' ? "Disease Control" : "Control de Enfermedades",
            description: locale === 'en' ? "Preventive and control measures against communicable diseases at work through awareness actions and surveillance." : "Medidas preventivas y de control frente a enfermedades transmisibles en el trabajo mediante acciones de sensibilizaciÃ³n y vigilancia.",
            icon: <Activity className="w-8 h-8" />
        },
        {
            title: locale === 'en' ? "Immunization Program" : "Programa de InmunizaciÃ³n",
            description: locale === 'en' ? "Protection against preventable diseases through vaccination campaigns and preventive guidance." : "ProtecciÃ³n frente a enfermedades prevenibles mediante campaÃ±as de vacunaciÃ³n y orientaciÃ³n preventiva.",
            icon: <ShieldCheck className="w-8 h-8" />
        },
        {
            title: locale === 'en' ? "Nutritional Health & Healthy Lifestyle" : "Salud Nutricional y Vida Saludable",
            description: locale === 'en' ? "Anthropometric evaluation, nutritional counseling, and promotion of healthy lifestyles." : "EvaluaciÃ³n antropomÃ©trica, consejerÃ­a nutricional y promociÃ³n de estilos de vida saludables.",
            icon: <Heart className="w-8 h-8" />
        },
        {
            title: locale === 'en' ? "Psychosocial Prevention" : "PrevenciÃ³n Psicosocial",
            description: locale === 'en' ? "Identification and reduction of occupational stress factors, overload, and inadequate organizational climate." : "IdentificaciÃ³n y reducciÃ³n de factores de estrÃ©s laboral, sobrecarga y clima organizacional inadecuado.",
            icon: <Brain className="w-8 h-8" />
        },
        {
            title: locale === 'en' ? "Pregnant Women & Lactation" : "Gestantes y Lactancia",
            description: locale === 'en' ? "Comprehensive protection through risk assessment, monitoring, and inspection of lactation conditions." : "ProtecciÃ³n integral a travÃ©s de evaluaciÃ³n de riesgos, seguimiento e inspecciÃ³n de condiciones para la lactancia.",
            icon: <Users className="w-8 h-8" />
        },
        {
            title: locale === 'en' ? "Hearing Protection" : "ProtecciÃ³n Auditiva",
            description: locale === 'en' ? "Prevention of noise-induced hearing loss through evaluations, medical surveillance, and control measures." : "PrevenciÃ³n de pÃ©rdida auditiva por ruido mediante evaluaciones, vigilancia mÃ©dica y medidas de control.",
            icon: <Ear className="w-8 h-8" />
        },
        {
            title: locale === 'en' ? "Visual Health" : "Salud Visual",
            description: locale === 'en' ? "Early detection of visual alterations with medical follow-up and timely referral." : "DetecciÃ³n temprana de alteraciones visuales con seguimiento mÃ©dico y derivaciÃ³n oportuna.",
            icon: <Eye className="w-8 h-8" />
        },
        {
            title: locale === 'en' ? "Active Breaks" : "Pausas Activas",
            description: locale === 'en' ? "Movement routines to prevent musculoskeletal disorders, fatigue, and stress at work." : "Rutinas de movimiento para prevenir trastornos musculoesquelÃ©ticos, fatiga y estrÃ©s en el trabajo.",
            icon: <Smile className="w-8 h-8" />
        },
        {
            title: locale === 'en' ? "First Aid" : "Primeros Auxilios",
            description: locale === 'en' ? "Training, first aid kit inspection, and preparation to handle basic emergencies." : "CapacitaciÃ³n, inspecciÃ³n de botiquines y preparaciÃ³n para atender emergencias bÃ¡sicas.",
            icon: <Stethoscope className="w-8 h-8" />
        }
    ];

    const valores = locale === 'en' 
        ? ["Prevention", "Responsibility", "Confidentiality", "Commitment", "Integrity", "Continuous Improvement", "Worker Orientation"]
        : ["PrevenciÃ³n", "Responsabilidad", "Confidencialidad", "Compromiso", "Integridad", "Mejora continua", "OrientaciÃ³n al trabajador"];

    return (
        <div className="bg-[#FAFBF5] min-h-screen pt-20">
            <Helmet>
                <title>Medicina Ocupacional y SST | APM Group</title>
                <meta name="description" content="Protegemos la salud de sus colaboradores mediante servicios integrales de Medicina Ocupacional y Seguridad y Salud en el Trabajo (SST)." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden bg-cover bg-center rounded-b-[60px]" style={{ backgroundImage: "url('/Im%C3%A1genes/medicina%20imagen.jpg')" }}>
                <div className="absolute inset-0 bg-black/60" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <span className="text-primary font-black text-[10px] uppercase tracking-[0.5em] mb-8 block drop-shadow-md">
                            {locale === 'en' ? 'Comprehensive Protection' : 'ProtecciÃ³n Integral'}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[0.85] mb-12 uppercase tracking-tighter text-white drop-shadow-sm">
                            {locale === 'en' ? 'Occupational' : 'Medicina'} <br /> <span className="text-primary italic drop-shadow-md">{locale === 'en' ? 'Medicine' : 'Ocupacional'}</span> & SST
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl border-l-[10px] border-primary pl-8 text-white/90">
                            {locale === 'en' 
                                ? 'The service aims to protect the health of collaborators, prevent occupational diseases, control risks, and promote safe, healthy, and productive work environments.'
                                : 'El servicio tiene como finalidad proteger la salud de los colaboradores, prevenir enfermedades ocupacionales, controlar los riesgos y promover entornos laborales seguros, saludables y productivos.'}
                        </p>
                    </div>
                </div>
            </section>

            {/* Conceptos Section */}
            <section className="py-16 bg-[#FAFBF5]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: locale === 'en' ? "Health Surveillance" : "Vigilancia de la salud", icon: <Activity className="w-8 h-8" /> },
                            { title: locale === 'en' ? "Risk Mgt. & Prevention" : "GestiÃ³n de riesgos y prevenciÃ³n", icon: <ShieldCheck className="w-8 h-8" /> },
                            { title: locale === 'en' ? "Training & Promotion" : "CapacitaciÃ³n y promociÃ³n", icon: <Users className="w-8 h-8" /> },
                            { title: locale === 'en' ? "Administration & Compliance" : "AdministraciÃ³n y cumplimiento legal", icon: <FileText className="w-8 h-8" /> }
                        ].map((concept, i) => (
                            <div key={i} className="bg-black p-6 sm:p-8 rounded-[30px] border border-white/10 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-row items-center gap-6">
                                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                    <div className="scale-125">{concept.icon}</div>
                                </div>
                                <h4 className="text-base sm:text-lg font-black text-white uppercase tracking-tighter leading-tight">
                                    {concept.title}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Especialistas Side by Side */}
            <section className="py-24 bg-[#FAFBF5]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">
                            {locale === 'en' ? 'Our Team' : 'Nuestro Equipo'}
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black text-secondary uppercase tracking-tighter">
                            {locale === 'en' ? 'Specialists in Charge' : 'Especialistas a Cargo'}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Panel Dra. Alicia */}
                        <div className="bg-white rounded-[40px] border border-black/5 p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)] flex flex-col sm:flex-row items-center sm:items-stretch text-center sm:text-left gap-6">
                            <div className="w-36 sm:w-44 flex-shrink-0 aspect-[3/4] rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl relative group">
                                <img src="/Im%C3%A1genes/Alicia%20Torres.png" alt="Dra. Alicia Torres" className="w-full h-full object-cover object-[center_top] group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 border-[6px] border-primary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-105" />
                            </div>
                            <div className="flex-1 space-y-4 flex flex-col justify-center">
                                <div>
                                    <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-widest mb-3">
                                        {locale === 'en' ? 'Specialist in Charge' : 'Especialista a Cargo'}
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-secondary mb-3">
                                        Dra. Alicia Torres
                                    </h3>
                                    <p className="text-secondary/70 font-medium leading-relaxed text-xs sm:text-sm">
                                        {locale === 'en'
                                            ? 'Medical Surgeon with Master\'s in Occupational & Environmental Health, and Specialization in Medical Auditing. Over 10 years leading prevention strategies and medical surveillance.'
                                            : 'MÃ©dico Cirujano con MaestrÃ­a en Salud Ocupacional y Ambiental, y EspecializaciÃ³n en AuditorÃ­a MÃ©dica. Con mÃ¡s de 10 aÃ±os liderando estrategias de prevenciÃ³n y vigilancia mÃ©dica.'}
                                    </p>
                                </div>
                                <div className="flex justify-center sm:justify-start">
                                    <a
                                        href="https://www.linkedin.com/in/alicia-e-torres-diaz-a67513243/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Perfil en LinkedIn"
                                        className="inline-flex items-center justify-center w-11 h-11 bg-white border-[3px] border-primary text-primary rounded-full hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-md"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Panel Dra. MarÃ­a */}
                        <div className="bg-white rounded-[40px] border border-black/5 p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)] flex flex-col sm:flex-row items-center sm:items-stretch text-center sm:text-left gap-6">
                            <div className="w-36 sm:w-44 flex-shrink-0 aspect-[3/4] rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl relative group">
                                <img src="/Im%C3%A1genes/Maria_Andreina.jpg" alt="Dra. María Andreina Silva Reyes" className="w-full h-full object-cover object-[center_top] group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 border-[6px] border-primary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-105" />
                            </div>
                            <div className="flex-1 space-y-4 flex flex-col justify-center">
                                <div>
                                    <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-widest mb-3">
                                        {locale === 'en' ? 'Specialist in Charge' : 'Especialista a Cargo'}
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-secondary mb-3">
                                        Dra. MarÃ­a Andreina Silva
                                    </h3>
                                    <p className="text-secondary/70 font-medium leading-relaxed text-xs sm:text-sm">
                                        {locale === 'en'
                                            ? 'Medical Surgeon with Master\'s in Occupational Medicine and Specialization in Medical Auditing. 5 years of experience managing occupational health, committed to the integral well-being of every worker.'
                                            : 'MÃ©dico Cirujano â€¢ MaestrÃ­a en Medicina Ocupacional y del Medio Ambiente â€¢ EspecializaciÃ³n en AuditorÃ­a MÃ©dica. Con 5 aÃ±os gestionando la salud ocupacional, comprometida con el bienestar integral de cada trabajador.'}
                                    </p>
                                </div>
                                <div className="flex justify-center sm:justify-start">
                                    <a
                                        href="https://www.linkedin.com/in/maria-andreina-silva-reyes-a28a20394/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Perfil en LinkedIn"
                                        className="inline-flex items-center justify-center w-11 h-11 bg-white border-[3px] border-primary text-primary rounded-full hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-md"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Valores */}
                    <div className="mt-12 flex flex-wrap gap-4 justify-center">
                        {valores.map((val, i) => (
                            <span key={i} className="px-6 py-3 bg-white rounded-full text-sm font-bold text-secondary/80 border border-primary/20 shadow-sm">
                                {val}
                            </span>
                        ))}
                    </div>
                </div>
            </section>


            {/* Subservicios Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-secondary uppercase tracking-tighter mb-6">
                            {locale === 'en' ? 'Main' : 'Principales'} <span className="text-primary italic">{locale === 'en' ? 'Services' : 'Servicios'}</span>
                        </h2>
                        <p className="text-secondary/60 max-w-2xl mx-auto font-medium px-4 text-sm sm:text-base">
                            {locale === 'en'
                                ? 'Programs and plans designed for the comprehensive care of the collaborator throughout their working life.'
                                : 'Programas y planes diseÃ±ados para el cuidado integral del colaborador durante toda su vida laboral.'}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {subservicios.map((sub, i) => (
                            <div key={i} className="bg-[#FAFBF5] p-6 sm:p-8 rounded-[30px] group hover:bg-primary transition-all duration-500 border border-black/5 shadow-sm">
                                <div className="text-primary group-hover:text-white mb-6 transition-colors">
                                    {sub.icon}
                                </div>
                                <h4 className="text-lg sm:text-xl font-black text-secondary group-hover:text-white mb-4 leading-tight">
                                    {sub.title}
                                </h4>
                                <p className="text-secondary/60 group-hover:text-white/90 text-xs sm:text-sm font-medium leading-relaxed">
                                    {sub.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Importancia y Resultados */}
            <section className="py-24 bg-secondary text-white rounded-[40px] md:rounded-[60px] m-4 md:m-6">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        <div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter mb-10 text-primary">
                                {locale === 'en' ? 'Expected Results' : 'Resultados Esperados'}
                            </h3>
                            <ul className="space-y-6">
                                {(locale === 'en' 
                                ? [
                                    "Reduction of occupational risks and accidents.",
                                    "Improvement of documentary control and regulatory compliance.",
                                    "Greater worker participation in prevention.",
                                    "Early detection of health conditions.",
                                    "Strengthening of self-care culture.",
                                    "Increased efficiency in OSH management."
                                ] : [
                                    "ReducciÃ³n de riesgos ocupacionales y accidentes.",
                                    "Mejora del control documental y cumplimiento normativo.",
                                    "Mayor participaciÃ³n de los trabajadores en prevenciÃ³n.",
                                    "DetecciÃ³n temprana de condiciones de salud.",
                                    "Fortalecimiento de la cultura de autocuidado.",
                                    "Incremento de eficiencia en la gestiÃ³n de SST."
                                ]).map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-white/80 font-medium text-sm sm:text-base">
                                        <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0 shadow-[0_0_10px_#B2C535]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white/5 p-8 sm:p-12 rounded-[30px] sm:rounded-[40px] border border-white/10 backdrop-blur-md">
                            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-8">
                                {locale === 'en' ? 'Conclusion' : 'ConclusiÃ³n'}
                            </h3>
                            <p className="text-white/70 leading-relaxed font-medium text-sm sm:text-base">
                                {locale === 'en'
                                    ? 'The Occupational Medicine and OSH service plays a strategic role within the organization, as it protects workers\' health, prevents adverse events, and contributes to compliance with applicable regulations. The implementation of its subservices consolidates a preventive, orderly management focused on the integral well-being of the personnel.'
                                    : 'El servicio de Medicina Ocupacional y SST cumple un rol estratÃ©gico dentro de la organizaciÃ³n, ya que protege la salud de los trabajadores, previene eventos adversos y contribuye al cumplimiento de la normativa aplicable. La implementaciÃ³n de sus subservicios permite consolidar una gestiÃ³n preventiva, ordenada y orientada al bienestar integral del personal.'}
                            </p>
                            <div className="mt-12 text-center lg:text-left">
                                <a href="/contacto" className="inline-block bg-primary text-black px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-transform">
                                    {locale === 'en' ? 'Request Consulting' : 'Solicitar AsesorÃ­a'}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OccupationalMedicinePage;

