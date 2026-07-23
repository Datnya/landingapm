import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Clock, Send, Linkedin, Facebook, Instagram, Youtube, Briefcase, Shield, GraduationCap, Heart } from 'lucide-react';
import { useI18n } from '../i18n';
import Privacy from './Privacy';

const MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.9213!2d-77.03456!3d-12.11892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c82b6e7d5e4b%3A0xa2f4b22a4c5d6789!2sCalle%20Jos%C3%A9%20G%C3%A1lvez%20438%2C%20Miraflores%2C%20Lima%2C%20Per%C3%BA!5e0!3m2!1ses!2spe!4v1740000000000";

type ServiceType = 'consultoria' | 'auditoria' | 'formacion' | 'medicina' | '';

const Contact = () => {
    const { t } = useI18n();

    // ── State ────────────────────────────────────────────────────────────
    const [selectedService, setSelectedService] = useState<ServiceType>('');
    const [agreed, setAgreed] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);

    // Consultoría / Auditoría
    const [normaInteres, setNormaInteres] = useState('');
    const [otroNormaInteres, setOtroNormaInteres] = useState('');
    const [selectedEtapa, setSelectedEtapa] = useState('');

    // Formación
    const [normaFormacion, setNormaFormacion] = useState('');
    const [otroNormaFormacion, setOtroNormaFormacion] = useState('');
    const [selectedObjetivos, setSelectedObjetivos] = useState<string[]>([]);
    const [otroObjetivo, setOtroObjetivo] = useState('');
    const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
    const [otroArea, setOtroArea] = useState('');
    const [selectedModalidad, setSelectedModalidad] = useState('');
    const [sistemaGestion, setSistemaGestion] = useState('');
    const [sistemaGestionCual, setSistemaGestionCual] = useState('');

    // Medicina Ocupacional
    const [selectedServiciosMedicina, setSelectedServiciosMedicina] = useState<string[]>([]);
    const [otroServicioMedicina, setOtroServicioMedicina] = useState('');
    const [colaboradoresMedicina, setColaboradoresMedicina] = useState('');
    const [selectedPuestos, setSelectedPuestos] = useState<string[]>([]);
    const [otroPuesto, setOtroPuesto] = useState('');
    const [selectedRiesgos, setSelectedRiesgos] = useState<string[]>([]);
    const [otroRiesgo, setOtroRiesgo] = useState('');
    const [modalidadServicio, setModalidadServicio] = useState('');
    const [ciudadServicio, setCiudadServicio] = useState('');
    const [cuentaMedico, setCuentaMedico] = useState('');
    const [selectedObjetivosMedicina, setSelectedObjetivosMedicina] = useState<string[]>([]);
    const [otroObjetivoMedicina, setOtroObjetivoMedicina] = useState('');

    // ── Helpers ──────────────────────────────────────────────────────────
    const handleServiceChange = (service: ServiceType) => {
        setSelectedService(service);
        setAgreed(false);
    };

    const toggleItem = (item: string, setter: React.Dispatch<React.SetStateAction<string[]>>) => {
        setter(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
    };

    const normasOptions = [
        'ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 22000', 'ISO 37001', 'ISO 27001',
        'HACCP', 'BPM', 'Sostenibilidad / ESG', 'Auditor Interno',
        'Seguridad y Salud en el Trabajo', 'otro'
    ];

    const contactInfo = [
        { icon: <Mail className="text-primary w-6 h-6" />, titleKey: 'contact.info_email', value: "consultas@apmgroup.pe", link: "mailto:consultas@apmgroup.pe" },
        { icon: <Phone className="text-primary w-6 h-6" />, titleKey: 'contact.info_phone', value: "+51 967 170 627", link: "https://wa.me/51967170627" },
        { icon: <MapPin className="text-primary w-6 h-6" />, titleKey: 'contact.info_location', value: "Calle José Gálvez 438, Miraflores, Lima", link: "https://maps.google.com/?q=Calle+José+Gálvez+438,+Miraflores,+Lima" },
        { icon: <Clock className="text-primary w-6 h-6" />, titleKey: 'contact.info_schedule', value: "Lunes a Viernes: 9:00 AM - 6:00 PM", link: "#" }
    ];

    const serviceCards: { id: ServiceType; icon: JSX.Element; labelKey: string }[] = [
        { id: 'consultoria', icon: <Briefcase className="w-8 h-8" />, labelKey: 'contact.service_consultoria' },
        { id: 'auditoria', icon: <Shield className="w-8 h-8" />, labelKey: 'contact.service_auditoria' },
        { id: 'formacion', icon: <GraduationCap className="w-8 h-8" />, labelKey: 'contact.service_formacion' },
        { id: 'medicina', icon: <Heart className="w-8 h-8" />, labelKey: 'contact.service_medicina' }
    ];

    const inputClass = "w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/25 focus:outline-none focus:border-primary focus:bg-white/10 transition-all text-sm font-medium font-body";
    const labelClass = "text-xs font-black uppercase tracking-widest text-primary/90 ml-1 mb-1.5 block font-heading";
    const selectOptionClass = "bg-[#171717] text-white";

    // ═══════════════════════════════════════════════════════════════════
    // ── RENDER: Consultoría / Auditoría specific fields ───────────────
    // ═══════════════════════════════════════════════════════════════════
    const renderConsultoriaAuditoriaFields = () => (
        <>
            <div>
                <label className={labelClass}>{t('contact.field_norma')} *</label>
                <select
                    required
                    name="normas_interes"
                    value={normaInteres}
                    onChange={(e) => {
                        setNormaInteres(e.target.value);
                        if (e.target.value !== 'otro') setOtroNormaInteres('');
                    }}
                    className={`${inputClass} cursor-pointer appearance-none`}
                >
                    <option value="" disabled className={selectOptionClass}>{t('contact.select_norma_formacion')}</option>
                    {normasOptions.map((opt) => (
                        <option key={opt} value={opt} className={selectOptionClass}>
                            {opt === 'otro' ? t('contact.norma_otro') : opt}
                        </option>
                    ))}
                </select>
                {normaInteres === 'otro' && (
                    <input
                        type="text"
                        name="normas_interes_otro"
                        value={otroNormaInteres}
                        onChange={(e) => setOtroNormaInteres(e.target.value)}
                        placeholder={t('contact.placeholder_otro_norma')}
                        className={`${inputClass} mt-3`}
                        required
                    />
                )}
            </div>

            {/* Etapa - Radio buttons */}
            <div>
                <label className={labelClass}>{t('contact.field_etapa')} *</label>
                <input type="hidden" name="etapa" value={selectedEtapa} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
                    {[
                        { value: 'explorando', labelKey: 'contact.etapa_explorando' },
                        { value: 'proximos_3_meses', labelKey: 'contact.etapa_planeando' },
                        { value: 'proximos_6_meses', labelKey: 'contact.etapa_comprando' }
                    ].map((etapa) => (
                        <button
                            key={etapa.value}
                            type="button"
                            onClick={() => setSelectedEtapa(etapa.value)}
                            className={`px-4 py-3 rounded-xl text-xs font-bold tracking-wide transition-all border text-left ${selectedEtapa === etapa.value ? 'bg-primary text-secondary border-primary' : 'bg-white/5 text-white/60 border-white/10 hover:border-primary/40'}`}
                        >
                            {t(etapa.labelKey)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Mensaje */}
            <div>
                <label className={labelClass}>{t('contact.field_mensaje_medicina')} </label>
                <textarea
                    name="mensaje"
                    rows={4}
                    placeholder={t('contact.placeholder_mensaje_medicina')}
                    className={inputClass}
                />
            </div>
        </>
    );

    // ═══════════════════════════════════════════════════════════════════
    // ── RENDER: Formación specific fields ─────────────────────────────
    // ═══════════════════════════════════════════════════════════════════
    const renderFormacionFields = () => (
        <>
            <div>
                <label className={labelClass}>{t('contact.field_norma_formacion')} *</label>
                <select
                    required
                    name="normas_interes"
                    value={normaFormacion}
                    onChange={(e) => {
                        setNormaFormacion(e.target.value);
                        if (e.target.value !== 'otro') setOtroNormaFormacion('');
                    }}
                    className={`${inputClass} cursor-pointer appearance-none`}
                >
                    <option value="" disabled className={selectOptionClass}>{t('contact.select_norma_formacion')}</option>
                    {normasOptions.map((opt) => (
                        <option key={opt} value={opt} className={selectOptionClass}>
                            {opt === 'otro' ? t('contact.norma_otro') : opt}
                        </option>
                    ))}
                </select>
                {normaFormacion === 'otro' && (
                    <input
                        type="text"
                        name="normas_interes_otro"
                        value={otroNormaFormacion}
                        onChange={(e) => setOtroNormaFormacion(e.target.value)}
                        placeholder={t('contact.placeholder_otro_norma')}
                        className={`${inputClass} mt-3`}
                        required
                    />
                )}
            </div>

            {/* Objetivos */}
            <div>
                <label className={labelClass}>{t('contact.field_objetivo')} *</label>
                <input type="hidden" name="objetivos" value={selectedObjetivos.join(', ')} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                    {['implementar', 'auditoria', 'certificar', 'actualizar', 'cliente', 'legal', 'competencias', 'otro'].map((obj) => (
                        <label key={obj} className="flex items-center gap-3 cursor-pointer group">
                            <input type="checkbox" className="hidden" checked={selectedObjetivos.includes(obj)} onChange={() => toggleItem(obj, setSelectedObjetivos)} />
                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${selectedObjetivos.includes(obj) ? 'bg-primary border-primary' : 'border-white/30 group-hover:border-primary/60'}`}>
                                {selectedObjetivos.includes(obj) && (
                                    <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                )}
                            </div>
                            <span className="text-white/70 text-sm font-medium">{t(`contact.obj_${obj}`)}</span>
                        </label>
                    ))}
                </div>
                {selectedObjetivos.includes('otro') && (
                    <input type="text" name="objetivo_otro" value={otroObjetivo} onChange={(e) => setOtroObjetivo(e.target.value)} placeholder={t('contact.placeholder_otro_objetivo')} className={`${inputClass} mt-3`} required />
                )}
            </div>

            {/* Áreas de formación */}
            <div>
                <label className={labelClass}>{t('contact.field_areas')} *</label>
                <input type="hidden" name="areas_formacion" value={selectedAreas.join(', ')} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                    {['gerencia', 'calidad', 'sst', 'produccion', 'rrhh', 'operaciones', 'logistica', 'mantenimiento', 'comercial', 'todas', 'otro'].map((area) => (
                        <label key={area} className="flex items-center gap-3 cursor-pointer group">
                            <input type="checkbox" className="hidden" checked={selectedAreas.includes(area)} onChange={() => toggleItem(area, setSelectedAreas)} />
                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${selectedAreas.includes(area) ? 'bg-primary border-primary' : 'border-white/30 group-hover:border-primary/60'}`}>
                                {selectedAreas.includes(area) && (
                                    <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                )}
                            </div>
                            <span className="text-white/70 text-sm font-medium">{t(`contact.area_${area}`)}</span>
                        </label>
                    ))}
                </div>
                {selectedAreas.includes('otro') && (
                    <input type="text" name="area_otro" value={otroArea} onChange={(e) => setOtroArea(e.target.value)} placeholder={t('contact.placeholder_otro_area')} className={`${inputClass} mt-3`} required />
                )}
            </div>

            {/* Modalidad */}
            <div>
                <label className={labelClass}>{t('contact.field_modalidad')} *</label>
                <input type="hidden" name="modalidad" value={selectedModalidad} />
                <div className="flex flex-col gap-3 mt-2">
                    {['virtual_vivo', 'virtual_grabada', 'presencial', 'hibrida'].map((mod) => (
                        <label key={mod} className="flex items-center gap-3 cursor-pointer group" onClick={() => setSelectedModalidad(mod)}>
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${selectedModalidad === mod ? 'border-primary' : 'border-white/30 group-hover:border-primary/60'}`}>
                                {selectedModalidad === mod && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                            </div>
                            <span className="text-white/70 text-sm font-medium">{t(`contact.mod_${mod}`)}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Sistema de gestión */}
            <div>
                <label className={labelClass}>{t('contact.field_sistema_gestion')} *</label>
                <input type="hidden" name="sistema_gestion" value={sistemaGestion} />
                <div className="flex flex-col gap-3 mt-2">
                    {['si', 'no', 'en_proceso'].map((sg) => (
                        <label key={sg} className="flex items-center gap-3 cursor-pointer group" onClick={() => setSistemaGestion(sg)}>
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${sistemaGestion === sg ? 'border-primary' : 'border-white/30 group-hover:border-primary/60'}`}>
                                {sistemaGestion === sg && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                            </div>
                            <span className="text-white/70 text-sm font-medium">{t(`contact.sg_${sg}`)}</span>
                        </label>
                    ))}
                </div>
                {sistemaGestion === 'si' && (
                    <input type="text" name="sistema_gestion_cual" value={sistemaGestionCual} onChange={(e) => setSistemaGestionCual(e.target.value)} placeholder={t('contact.placeholder_sg_cual')} className={`${inputClass} mt-3`} />
                )}
            </div>

            {/* Requisitos */}
            <div>
                <label className={labelClass}>{t('contact.field_requisitos')} </label>
                <textarea
                    name="requisitos_especificos"
                    rows={4}
                    placeholder={t('contact.placeholder_requisitos')}
                    className={inputClass}
                />
            </div>
        </>
    );

    // ═══════════════════════════════════════════════════════════════════
    // ── RENDER: Medicina Ocupacional specific fields ──────────────────
    // ═══════════════════════════════════════════════════════════════════
    const renderMedicinaFields = () => (
        <div className="space-y-6">
            <input type="hidden" name="medicina_servicios" value={selectedServiciosMedicina.join(', ')} />
            <input type="hidden" name="medicina_puestos" value={selectedPuestos.join(', ')} />
            <input type="hidden" name="medicina_riesgos" value={selectedRiesgos.join(', ')} />
            <input type="hidden" name="medicina_modalidad" value={modalidadServicio} />
            <input type="hidden" name="medicina_cuenta_medico" value={cuentaMedico} />
            <input type="hidden" name="medicina_objetivos" value={selectedObjetivosMedicina.join(', ')} />

            {/* Servicio Requerido */}
            <div>
                <label className={labelClass}>¿Qué servicio de Medicina Ocupacional requiere? *</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                    {['Exámenes Médicos Ocupacionales (Ingreso)', 'Exámenes Médicos Periódicos', 'Exámenes Médicos de Retiro', 'Vigilancia Médica Ocupacional', 'Médico Ocupacional', 'Psicología Ocupacional', 'Ergonomía', 'Campañas de Salud', 'Capacitaciones en Salud Ocupacional', 'Otro'].map((serv) => (
                        <label key={serv} className="flex items-center gap-3 cursor-pointer group">
                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${selectedServiciosMedicina.includes(serv) ? 'bg-primary border-primary' : 'border-white/30 group-hover:border-primary/60'}`}>
                                {selectedServiciosMedicina.includes(serv) && <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                            </div>
                            <span className="text-white/70 text-sm font-medium">{serv}</span>
                            <input type="checkbox" className="hidden" checked={selectedServiciosMedicina.includes(serv)} onChange={() => toggleItem(serv, setSelectedServiciosMedicina)} />
                        </label>
                    ))}
                </div>
                {selectedServiciosMedicina.includes('Otro') && (
                    <input type="text" name="medicina_servicio_otro" value={otroServicioMedicina} onChange={(e) => setOtroServicioMedicina(e.target.value)} placeholder="Especifique el servicio requerido" className={`${inputClass} mt-3`} required />
                )}
            </div>

            {/* Colaboradores y Ciudad */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className={labelClass}>¿Cuántos colaboradores participarán? *</label>
                    <input type="text" name="medicina_colaboradores" value={colaboradoresMedicina} onChange={(e) => setColaboradoresMedicina(e.target.value)} placeholder="Ej. 50" className={inputClass} required />
                </div>
                <div>
                    <label className={labelClass}>¿En qué ciudad se ejecutará? *</label>
                    <input type="text" name="medicina_ciudad" value={ciudadServicio} onChange={(e) => setCiudadServicio(e.target.value)} placeholder="Ej. Lima" className={inputClass} required />
                </div>
            </div>

            {/* Tipos de Puesto */}
            <div>
                <label className={labelClass}>¿Qué tipo de puestos desempeñan los trabajadores? *</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                    {['Administrativos', 'Operativos', 'Conductores', 'Trabajo en Altura', 'Espacios Confinados', 'Personal de Planta', 'Personal de Campo', 'Otro'].map((puesto) => (
                        <label key={puesto} className="flex items-center gap-3 cursor-pointer group">
                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${selectedPuestos.includes(puesto) ? 'bg-primary border-primary' : 'border-white/30 group-hover:border-primary/60'}`}>
                                {selectedPuestos.includes(puesto) && <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                            </div>
                            <span className="text-white/70 text-sm font-medium">{puesto}</span>
                            <input type="checkbox" className="hidden" checked={selectedPuestos.includes(puesto)} onChange={() => toggleItem(puesto, setSelectedPuestos)} />
                        </label>
                    ))}
                </div>
                {selectedPuestos.includes('Otro') && (
                    <input type="text" name="medicina_puesto_otro" value={otroPuesto} onChange={(e) => setOtroPuesto(e.target.value)} placeholder="Especifique el puesto" className={`${inputClass} mt-3`} required />
                )}
            </div>

            {/* Riesgos Ocupacionales */}
            <div>
                <label className={labelClass}>¿Existen riesgos ocupacionales asociados a estos puestos? *</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                    {['Ruido', 'Polvo', 'Sustancias químicas', 'Trabajo en altura', 'Carga física', 'Riesgo ergonómico', 'Temperaturas extremas', 'Ninguno', 'Otro'].map((riesgo) => (
                        <label key={riesgo} className="flex items-center gap-3 cursor-pointer group">
                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${selectedRiesgos.includes(riesgo) ? 'bg-primary border-primary' : 'border-white/30 group-hover:border-primary/60'}`}>
                                {selectedRiesgos.includes(riesgo) && <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                            </div>
                            <span className="text-white/70 text-sm font-medium">{riesgo}</span>
                            <input type="checkbox" className="hidden" checked={selectedRiesgos.includes(riesgo)} onChange={() => toggleItem(riesgo, setSelectedRiesgos)} />
                        </label>
                    ))}
                </div>
                {selectedRiesgos.includes('Otro') && (
                    <input type="text" name="medicina_riesgo_otro" value={otroRiesgo} onChange={(e) => setOtroRiesgo(e.target.value)} placeholder="Especifique el riesgo" className={`${inputClass} mt-3`} required />
                )}
            </div>

            {/* Modalidad de Servicio & Médico Ocupacional */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className={labelClass}>¿Cómo desea que se realice el servicio? *</label>
                    <div className="flex flex-col gap-3 mt-2">
                        {['En nuestras instalaciones', 'En las instalaciones de mi empresa (In House)', 'Aún no lo tengo definido'].map((mod) => (
                            <label key={mod} className="flex items-center gap-3 cursor-pointer group" onClick={() => setModalidadServicio(mod)}>
                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${modalidadServicio === mod ? 'border-primary' : 'border-white/30 group-hover:border-primary/60'}`}>
                                    {modalidadServicio === mod && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                                </div>
                                <span className="text-white/70 text-sm font-medium">{mod}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <div>
                    <label className={labelClass}>¿Cuenta con Médico Ocupacional? *</label>
                    <div className="flex flex-col gap-3 mt-2">
                        {['Sí', 'No', 'En proceso de implementación'].map((cuenta) => (
                            <label key={cuenta} className="flex items-center gap-3 cursor-pointer group" onClick={() => setCuentaMedico(cuenta)}>
                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${cuentaMedico === cuenta ? 'border-primary' : 'border-white/30 group-hover:border-primary/60'}`}>
                                    {cuentaMedico === cuenta && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                                </div>
                                <span className="text-white/70 text-sm font-medium">{cuenta}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            {/* Objetivos */}
            <div>
                <label className={labelClass}>¿Cuál es el objetivo principal? *</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                    {['Cumplimiento legal', 'Inicio de operaciones', 'Auditoría', 'Certificación ISO', 'Vigilancia periódica', 'Requerimiento de cliente', 'Bienestar del personal', 'Otro'].map((obj) => (
                        <label key={obj} className="flex items-center gap-3 cursor-pointer group">
                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${selectedObjetivosMedicina.includes(obj) ? 'bg-primary border-primary' : 'border-white/30 group-hover:border-primary/60'}`}>
                                {selectedObjetivosMedicina.includes(obj) && <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                            </div>
                            <span className="text-white/70 text-sm font-medium">{obj}</span>
                            <input type="checkbox" className="hidden" checked={selectedObjetivosMedicina.includes(obj)} onChange={() => toggleItem(obj, setSelectedObjetivosMedicina)} />
                        </label>
                    ))}
                </div>
                {selectedObjetivosMedicina.includes('Otro') && (
                    <input type="text" name="medicina_objetivo_otro" value={otroObjetivoMedicina} onChange={(e) => setOtroObjetivoMedicina(e.target.value)} placeholder="Especifique el objetivo" className={`${inputClass} mt-3`} required />
                )}
            </div>

            {/* Fecha y Requerimientos Adicionales */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                    <label className={labelClass}>¿Cuál es la fecha estimada de inicio? *</label>
                    <input type="date" name="medicina_fecha_inicio" className={inputClass} required />
                </div>
            </div>
            
            <div>
                <label className={labelClass}>¿Requerimiento o condición especial? </label>
                <textarea
                    name="medicina_requerimientos_especiales"
                    rows={4}
                    placeholder="Detalle cualquier información adicional que debamos considerar..."
                    className={inputClass}
                />
            </div>
        </div>
    );

    // ═══════════════════════════════════════════════════════════════════
    // ── RENDER: Privacy checkbox + Submit ─────────────────────────────
    // ═══════════════════════════════════════════════════════════════════
    const renderPrivacyAndSubmit = () => (
        <>
            {/* Privacy checkbox */}
            <div className="flex items-start gap-4 p-5 bg-white/5 rounded-2xl border border-white/10">
                <button
                    type="button"
                    role="checkbox"
                    aria-checked={agreed}
                    onClick={() => setAgreed(v => !v)}
                    className={`flex-shrink-0 w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all mt-0.5 ${agreed ? 'bg-primary border-primary' : 'border-white/30 hover:border-primary/60'}`}
                >
                    {agreed && (
                        <svg className="w-3.5 h-3.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    )}
                </button>
                <p className="text-white/50 text-sm font-medium leading-relaxed">
                    {t('contact.privacy').split('<a>')[0]}
                    <button type="button" onClick={() => { setShowPrivacy(true); window.scrollTo(0, 0); }} className="text-primary font-bold hover:underline">
                        {t('contact.privacy').split('<a>')[1]?.split('</a>')[0]}
                    </button>
                    {t('contact.privacy').split('</a>')[1]}
                </p>
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={!agreed}
                className={`w-full py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-4 group transition-all shadow-[0_20px_50px_rgba(178,197,53,0.3)] font-heading ${agreed ? 'bg-primary text-secondary hover:bg-white hover:scale-[1.02] cursor-pointer' : 'bg-white/10 text-white/30 cursor-not-allowed'}`}
            >
                {t('contact.submit')}
                <Send size={16} className={agreed ? "group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" : ""} />
            </button>

            <p className="text-center text-white/20 text-[10px] font-bold uppercase tracking-widest font-heading">
                {t('contact.disclaimer')}
            </p>
        </>
    );

    // ═══════════════════════════════════════════════════════════════════
    // ── MAIN RENDER ──────────────────────────────────────────────────
    // ═══════════════════════════════════════════════════════════════════
    return (
        <>
        <div style={{ display: showPrivacy ? 'none' : 'block' }}>
        <div className="pt-20">
            <Helmet>
                <title>Contacto y Asesoría ISO | APM Group</title>
                <meta name="description" content="Contáctanos para evaluar mejoras en tus procesos a través de certificaciones internacionales y sostenibilidad en todo el Perú." />
                <link rel="canonical" href="https://apmgroup.pe/contacto" />
            </Helmet>

            {/* ── Hero ─────────────────────────────────────────────────────── */}
            <section className="bg-secondary text-white py-24 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img src="/Imágenes/Contact.webp" alt="Background" className="w-full h-full object-cover object-bottom" />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <p className="uppercase font-black text-primary tracking-[0.25em] mb-4 text-sm animate-pulse font-heading">
                        {t('contact.label')}
                    </p>
                    <h1 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tight font-heading">
                        {t('contact.title')}
                    </h1>
                    <p className="max-w-3xl mx-auto text-white/70 text-lg md:text-xl font-medium leading-relaxed">
                        {t('contact.description')}
                    </p>
                </div>
            </section>

            {/* ── Form Section ─────────────────────────────────────────────── */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F9FBE7]/30 -z-10 skew-x-[-12deg] translate-x-20" />

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                        {/* Left: Info */}
                        <div className="lg:col-span-4 space-y-10 lg:sticky lg:top-28">
                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-5xl font-black text-secondary leading-tight uppercase tracking-tighter font-heading">
                                    {t('contact.connect_title_1')} <br />
                                    <span className="text-primary italic">{t('contact.connect_title_2')}</span>
                                </h2>
                                <div className="w-16 h-1 bg-primary rounded-full" />
                                <p className="text-secondary/60 font-medium leading-relaxed max-w-sm">
                                    {t('contact.connect_desc')}
                                </p>
                            </div>

                            <div className="space-y-6">
                                {contactInfo.map((info, idx) => (
                                    <a key={idx} href={info.link} target={info.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="flex items-center gap-5 group">
                                        <div className="w-12 h-12 rounded-xl bg-secondary text-white flex items-center justify-center group-hover:bg-primary group-hover:text-secondary transition-all duration-300">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-secondary/30 font-heading">{t(info.titleKey)}</p>
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

                        {/* Right: Form */}
                        <div className="lg:col-span-8">
                            <div className="bg-secondary/80 backdrop-blur-xl rounded-[50px] p-10 md:p-14 shadow-[0_50px_100px_rgba(0,0,0,0.15)] relative overflow-hidden group border border-white/10">
                                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-1000" />
                                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/15 transition-all duration-1000" />

                                <div className="relative z-10">
                                    <div className="mb-10">
                                        <span className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block font-heading">
                                            {t('contact.form_badge')}
                                        </span>
                                        <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-3 leading-none font-heading">
                                            {t('contact.form_title_1')}{' '}
                                            <span className="text-primary italic">{t('contact.form_title_2')}</span>
                                        </h3>
                                        <p className="text-white/50 font-medium text-sm">{t('contact.form_subtitle')}</p>
                                    </div>

                                    {/* Service selector */}
                                    <div className="mb-10">
                                        <h4 className="text-sm font-black uppercase tracking-widest text-white mb-5 font-heading">
                                            {t('contact.service_question')}
                                        </h4>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                            {serviceCards.map((service) => (
                                                <button
                                                    key={service.id}
                                                    type="button"
                                                    onClick={() => handleServiceChange(service.id)}
                                                    className={`relative p-5 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center gap-3 text-center group/card ${
                                                        selectedService === service.id
                                                            ? 'bg-primary/15 border-primary text-primary shadow-[0_0_30px_rgba(178,197,53,0.15)]'
                                                            : 'bg-white/5 border-white/10 text-white/50 hover:border-primary/40 hover:bg-white/10 hover:text-white/70'
                                                    }`}
                                                >
                                                    <div className={`transition-transform duration-300 ${selectedService === service.id ? 'scale-110' : 'group-hover/card:scale-105'}`}>
                                                        {service.icon}
                                                    </div>
                                                    <span className="text-[10px] font-black uppercase tracking-widest font-heading leading-tight">
                                                        {t(service.labelKey)}
                                                    </span>
                                                    {selectedService === service.id && (
                                                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-full" />
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* ── Dynamic Form ───────────────────────────── */}
                                    {selectedService && (
                                        <form name="contacto-apm" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/exito" className="space-y-6">
                                            <input type="hidden" name="form-name" value="contacto-apm" />
                                            <input type="hidden" name="servicio_requerido" value={selectedService} />
                                            <p className="hidden"><label>Don't fill this out if you're human: <input name="bot-field" /></label></p>

                                            {/* Row 1: Nombre + Cargo */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className={labelClass}>{t('contact.field_name')} *</label>
                                                    <input required type="text" name="nombre" placeholder={t('contact.placeholder_name')} className={inputClass} />
                                                </div>
                                                <div>
                                                    <label className={labelClass}>{t('contact.field_cargo')} *</label>
                                                    <input required type="text" name="cargo" placeholder={t('contact.placeholder_cargo')} className={inputClass} />
                                                </div>
                                            </div>

                                            {/* Row 2: Email + Teléfono */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className={labelClass}>{t('contact.field_email')} *</label>
                                                    <input required type="email" name="email" placeholder={t('contact.placeholder_email')} className={inputClass} />
                                                </div>
                                                <div>
                                                    <label className={labelClass}>{t('contact.field_phone')} *</label>
                                                    <input required type="tel" name="telefono" placeholder={t('contact.placeholder_phone')} className={inputClass} />
                                                </div>
                                            </div>

                                            {/* Row 3: Ciudad + RUC */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className={labelClass}>{t('contact.field_city')} *</label>
                                                    <input required type="text" name="ciudad" placeholder={t('contact.placeholder_city')} className={inputClass} />
                                                </div>
                                                <div>
                                                    <label className={labelClass}>{t('contact.field_ruc')} *</label>
                                                    <input required type="text" name="ruc" placeholder={t('contact.placeholder_ruc')} maxLength={11} className={inputClass} />
                                                </div>
                                            </div>

                                            {/* Row 4: Empresa + Industria */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className={labelClass}>{t('contact.field_company')} *</label>
                                                    <input required type="text" name="empresa" placeholder={t('contact.placeholder_company')} className={inputClass} />
                                                </div>
                                                <div>
                                                    <label className={labelClass}>{t('contact.field_industry')} *</label>
                                                    <select required name="industria" defaultValue="" className={`${inputClass} cursor-pointer appearance-none`}>
                                                        <option value="" disabled className={selectOptionClass}>{t('contact.select_industry')}</option>
                                                        {([
                                                            ['manufactura', 'industry_manufactura'],
                                                            ['construccion', 'industry_construccion'],
                                                            ['mineria', 'industry_mineria'],
                                                            ['energia', 'industry_energia'],
                                                            ['retail', 'industry_retail'],
                                                            ['logistica', 'industry_logistica'],
                                                            ['salud', 'industry_salud'],
                                                            ['educacion', 'industry_educacion'],
                                                            ['tecnologia', 'industry_tecnologia'],
                                                            ['servicios', 'industry_servicios'],
                                                            ['alimentos', 'industry_alimentos'],
                                                            ['agroindustria', 'industry_agroindustria'],
                                                            ['financiero', 'industry_financiero'],
                                                            ['otro', 'industry_otro']
                                                        ] as const).map(([value, labelKey]) => (
                                                            <option key={value} value={value} className={selectOptionClass}>
                                                                {t(`contact.${labelKey}`)}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            {/* Row 5: ¿Cómo se enteró? + Trabajadores */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className={labelClass}>{t('contact.field_source')} *</label>
                                                    <select required name="como_se_entero" defaultValue="" className={`${inputClass} cursor-pointer appearance-none`}>
                                                        <option value="" disabled className={selectOptionClass}>{t('contact.select_source')}</option>
                                                        {([
                                                            ['recomendacion', 'how_recomendacion'],
                                                            ['google', 'how_google'],
                                                            ['linkedin', 'how_linkedin'],
                                                            ['redes', 'how_redes'],
                                                            ['webinar', 'how_webinar'],
                                                            ['evento', 'how_evento'],
                                                            ['email', 'how_email'],
                                                            ['otro', 'how_otro']
                                                        ] as const).map(([value, labelKey]) => (
                                                            <option key={value} value={value} className={selectOptionClass}>
                                                                {t(`contact.${labelKey}`)}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className={labelClass}>{t('contact.field_trabajadores')} *</label>
                                                    <select required name="trabajadores" defaultValue="" className={`${inputClass} cursor-pointer appearance-none`}>
                                                        <option value="" disabled className={selectOptionClass}>{t('contact.select_trabajadores')}</option>
                                                        {['1-10', '11-50', '51-200', '201-500', '500+'].map((rango) => (
                                                            <option key={rango} value={rango} className={selectOptionClass}>{rango}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            {/* ── Service-specific fields ───────────────── */}
                                            {(selectedService === 'consultoria' || selectedService === 'auditoria') && renderConsultoriaAuditoriaFields()}
                                            {selectedService === 'formacion' && renderFormacionFields()}
                                            {selectedService === 'medicina' && renderMedicinaFields()}

                                            {/* ── Privacy + Submit ──────────────────────── */}
                                            {renderPrivacyAndSubmit()}
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Map Section ──────────────────────────────────────────────── */}
            <section className="bg-tertiary py-20 relative">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-8 font-heading">
                        {t('contact.office')}
                    </h3>
                    <div className="max-w-4xl mx-auto h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
                        <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                            <div className="bg-secondary text-primary px-6 py-3 rounded-xl font-bold tracking-widest uppercase flex items-center gap-2">
                                <MapPin size={18} />
                                Ver en Google Maps
                            </div>
                        </div>
                        <iframe
                            src={MAPS_EMBED_URL}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="filter grayscale-[20%] contrast-125 transition-all duration-700 group-hover:grayscale-0"
                        />
                    </div>
                    <p className="text-secondary/60 text-sm font-medium mt-6">{t('contact.office_desc')}</p>
                </div>
            </section>
        </div>
        </div>
        {showPrivacy && <Privacy onBack={() => { setShowPrivacy(false); window.scrollTo(0, 0); }} />}
        </>
    );
};

export default Contact;
