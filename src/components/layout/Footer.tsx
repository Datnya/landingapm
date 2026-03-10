import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/company/apmgroup-pe/" },
        { icon: <Facebook size={24} />, href: "https://www.facebook.com/share/1Dg872mbQk/" },
        { icon: <Instagram size={24} />, href: "https://www.instagram.com/apmgroup.pe/" },
        { icon: <Youtube size={24} />, href: "https://youtube.com/@apmgroup-consultoria" },
    ];

    return (
        <footer className="bg-secondary text-white py-20 pb-10 border-t border-white/5">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                <div className="footer-brand">
                    <img src="/Imágenes/LOGO APM LETRAS NEGRAS.png" alt="APM Group" className="h-14 mb-8 brightness-0 invert" />
                    <p className="text-white/60 leading-relaxed italic font-medium">"Potenciando el éxito empresarial"</p>
                </div>
                <div>
                    <h4 className="text-xl font-bold mb-8 uppercase tracking-widest text-primary">Enlaces</h4>
                    <ul className="text-white/70 space-y-4 font-medium text-sm">
                        <li><Link to="/" className="hover:text-primary transition-colors">Inicio</Link></li>
                        <li><Link to="/nosotros" className="hover:text-primary transition-colors">Quiénes somos</Link></li>
                        <li><Link to="/servicios" className="hover:text-primary transition-colors">Servicios</Link></li>
                        <li><Link to="/cursos" className="hover:text-primary transition-colors">Cursos</Link></li>
                        <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl font-bold mb-8 uppercase tracking-widest text-primary">Contacto</h4>
                    <div className="text-white/70 space-y-4 font-medium text-sm">
                        <p>consultas@apmgroup.pe</p>
                        <p>+51 967 170 627</p>
                    </div>
                </div>
                <div>
                    <h4 className="text-xl font-bold mb-8 uppercase tracking-widest text-primary">Síguenos</h4>
                    <div className="flex gap-4">
                        {socialLinks.map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/5 p-4 rounded-full hover:bg-primary transition-all group"
                            >
                                <div className="group-hover:text-secondary group-hover:scale-110 transition-transform">
                                    {social.icon}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-white/40 text-[10px] uppercase font-bold tracking-widest">
                <p>&copy; 2026 APM Group. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
