import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Quiénes somos', path: '/nosotros' },
        { name: 'Servicios', path: '/servicios' },
        { name: 'Cursos', path: '/cursos' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contacto', path: '/contacto' },
    ];

    const socialLinks = [
        { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/company/apm-group-peru/" },
        { icon: <Facebook size={24} />, href: "https://facebook.com" },
        { icon: <Instagram size={24} />, href: "https://instagram.com" },
        { icon: <Youtube size={24} />, href: "https://youtube.com" },
    ];

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white py-3 shadow-md border-b border-black/5' : 'bg-white/90 backdrop-blur-md py-5 shadow-sm'}`}>
            <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                <Link to="/" className="flex-shrink-0">
                    <img src="/Imágenes/LOGO APM LETRAS NEGRAS.png" alt="APM Group Logo" className="h-12 md:h-16 w-auto" />
                </Link>
                <nav className="hidden xl:block">
                    <ul className="flex gap-8 lg:gap-10">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`relative font-semibold text-sm uppercase tracking-wider hover:text-primary transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-secondary'}`}
                                >
                                    {link.name}
                                    {location.pathname === link.path && <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary rounded-full"></div>}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center gap-6">
                    {/* Social Icons (Navbar) */}
                    <div className="hidden lg:flex items-center gap-4 border-r border-black/10 pr-6">
                        {socialLinks.map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-secondary/40 hover:text-primary transition-all hover:scale-110"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    <Link to="/contacto" className="bg-primary text-white px-8 py-3 rounded-full font-semibold text-xs uppercase tracking-widest hover:bg-secondary hover:translate-y-[-2px] transition-all shadow-lg hidden sm:block">
                        CONTÁCTANOS
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
