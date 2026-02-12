import { FocusCards } from "@/components/ui/focus-cards";

export default function SpecialistsSection() {
    const specialists = [
        {
            title: "Patricia Romero",
            role: "Dirección Académica",
            src: "/Imágenes/Especialistas APM/Patricia Romero 1.png",
            description: "Especialista en gestión estratégica y sistemas ISO. +15 años asesorando a empresas en sostenibilidad y auditoría.",
            linkedin: "https://www.linkedin.com/in/patricia-romero-444a7732/"
        },
        {
            title: "Juan Fustamante",
            role: "Sistemas de Gestión",
            src: "/Imágenes/Especialistas APM/Juan Fustamante.jpeg",
            description: "Ingeniero petroquímimco especializado en normas ISO, con más de 15 años de experiencia como auditor, implementador y capacitador de Sistemas Integrados de Gestión en diversos sectores.",
            linkedin: "https://www.linkedin.com/in/juanfustamante/"
        },
        {
            title: "Rosario Molina",
            role: "Auditoría y Procesos",
            src: "/Imágenes/Especialistas APM/Rosario Molina.jpeg",
            description: "Ingeniera Química especializada en Sistemas de Gestión ISO, Auditora Líder IRCA y PECB en múltiples normas, con experiencia en consultoría y auditoría para el sector público y privado.",
            linkedin: "https://www.linkedin.com/in/rosario-molina-valdivia-5396554b/"
        },
        {
            title: "Luiggi Cruz",
            role: "Expert Consultor",
            src: "/Imágenes/Especialistas APM/Luiggi Cruz.jpeg",
            description: "Ingeniero Químico y Auditor Líder con Amplia experiencia en mas de 20 normas y estándares internacionales, consultor en sectores como energía, minería, construcción e industria, y evaluador de premios nacionales e internacionales de calidad.",
            linkedin: "https://www.linkedin.com/in/luiggicruz/"
        },
    ];

    return (
        <section id="especialistas" className="py-24 md:py-32 bg-[#F8F9FA]">
            <div className="container mx-auto px-6 text-center mb-20">
                <p className="uppercase font-bold text-primary tracking-[0.25em] mb-4 text-sm">Talento de Clase Mundial</p>
                <h2 className="text-4xl md:text-5xl font-black text-secondary mb-8 leading-tight tracking-wide uppercase">Nuestro Equipo de <span className="text-primary">Especialistas</span></h2>
                <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-8"></div>
                <p className="max-w-3xl mx-auto text-gray-500 font-medium text-lg leading-relaxed">
                    Contamos con un equipo multidisciplinario de expertos certificados internacionalmente,
                    dedicados a transformar organizaciones a través del conocimiento y la experiencia técnica.
                </p>
            </div>

            <FocusCards cards={specialists} />
        </section>
    );
}
