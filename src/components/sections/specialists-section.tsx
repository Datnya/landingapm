import { FocusCards } from "@/components/ui/focus-cards";
import { useI18n } from "../../i18n";

export default function SpecialistsSection() {
    const { t } = useI18n();
    const specialists = [
        {
            title: "Patricia Romero",
            role: t('about.spec_1_role'),
            src: "/Imágenes/Especialistas APM/Patricia FINAL 3.png",
            description: t('about.spec_1_desc'),
            linkedin: "https://www.linkedin.com/in/patricia-romero-consultora/"
        },
        {
            title: "Juan Fustamante",
            role: t('about.spec_2_role'),
            src: "/Imágenes/Especialistas APM/Juan Fustamante FINAL 33.png",
            description: t('about.spec_2_desc'),
            linkedin: "https://www.linkedin.com/in/juanfustamante/"
        },
        {
            title: "Rosario Molina",
            role: t('about.spec_3_role'),
            src: "/Imágenes/Especialistas APM/Rosario Molina FINAL.png",
            description: t('about.spec_3_desc'),
            linkedin: "https://www.linkedin.com/in/rosario-molina-casas-a67181a7/"
        },
        {
            title: "Luiggi Cruz",
            role: t('about.spec_4_role'),
            src: "/Imágenes/Especialistas APM/Luiggi Cruz FINAL 2.png",
            description: t('about.spec_4_desc'),
            linkedin: "https://www.linkedin.com/in/luiggi-cesar-cruz-caldas-18b24675/"
        },
    ];

    return (
        <section id="especialistas" className="py-24 md:py-32 bg-[#F8F9FA]">
            <div className="container mx-auto px-6 text-center mb-20">
                <p className="uppercase font-bold text-primary tracking-[0.25em] mb-4 text-sm">{t('about.specialists_label')}</p>
                <h2 className="text-4xl md:text-5xl font-black text-secondary mb-8 leading-tight tracking-wide uppercase">{t('about.specialists_title_1')} <span className="text-primary">{t('about.specialists_title_em')}</span></h2>
                <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-8"></div>
                <p className="max-w-3xl mx-auto text-gray-500 font-medium text-lg leading-relaxed">
                    {t('about.specialists_desc')}
                </p>
            </div>

            <FocusCards cards={specialists} />
        </section>
    );
}
