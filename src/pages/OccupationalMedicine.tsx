import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, Activity, Stethoscope, ShieldCheck, FileText, CalendarCheck, Users, Brain, Eye, Ear, Smile, Linkedin } from 'lucide-react';
import { useI18n } from '../i18n';

const OccupationalMedicinePage = () => {
    const { t } = useI18n();

    const subservicios = [
        {
            title: window.localStorage.getItem('language') === 'en' ? "Health Technical Report" : "Informe Técnico de Salud",
            description: window.localStorage.getItem('language') === 'en' ? "Preparation and presentation of reports on workers' health status, medical surveillance results, and preventive recommendations." : "Elaboración y presentación de informes sobre el estado de salud de los trabajadores, resultados de vigilancia médica y recomendaciones preventivas.",
            icon: <FileText className="w-8 h-8" />
        },
        {
            title: window.localStorage.getItem('language') === 'en' ? "Annual Plan and Schedule" : "Plan Anual y Cronograma",
            description: window.localStorage.getItem('language') === 'en' ? "Formulation of the annual occupational health plan with scheduled activities for the whole year, objectives, responsible parties, and indicators." : "Formulación del plan anual de salud ocupacional con actividades programadas para todo el año, objetivos, responsables e indicadores.",
            icon: <CalendarCheck className="w-8 h-8" />
        },
        {
            title: window.localStorage.getItem('language') === 'en' ? "Disease Control" : "Control de Enfermedades",
            description: window.localStorage.getItem('language') === 'en' ? "Preventive and control measures against communicable diseases at work through awareness actions and surveillance." : "Medidas preventivas y de control frente a enfermedades transmisibles en el trabajo mediante acciones de sensibilización y vigilancia.",
            icon: <Activity className="w-8 h-8" />
        },
        {
            title: window.localStorage.getItem('language') === 'en' ? "Immunization Program" : "Programa de Inmunización",
            description: window.localStorage.getItem('language') === 'en' ? "Protection against preventable diseases through vaccination campaigns and preventive guidance." : "Protección frente a enfermedades prevenibles mediante campañas de vacunación y orientación preventiva.",
            icon: <ShieldCheck className="w-8 h-8" />
        },
        {
            title: window.localStorage.getItem('language') === 'en' ? "Nutritional Health & Healthy Lifestyle" : "Salud Nutricional y Vida Saludable",
            description: window.localStorage.getItem('language') === 'en' ? "Anthropometric evaluation, nutritional counseling, and promotion of healthy lifestyles." : "Evaluación antropométrica, consejería nutricional y promoción de estilos de vida saludables.",
            icon: <Heart className="w-8 h-8" />
        },
        {
            title: window.localStorage.getItem('language') === 'en' ? "Psychosocial Prevention" : "Prevención Psicosocial",
            description: window.localStorage.getItem('language') === 'en' ? "Identification and reduction of occupational stress factors, overload, and inadequate organizational climate." : "Identificación y reducción de factores de estrés laboral, sobrecarga y clima organizacional inadecuado.",
            icon: <Brain className="w-8 h-8" />
        },
        {
            title: window.localStorage.getItem('language') === 'en' ? "Pregnant Women & Lactation" : "Gestantes y Lactancia",
            description: window.localStorage.getItem('language') === 'en' ? "Comprehensive protection through risk assessment, monitoring, and inspection of lactation conditions." : "Protección integral a través de evaluación de riesgos, seguimiento e inspección de condiciones para la lactancia.",
            icon: <Users className="w-8 h-8" />
        },
        {
            title: window.localStorage.getItem('language') === 'en' ? "Hearing Protection" : "Protección Auditiva",
            description: window.localStorage.getItem('language') === 'en' ? "Prevention of noise-induced hearing loss through evaluations, medical surveillance, and control measures." : "Prevención de pérdida auditiva por ruido mediante evaluaciones, vigilancia médica y medidas de control.",
            icon: <Ear className="w-8 h-8" />
        },
        {
            title: window.localStorage.getItem('language') === 'en' ? "Visual Health" : "Salud Visual",
            description: window.localStorage.getItem('language') === 'en' ? "Early detection of visual alterations with medical follow-up and timely referral." : "Detección temprana de alteraciones visuales con seguimiento médico y derivación oportuna.",
            icon: <Eye className="w-8 h-8" />
        },
        {
            title: window.localStorage.getItem('language') === 'en' ? "Active Breaks" : "Pausas Activas",
            description: window.localStorage.getItem('language') === 'en' ? "Movement routines to prevent musculoskeletal disorders, fatigue, and stress at work." : "Rutinas de movimiento para prevenir trastornos musculoesqueléticos, fatiga y estrés en el trabajo.",
            icon: <Smile className="w-8 h-8" />
        },
        {
            title: window.localStorage.getItem('language') === 'en' ? "First Aid" : "Primeros Auxilios",
            description: window.localStorage.getItem('language') === 'en' ? "Training, first aid kit inspection, and preparation to handle basic emergencies." : "Capacitación, inspección de botiquines y preparación para atender emergencias básicas.",
            icon: <Stethoscope className="w-8 h-8" />
        }
    ];

    const valores = window.localStorage.getItem('language') === 'en' 
        ? ["Prevention", "Responsibility", "Confidentiality", "Commitment", "Integrity", "Continuous Improvement", "Worker Orientation"]
        : ["Prevención", "Responsabilidad", "Confidencialidad", "Compromiso", "Integridad", "Mejora continua", "Orientación al trabajador"];

    return (
        <div className="bg-[#FAFBF5] min-h-screen pt-20">
            <Helmet>
                <title>Medicina Ocupacional y SST | APM Group</title>
                <meta name="description" content="Protegemos la salud de sus colaboradores mediante servicios integrales de Medicina Ocupacional y Seguridad y Salud en el Trabajo (SST)." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden bg-cover bg-center rounded-b-[60px]" style={{ backgroundImage: "url('/Imágenes/medicina%20imagen.jpg')" }}>
                <div className="absolute inset-0 bg-black/60" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <span className="text-primary font-black text-[10px] uppercase tracking-[0.5em] mb-8 block drop-shadow-md">
                            {window.localStorage.getItem('language') === 'en' ? 'Comprehensive Protection' : 'Protección Integral'}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[0.85] mb-12 uppercase tracking-tighter text-white drop-shadow-sm">
                            {window.localStorage.getItem('language') === 'en' ? 'Occupational' : 'Medicina'} <br /> <span className="text-primary italic drop-shadow-md">{window.localStorage.getItem('language') === 'en' ? 'Medicine' : 'Ocupacional'}</span> & SST
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl border-l-[10px] border-primary pl-8 text-white/90">
                            {window.localStorage.getItem('language') === 'en' 
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
                            { title: window.localStorage.getItem('language') === 'en' ? "Health Surveillance" : "Vigilancia de la salud", icon: <Activity className="w-8 h-8" /> },
                            { title: window.localStorage.getItem('language') === 'en' ? "Risk Mgt. & Prevention" : "Gestión de riesgos y prevención", icon: <ShieldCheck className="w-8 h-8" /> },
                            { title: window.localStorage.getItem('language') === 'en' ? "Training & Promotion" : "Capacitación y promoción", icon: <Users className="w-8 h-8" /> },
                            { title: window.localStorage.getItem('language') === 'en' ? "Administration & Compliance" : "Administración y cumplimiento legal", icon: <FileText className="w-8 h-8" /> }
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

            {/* Especialista, Misión y Visión */}
            <section className="py-24 bg-[#FAFBF5]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                        
                        {/* Especialistas (Left Side) */}
                        <div className="lg:col-span-7 flex flex-col gap-8 h-full">
                            {/* Panel Dra. Alicia */}
                            <div className="bg-white rounded-[40px] border border-black/5 p-6 sm:p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)] flex flex-col md:flex-row items-center md:items-stretch text-center md:text-left gap-6 sm:gap-8 flex-1">
                                <div className="w-40 sm:w-56 md:w-64 flex-shrink-0 aspect-[3/4] rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl relative group">
                                    <img src="/Imágenes/Alicia%20Torres.png" alt="Dra. Alicia Torres" className="w-full h-full object-cover object-[center_top] group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 border-[6px] border-primary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-105" />
                                </div>
                                <div className="flex-1 space-y-6 flex flex-col justify-center">
                                    <div>
                                        <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest mb-4">
                                            {window.localStorage.getItem('language') === 'en' ? 'Specialist in Charge' : 'Especialista a Cargo'}
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-secondary mb-4">
                                            Dra. Alicia Torres
                                        </h3>
                                        <p className="text-secondary/70 font-medium leading-relaxed text-sm md:text-base">
                                            {window.localStorage.getItem('language') === 'en'
                                                ? 'Medical Surgeon with Master\'s degree in Occupational and Environmental Health, and Specialization in Medical Auditing. Over 10 years of experience leading prevention strategies, medical surveillance, and occupational risk control.'
                                                : 'Médico Cirujano con Maestría en Salud Ocupacional y Ambiental, y Especialización en Auditoría Médica. Con más de 10 años de trayectoria liderando estrategias de prevención, vigilancia médica y control de riesgos laborales.'}
                                        </p>
                                    </div>
                                    <div className="mt-auto md:mt-0 flex justify-center md:justify-start">
                                        <a 
                                            href="https://www.linkedin.com/in/alicia-e-torres-diaz-a67513243/" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            aria-label="Perfil en LinkedIn"
                                            className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white border-[3px] border-primary text-primary rounded-full hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-md"
                                        >
                                            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Panel Dra. María */}
                            <div className="bg-white rounded-[40px] border border-black/5 p-6 sm:p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)] flex flex-col md:flex-row items-center md:items-stretch text-center md:text-left gap-6 sm:gap-8 flex-1">
                                <div className="w-40 sm:w-56 md:w-64 flex-shrink-0 aspect-[3/4] rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl relative group">
                                    <img src="/Imágenes/Maria_Andreina.jpg" alt="Dra. María Andreina Silva Reyes" className="w-full h-full object-cover object-[center_top] group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 border-[6px] border-primary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-105" />
                                </div>
                                <div className="flex-1 space-y-6 flex flex-col justify-center">
                                    <div>
                                        <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest mb-4">
                                            {window.localStorage.getItem('language') === 'en' ? 'Specialist in Charge' : 'Especialista a Cargo'}
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-secondary mb-4">
                                            Dra. María Andreina Silva
                                        </h3>
                                        <p className="text-secondary/70 font-medium leading-relaxed text-sm md:text-base">
                                            {window.localStorage.getItem('language') === 'en'
                                                ? 'Medical Surgeon with Master\'s degree in Occupational and Environmental Health and Specialization in Medical Auditing. 5 years of experience managing occupational health, leading prevention strategies, medical surveillance, and committed to the integral well-being of every worker.'
                                                : 'Médico Cirujano • Maestría en Medicina Ocupacional y del Medio Ambiente • Especialización en Auditoría Médica. Con 5 años de trayectoria gestionando la salud ocupacional, liderando estrategias de prevención, vigilancia médica y comprometida con el bienestar integral de cada trabajador.'}
                                        </p>
                                    </div>
                                    <div className="mt-auto md:mt-0 flex justify-center md:justify-start">
                                        <a 
                                            href="https://www.linkedin.com/in/maria-andreina-silva-reyes-a28a20394/" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            aria-label="Perfil en LinkedIn"
                                            className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white border-[3px] border-primary text-primary rounded-full hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-md"
                                        >
                                            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Misión y Visión (Right Side) */}
                        <div className="lg:col-span-5 flex flex-col gap-6 h-full">
                            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-[30px] shadow-sm border border-black/5 hover:-translate-y-2 transition-all duration-300 flex-1 flex flex-col justify-center">
                                <h3 className="text-xl sm:text-2xl font-black text-secondary mb-4 uppercase tracking-tighter">{window.localStorage.getItem('language') === 'en' ? 'Our Mission' : 'Nuestra Misión'}</h3>
                                <p className="text-secondary/70 font-medium leading-relaxed text-xs sm:text-sm md:text-base">
                                    {window.localStorage.getItem('language') === 'en'
                                        ? 'Provide technical, preventive, and timely care aimed at preserving the health of workers, strengthening the preventive culture in the organization, and ensuring compliance with legal requirements.'
                                        : 'Brindar una atención técnica, preventiva y oportuna orientada a preservar la salud de los trabajadores, fortalecer la cultura preventiva en la organización y asegurar el cumplimiento de los requisitos legales.'}
                                </p>
                            </div>
                            <div className="bg-primary p-6 sm:p-8 md:p-10 rounded-[30px] shadow-sm hover:-translate-y-2 transition-all duration-300 text-white flex-1 flex flex-col justify-center">
                                <h3 className="text-xl sm:text-2xl font-black mb-4 uppercase tracking-tighter">{window.localStorage.getItem('language') === 'en' ? 'Our Vision' : 'Nuestra Visión'}</h3>
                                <p className="font-medium leading-relaxed text-white/90 text-xs sm:text-sm md:text-base">
                                    {window.localStorage.getItem('language') === 'en'
                                        ? 'Be a reference service in occupational health for its preventive, human, and continuous improvement approach, contributing to the well-being of workers and the sustainability of the organization.'
                                        : 'Ser un servicio referente en salud ocupacional por su enfoque preventivo, humano y de mejora continua, contribuyendo al bienestar de los trabajadores y a la sostenibilidad de la organización.'}
                                </p>
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
                            {window.localStorage.getItem('language') === 'en' ? 'Main' : 'Principales'} <span className="text-primary italic">{window.localStorage.getItem('language') === 'en' ? 'Services' : 'Servicios'}</span>
                        </h2>
                        <p className="text-secondary/60 max-w-2xl mx-auto font-medium px-4 text-sm sm:text-base">
                            {window.localStorage.getItem('language') === 'en'
                                ? 'Programs and plans designed for the comprehensive care of the collaborator throughout their working life.'
                                : 'Programas y planes diseñados para el cuidado integral del colaborador durante toda su vida laboral.'}
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
                                {window.localStorage.getItem('language') === 'en' ? 'Expected Results' : 'Resultados Esperados'}
                            </h3>
                            <ul className="space-y-6">
                                {(window.localStorage.getItem('language') === 'en' 
                                ? [
                                    "Reduction of occupational risks and accidents.",
                                    "Improvement of documentary control and regulatory compliance.",
                                    "Greater worker participation in prevention.",
                                    "Early detection of health conditions.",
                                    "Strengthening of self-care culture.",
                                    "Increased efficiency in OSH management."
                                ] : [
                                    "Reducción de riesgos ocupacionales y accidentes.",
                                    "Mejora del control documental y cumplimiento normativo.",
                                    "Mayor participación de los trabajadores en prevención.",
                                    "Detección temprana de condiciones de salud.",
                                    "Fortalecimiento de la cultura de autocuidado.",
                                    "Incremento de eficiencia en la gestión de SST."
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
                                {window.localStorage.getItem('language') === 'en' ? 'Conclusion' : 'Conclusión'}
                            </h3>
                            <p className="text-white/70 leading-relaxed font-medium text-sm sm:text-base">
                                {window.localStorage.getItem('language') === 'en'
                                    ? 'The Occupational Medicine and OSH service plays a strategic role within the organization, as it protects workers\' health, prevents adverse events, and contributes to compliance with applicable regulations. The implementation of its subservices consolidates a preventive, orderly management focused on the integral well-being of the personnel.'
                                    : 'El servicio de Medicina Ocupacional y SST cumple un rol estratégico dentro de la organización, ya que protege la salud de los trabajadores, previene eventos adversos y contribuye al cumplimiento de la normativa aplicable. La implementación de sus subservicios permite consolidar una gestión preventiva, ordenada y orientada al bienestar integral del personal.'}
                            </p>
                            <div className="mt-12 text-center lg:text-left">
                                <a href="/contacto" className="inline-block bg-primary text-black px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-transform">
                                    {window.localStorage.getItem('language') === 'en' ? 'Request Consulting' : 'Solicitar Asesoría'}
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
