import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';
import { useI18n } from '../i18n';

const Privacy = ({ onBack }: { onBack?: () => void }) => {
    const { t } = useI18n();
    const navigate = useNavigate();

    const handleBack = () => {
        if (onBack) {
            onBack();
            return;
        }
        
        // If opened in a new tab (target="_blank"), close it to return to form
        if (window.history.length <= 2) {
            window.close();
            // Fallback in case window.close() is blocked
            navigate('/contacto');
        } else {
            navigate(-1);
        }
    };

    return (
        <div className="min-h-screen bg-tertiary pt-24 pb-20 relative overflow-hidden">
            <Helmet>
                <title>{t('privacy.title')} | APM Group</title>
                <meta name="robots" content="noindex" />
            </Helmet>

            <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                {/* Top Back Button */}
                <button
                    onClick={handleBack}
                    className="flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors mb-12 group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    {t('privacy.back_button')}
                </button>

                <div className="bg-secondary p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Shield className="w-6 h-6 text-primary" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                            {t('privacy.title')}
                        </h1>
                    </div>

                    <div className="space-y-8 text-white/70 leading-relaxed text-lg">
                        {/* Intro */}
                        <div dangerouslySetInnerHTML={{ __html: t('privacy.intro').replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />

                        {/* Section 1 */}
                        <div>
                            <h2 className="text-xl font-bold text-primary mb-3">{t('privacy.p1_title')}</h2>
                            <p dangerouslySetInnerHTML={{ __html: t('privacy.p1_text').replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
                        </div>

                        {/* Section 2 */}
                        <div>
                            <h2 className="text-xl font-bold text-primary mb-3">{t('privacy.p2_title')}</h2>
                            <p dangerouslySetInnerHTML={{ __html: t('privacy.p2_text').replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
                        </div>

                        {/* Section 3 */}
                        <div>
                            <h2 className="text-xl font-bold text-primary mb-3">{t('privacy.p3_title')}</h2>
                            <p dangerouslySetInnerHTML={{ __html: t('privacy.p3_text').replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
                        </div>

                        {/* Section 4 */}
                        <div>
                            <h2 className="text-xl font-bold text-primary mb-3">{t('privacy.p4_title')}</h2>
                            <p dangerouslySetInnerHTML={{ __html: t('privacy.p4_text').replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
                        </div>
                    </div>
                </div>

                {/* Bottom Back Button */}
                <div className="mt-12 flex justify-center">
                    <button
                        onClick={handleBack}
                        className="flex items-center gap-2 bg-primary text-secondary px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all hover:-translate-y-1 shadow-lg shadow-primary/20"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        {t('privacy.back_button')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
