import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { diagnosticQuestions, getScoreColor, getScoreBg, getDiagnostic } from '../data/diagnosticQuestions';

/* ── SVG Gauge Component ─────────────────────────────────────────────── */
const ScoreGauge = ({ percentage }: { percentage: number }) => {
  const [animPct, setAnimPct] = useState(0);
  const color = getScoreColor(percentage);
  const radius = 90;
  const stroke = 14;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animPct / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => setAnimPct(percentage), 200);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: 240, height: 240 }}>
      <svg width={240} height={240} viewBox="0 0 240 240" className="-rotate-90">
        <circle cx="120" cy="120" r={radius} fill="none" stroke="#e5e7eb" strokeWidth={stroke} />
        <circle
          cx="120" cy="120" r={radius} fill="none"
          stroke={color} strokeWidth={stroke} strokeLinecap="round"
          strokeDasharray={circumference} strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 1.5s cubic-bezier(0.4,0,0.2,1)' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-5xl font-black font-heading" style={{ color }}>{Math.round(animPct)}%</span>
        <span className="text-xs font-bold uppercase tracking-widest text-secondary/40 mt-1">Implementación</span>
      </div>
    </div>
  );
};

/* ── Main Component ──────────────────────────────────────────────────── */
const ChecklistISO = () => {
  const [phase, setPhase] = useState<'intro' | 'quiz' | 'result'>('intro');
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showError, setShowError] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [userData, setUserData] = useState({ nombre: '', email: '', empresa: '', cargo: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  const totalQuestions = diagnosticQuestions.length;
  const progress = ((currentQ) / totalQuestions) * 100;
  const question = diagnosticQuestions[currentQ];

  const isFormValid = userData.nombre.trim() !== '' && userData.email.trim() !== '' && userData.empresa.trim() !== '' && userData.cargo.trim() !== '' && agreed;

  useEffect(() => {
    if (topRef.current) topRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [currentQ, phase]);

  const handleStartDiagnostic = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);
    
    const formData = new URLSearchParams();
    formData.append('form-name', 'checklist-iso');
    formData.append('subject', 'Formulario de diagnostico gratuito');
    formData.append('nombre', userData.nombre);
    formData.append('email', userData.email);
    formData.append('empresa', userData.empresa);
    formData.append('cargo', userData.cargo);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString()
    })
    .then(() => setPhase('quiz'))
    .catch((err) => {
      console.error('Error enviando formulario', err);
      setPhase('quiz');
    })
    .finally(() => setIsSubmitting(false));
  };

  const handleNext = () => {
    if (selectedOption === null) { setShowError(true); return; }
    setAnswers(prev => ({ ...prev, [currentQ]: selectedOption }));
    if (currentQ < totalQuestions - 1) {
      setCurrentQ(prev => prev + 1);
      setSelectedOption(answers[currentQ + 1] ?? null);
      setShowError(false);
    } else {
      setPhase('result');
    }
  };

  const handlePrev = () => {
    if (currentQ > 0) {
      if (selectedOption !== null) setAnswers(prev => ({ ...prev, [currentQ]: selectedOption }));
      setCurrentQ(prev => prev - 1);
      setSelectedOption(answers[currentQ - 1] ?? null);
      setShowError(false);
    }
  };

  const finalScore = (() => {
    const allAnswers = { ...answers };
    if (selectedOption !== null) allAnswers[currentQ] = selectedOption;
    const totalScore = Object.values(allAnswers).reduce((sum, s) => sum + s, 0);
    return Math.round(totalScore / totalQuestions);
  })();

  const diagnostic = getDiagnostic(finalScore);
  const scoreColor = getScoreColor(finalScore);
  const scoreBg = getScoreBg(finalScore);

  const inputClass = "w-full bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 text-secondary placeholder:text-secondary/30 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-sm font-medium font-body";
  const labelClass = "text-xs font-black uppercase tracking-widest text-secondary/60 ml-1 mb-1.5 block font-heading";

  /* ── RENDER ─────────────────────────────────────────────────────────── */
  return (
    <>
    {/* ── INTRO PHASE ───────────────────────────────────────────────────── */}
    {phase === 'intro' && (
    <div className="pt-20" ref={topRef}>
      <Helmet>
        <title>Diagnóstico ISO 9001 Gratuito | APM Group</title>
        <meta name="description" content="Realiza un diagnóstico gratuito de tu sistema de gestión ISO 9001 con 20 preguntas clave. Conoce el nivel de implementación de tu empresa." />
        <link rel="canonical" href="https://apmgroup.pe/checklist-iso-9001" />
      </Helmet>

      <section className="bg-secondary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT: Copy */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="bg-primary text-black px-5 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest inline-block animate-pulse font-heading">Herramienta Gratuita</span>
                <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">By APM Group</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] uppercase tracking-tight font-heading">
                Diagnóstico de implementación{' '}
                <span className="text-primary italic">ISO 9001</span>
              </h1>
              <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-xl font-medium">
                Responde 20 preguntas clave y obtén un diagnóstico instantáneo del nivel de implementación de tu sistema de gestión de calidad.{' '}
                <span className="text-white font-bold">100% gratuito, resultados al instante.</span>
              </p>
              <div className="flex flex-wrap gap-8 pt-4">
                <div>
                  <p className="text-4xl md:text-5xl font-black text-primary font-heading leading-none">20</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mt-1">Preguntas{'\n'}Clave</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-black text-primary font-heading leading-none">5</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mt-1">Categorías{'\n'}ISO 9001</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-black text-primary font-heading leading-none">5 min</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mt-1">Tiempo{'\n'}estimado</p>
                </div>
              </div>
            </div>

            {/* RIGHT: Registration Form */}
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative bg-white rounded-[40px] p-8 md:p-10 shadow-[0_40px_80px_rgba(0,0,0,0.3)] border border-white/20">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-black text-secondary uppercase tracking-tight font-heading leading-tight">
                    Comienza tu{' '}<span className="text-primary">diagnóstico</span>
                  </h2>
                  <p className="text-secondary/50 font-medium text-sm mt-2">Completa tus datos para acceder al formulario de evaluación.</p>
                </div>
                <form name="checklist-iso" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleStartDiagnostic} className="space-y-5">
                  <input type="hidden" name="form-name" value="checklist-iso" />
                  <input type="hidden" name="subject" value="Formulario de diagnostico gratuito" />
                  <p className="hidden"><label>Don’t fill this out if you're human: <input name="bot-field" /></label></p>
                  <div>
                    <label className={labelClass}>Nombre completo *</label>
                    <input required type="text" name="nombre" placeholder="Tu nombre completo" className={inputClass} value={userData.nombre} onChange={e => setUserData(p => ({ ...p, nombre: e.target.value }))} />
                  </div>
                  <div>
                    <label className={labelClass}>Email corporativo *</label>
                    <input required type="email" name="email" placeholder="tu@empresa.com" className={inputClass} value={userData.email} onChange={e => setUserData(p => ({ ...p, email: e.target.value }))} />
                  </div>
                  <div>
                    <label className={labelClass}>Empresa *</label>
                    <input required type="text" name="empresa" placeholder="Nombre de tu empresa" className={inputClass} value={userData.empresa} onChange={e => setUserData(p => ({ ...p, empresa: e.target.value }))} />
                  </div>
                  <div>
                    <label className={labelClass}>Cargo *</label>
                    <input required type="text" name="cargo" placeholder="Ej: Gerente de Calidad" className={inputClass} value={userData.cargo} onChange={e => setUserData(p => ({ ...p, cargo: e.target.value }))} />
                  </div>
                  {/* Privacy consent */}
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl">
                    <button type="button" role="checkbox" aria-checked={agreed} onClick={() => setAgreed(v => !v)}
                      className={`flex-shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all mt-0.5 ${agreed ? 'bg-primary border-primary' : 'border-gray-300 hover:border-primary/60'}`}>
                      {agreed && <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                    </button>
                    <p className="text-secondary/50 text-xs font-medium leading-relaxed">
                      Autorizo a APM Group a utilizar mis datos para enviarme el resultado de este diagnóstico, así como promociones y novedades de sus servicios. Puedo cancelar en cualquier momento.
                    </p>
                  </div>
                  <button type="submit" disabled={!isFormValid || isSubmitting}
                    className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all font-heading ${isFormValid && !isSubmitting ? 'bg-primary text-secondary hover:bg-secondary hover:text-white hover:scale-[1.02] cursor-pointer shadow-[0_15px_40px_rgba(178,197,53,0.4)]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
                    {isSubmitting ? 'Iniciando...' : 'Comenzar el diagnóstico de mi empresa'}
                    <svg className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </button>
                  <p className="text-center text-secondary/30 text-[10px] font-bold uppercase tracking-widest font-heading">100% gratuito · Resultados inmediatos</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <p className="uppercase font-black text-primary tracking-[0.25em] mb-4 text-sm font-heading">¿Cómo funciona?</p>
            <h2 className="text-4xl md:text-5xl font-black text-secondary mb-6 leading-tight uppercase tracking-tight font-heading">
              3 pasos para conocer{' '}<span className="text-primary italic">tu nivel ISO</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { num: '01', title: 'Registra tus datos', desc: 'Completa un breve formulario con tu información profesional para personalizar tu diagnóstico.' },
              { num: '02', title: 'Responde 20 preguntas', desc: 'Evalúa tu sistema de gestión a través de preguntas clave alineadas a ISO 9001:2015.' },
              { num: '03', title: 'Obtén tu resultado', desc: 'Recibe un porcentaje de implementación con diagnóstico ejecutivo y recomendaciones.' },
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 hover:border-primary/30 hover:translate-y-[-8px] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 group text-center">
                <div className="w-16 h-16 bg-[#F9FBE7] rounded-2xl flex items-center justify-center mb-6 mx-auto text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <span className="text-2xl font-black font-heading">{step.num}</span>
                </div>
                <h3 className="text-lg font-black text-secondary uppercase tracking-tight mb-3 font-heading">{step.title}</h3>
                <p className="text-secondary/50 text-sm font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )}

  {/* ── QUIZ PHASE ────────────────────────────────────────────────────── */}
  {phase === 'quiz' && (
    <div className="pt-20 min-h-screen bg-[#FAFBF5]" ref={topRef}>
      <Helmet>
        <title>{`Diagnóstico ISO 9001 — Pregunta ${currentQ + 1} de ${totalQuestions} | APM Group`}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12 max-w-3xl">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-black uppercase tracking-widest text-primary font-heading">Diagnóstico ISO 9001</span>
            <span className="text-xs font-bold text-secondary/50">Pregunta {currentQ + 1} de {totalQuestions}</span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/30 mt-2 text-right font-heading">{Math.round(progress)}% completado</p>
        </div>

        {/* Category Badge */}
        <div className="mb-6">
          <span className="inline-block bg-primary/15 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest font-heading">
            {question.category}
          </span>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-[32px] p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100">
          <h2 className="text-xl sm:text-2xl font-black text-secondary leading-snug mb-8 font-heading" style={{ textTransform: 'none', letterSpacing: 'normal' }}>
            {question.question}
          </h2>

          <div className="space-y-4">
            {question.options.map((opt, idx) => (
              <button key={idx} type="button" onClick={() => { setSelectedOption(opt.score); setShowError(false); }}
                className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 group ${selectedOption === opt.score
                  ? 'border-primary bg-primary/10 shadow-[0_4px_20px_rgba(178,197,53,0.2)]'
                  : 'border-gray-200 bg-white hover:border-primary/40 hover:bg-primary/5'}`}>
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm font-heading transition-all ${selectedOption === opt.score ? 'bg-primary text-black' : 'bg-gray-100 text-secondary/40 group-hover:bg-primary/20 group-hover:text-primary'}`}>
                    {opt.label}
                  </div>
                  <p className={`text-sm font-medium leading-relaxed pt-2 transition-colors ${selectedOption === opt.score ? 'text-secondary' : 'text-secondary/60'}`}>
                    {opt.text}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {showError && (
            <p className="mt-4 text-red-500 text-sm font-bold flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
              Debes seleccionar una respuesta para continuar.
            </p>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-100">
            <button type="button" onClick={handlePrev} disabled={currentQ === 0}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-widest transition-all font-heading ${currentQ === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-secondary/50 hover:text-primary hover:bg-primary/10'}`}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
              Anterior
            </button>
            <button type="button" onClick={handleNext}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-secondary rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-secondary hover:text-white hover:scale-[1.02] transition-all shadow-[0_10px_30px_rgba(178,197,53,0.3)] font-heading">
              {currentQ === totalQuestions - 1 ? 'Finalizar diagnóstico' : 'Siguiente'}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )}

  {/* ── RESULT PHASE ──────────────────────────────────────────────────── */}
  {phase === 'result' && (
    <div className="pt-20 min-h-screen bg-[#FAFBF5]" ref={topRef}>
      <Helmet>
        <title>Resultado Diagnóstico ISO 9001 | APM Group</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-16 max-w-4xl">
        {/* Score Card */}
        <div className="bg-white rounded-[40px] p-8 md:p-14 shadow-[0_30px_80px_rgba(0,0,0,0.06)] border border-gray-100 text-center mb-8">
          <span className="inline-block bg-primary/15 text-primary px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 font-heading">Resultado del Diagnóstico</span>
          <h1 className="text-3xl md:text-4xl font-black text-secondary uppercase tracking-tight mb-2 font-heading">
            Nivel de Implementación <span className="text-primary italic">ISO 9001</span>
          </h1>
          <p className="text-secondary/40 font-medium mb-10">Empresa: <span className="text-secondary font-bold">{userData.empresa}</span></p>

          <div className="flex justify-center mb-10">
            <ScoreGauge percentage={finalScore} />
          </div>

          {/* Diagnostic Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl mb-8" style={{ backgroundColor: scoreBg }}>
            <span className="text-2xl">{diagnostic.icon}</span>
            <span className="font-black uppercase tracking-wider text-sm font-heading" style={{ color: scoreColor }}>{diagnostic.title}</span>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-lg font-bold text-secondary leading-relaxed">{diagnostic.summary}</p>
            <p className="text-secondary/60 font-medium leading-relaxed">{diagnostic.detail}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-secondary rounded-[40px] p-8 md:p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative z-10">
            <span className="inline-block bg-primary/20 text-primary px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 font-heading">¿Quieres alcanzar el 100%?</span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-[0.95] mb-4 font-heading">
              Completa tu implementación{' '}<span className="text-primary italic">con expertos</span>
            </h2>
            <p className="text-white/50 text-lg font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
              Nuestro equipo de consultores certificados puede acompañarte para cerrar las brechas identificadas y llevar tu sistema de gestión al nivel que tu empresa necesita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contacto"
                className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-primary text-secondary rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 hover:shadow-[0_20px_40px_rgba(178,197,53,0.5)] transition-all shadow-[0_10px_30px_rgba(178,197,53,0.3)] font-heading">
                Haz click aquí para tener tu asesoría gratuita
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </a>
              <a href="https://wa.me/51967170627" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-6 border border-white/20 text-white/70 rounded-2xl font-bold text-xs uppercase tracking-widest hover:border-primary/60 hover:text-primary transition-all font-heading">
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    )}
    </>
  );
};

export default ChecklistISO;
