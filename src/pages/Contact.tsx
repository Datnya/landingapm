import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';

const Contact = () => {
    const contactInfo = [
        {
            icon: <Mail className="text-primary w-6 h-6" />,
            title: "Correo Electrónico",
            value: "consultas@apmgroup.pe",
            link: "mailto:consultas@apmgroup.pe"
        },
        {
            icon: <Phone className="text-primary w-6 h-6" />,
            title: "Teléfono / WhatsApp",
            value: "+51 967 170 627",
            link: "https://wa.me/51967170627"
        },
        {
            icon: <MapPin className="text-primary w-6 h-6" />,
            title: "Ubicación",
            value: "Lima, Perú - Cobertura Nacional y LATAM",
            link: "#"
        },
        {
            icon: <Clock className="text-primary w-6 h-6" />,
            title: "Horario de Atención",
            value: "Lunes a Viernes: 9:00 AM - 6:00 PM",
            link: "#"
        }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-secondary text-white py-24 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img src="/Imágenes/Contact.jpg" alt="Background" className="w-full h-full object-cover object-bottom shadow-2xl" />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <p className="uppercase font-bold text-primary tracking-[0.25em] mb-4 text-sm animate-pulse">Canales Abiertos</p>
                    <h1 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tight">Contáctanos</h1>
                    <p className="max-w-3xl mx-auto text-white/70 text-lg md:text-xl font-medium leading-relaxed">
                        Estamos listos para potenciar tu organización. Solicita una asesoría especializada o resuelve tus dudas con nuestro equipo técnico.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F9FBE7]/30 -z-10 skew-x-[-12deg] translate-x-20"></div>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                        {/* Left Side: Dynamic Contact Details */}
                        <div className="lg:col-span-4 space-y-10">
                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-5xl font-black text-secondary leading-tight uppercase tracking-tighter">
                                    Conectemos <br /> <span className="text-primary italic">Negocios.</span>
                                </h2>
                                <div className="w-16 h-1 bg-primary rounded-full"></div>
                                <p className="text-secondary/60 font-medium leading-relaxed max-w-sm">
                                    Transformamos procesos, aseguramos el cumplimiento y potenciamos tu talento. Estamos a un mensaje de distancia.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {contactInfo.map((info, idx) => (
                                    <a
                                        key={idx}
                                        href={info.link}
                                        className="flex items-center gap-5 group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-secondary text-white flex items-center justify-center group-hover:bg-primary group-hover:text-secondary transition-all duration-300">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-secondary/30">{info.title}</p>
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

                        {/* Right Side: High-Impact Conversion Form */}
                        <div className="lg:col-span-8">
                            <div className="bg-secondary/80 backdrop-blur-xl rounded-[50px] p-10 md:p-16 shadow-[0_50px_100px_rgba(0,0,0,0.15)] relative overflow-hidden group border border-white/10">
                                {/* Decorative elements */}
                                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-1000"></div>
                                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/15 transition-all duration-1000"></div>

                                <div className="relative z-10">
                                    <div className="mb-12">
                                        <span className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">Asesoría Estratégica</span>
                                        <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4 leading-none">Inicia tu <span className="text-primary italic text-shadow-glow">Transformación</span></h3>
                                        <p className="text-white/50 font-medium text-sm md:text-base">Completa tus datos y un consultor experto te contactará en breve.</p>
                                    </div>

                                    <form className="space-y-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <label className="text-sm font-bold uppercase tracking-widest text-primary/90 ml-2">Nombre y Apellidos</label>
                                                <input type="text" placeholder="Tu nombre" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:bg-white/10 transition-all" />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-sm font-bold uppercase tracking-widest text-primary/90 ml-2">Empresa</label>
                                                <input type="text" placeholder="Nombre organización" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:bg-white/10 transition-all" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <label className="text-sm font-bold uppercase tracking-widest text-primary/90 ml-2">Email Corporativo</label>
                                                <input type="email" placeholder="email@empresa.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:bg-white/10 transition-all" />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-sm font-bold uppercase tracking-widest text-primary/90 ml-2">Servicio Requerido</label>
                                                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white/40 focus:outline-none focus:border-primary focus:bg-white/10 transition-all cursor-pointer appearance-none">
                                                    <option className="bg-secondary text-white">Consultoría Estratégica</option>
                                                    <option className="bg-secondary text-white">Auditoría y Homologación</option>
                                                    <option className="bg-secondary text-white">Capacitación (Cursos)</option>
                                                    <option className="bg-secondary text-white">Sostenibilidad (ESG)</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-sm font-bold uppercase tracking-widest text-primary/90 ml-2">Mensaje o Requerimiento</label>
                                            <textarea rows={4} placeholder="Cuéntanos sobre tu proyecto..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:bg-white/10 transition-all"></textarea>
                                        </div>

                                        <button type="submit" className="w-full bg-primary text-secondary py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-white hover:scale-[1.02] transition-all shadow-[0_20px_50px_rgba(178,197,53,0.3)] flex items-center justify-center gap-4 group">
                                            SOLICITAR ASESORÍA
                                            <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-[500px] w-full bg-secondary/5 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.23456789!2d-77.028!3d-12.046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAyJzQ1LjYiUyA3N8KwMDEnNDAuOCJX!5e0!3m2!1ses!2spe!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute top-10 left-10 bg-white p-8 rounded-3xl shadow-2xl max-w-sm pointer-events-none border border-black/5">
                    <h5 className="text-secondary font-black uppercase tracking-tight mb-2">Oficina Central</h5>
                    <p className="text-secondary/60 text-sm font-medium">Asesores expertos con alcance en todo el Perú y Latinoamérica.</p>
                </div>
            </section>
        </div>
    );
};

export default Contact;
