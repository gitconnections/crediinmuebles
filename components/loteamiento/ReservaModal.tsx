'use client';

import { useEffect, useRef, useState } from 'react';
import { X, Loader2, Paperclip, BadgeCheck } from 'lucide-react';
import type { Lot } from './types';

type Who = 'asesor' | 'user' | 'sistema';
type Msg = { id: number; who: Who; text: string };
type Phase = 'intro' | 'reserve' | 'deposit' | 'processing' | 'done';

const ADVISOR = { name: 'Carla Mendoza', role: 'Asesora inmobiliaria', initials: 'CM', phone: '+591 700 12345' };
const ADELANTO = 'Bs 2.000';

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

export default function ReservaModal({
  lot,
  onClose,
  onReserved,
}: {
  lot: Lot;
  onClose: () => void;
  onReserved: (id: string) => void;
}) {
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [typing, setTyping] = useState(false);
  const [phase, setPhase] = useState<Phase>('intro');
  const timers = useRef<number[]>([]);
  const idRef = useRef(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const add = (who: Who, text: string) => setMsgs((m) => [...m, { id: idRef.current++, who, text }]);
  const after = (ms: number, fn: () => void) => {
    timers.current.push(window.setTimeout(fn, ms));
  };

  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 9e9, behavior: 'smooth' });
  }, [msgs, typing]);

  useEffect(() => {
    setTyping(true);
    after(700, () => {
      setTyping(false);
      add('asesor', `¡Hola! 👋 Soy ${ADVISOR.name}, asesora de Crediinmuebles. Te escribo por WhatsApp por el lote ${lot.id} (Manzana ${lot.manzana}).`);
      setTyping(true);
    });
    after(2300, () => {
      setTyping(false);
      add('asesor', `Es un gran lote de ${lot.areaM2} m². ${lot.ventajas.slice(0, 2).join(' · ')}. ¿Te gustaría reservarlo? 😊`);
      setPhase('reserve');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onReserve = () => {
    add('user', 'Sí, quiero reservarlo.');
    setPhase('processing');
    setTyping(true);
    after(1100, () => {
      setTyping(false);
      add('asesor', `¡Perfecto! Para dejarlo a tu nombre necesitas un adelanto de ${ADELANTO} (se descuenta del total). Cuando hagas la transferencia, envíame el comprobante por aquí. 🔒`);
      setPhase('deposit');
    });
  };

  const onDeposit = () => {
    add('user', `📎 comprobante_adelanto.jpg — Te envié el comprobante del adelanto de ${ADELANTO} ✅`);
    setPhase('processing');
    after(600, () => add('sistema', `${ADVISOR.name} está verificando el comprobante…`));
    after(2200, () => {
      add('asesor', `¡Comprobante verificado! 🎉 Voy a registrar tu reserva: cambio el estado del lote ${lot.id} de "Libre" a "Reservado" a tu nombre. ✍️`);
      setTyping(true);
    });
    after(3500, () => {
      setTyping(false);
      add('sistema', `✅ El agente inmobiliario marcó el lote ${lot.id} como RESERVADO.`);
      add('asesor', 'Quedó reservado por 7 días. Seguimos por WhatsApp para la firma y el plan de pagos. 🙌');
      onReserved(lot.id);
      setPhase('done');
    });
  };

  const waLink = `https://wa.me/${ADVISOR.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    `Hola ${ADVISOR.name}, soy el interesado en el lote ${lot.id}. Acabo de enviar el adelanto de ${ADELANTO}.`,
  )}`;

  return (
    <div className="pointer-events-auto fixed inset-0 z-[2000] grid place-items-center bg-slate-900/50 p-4 backdrop-blur-sm" onClick={onClose}>
      <div
        className="flex h-[32rem] w-full max-w-md flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Conversación de reserva por WhatsApp"
      >
        {/* WhatsApp-style header */}
        <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3 text-white">
          <div className="relative grid h-10 w-10 place-items-center rounded-full bg-white/20 font-semibold">
            {ADVISOR.initials}
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#075E54] bg-[#25D366]" />
          </div>
          <div className="flex-1">
            <p className="font-poppins text-sm font-bold leading-tight">{ADVISOR.name}</p>
            <p className="flex items-center gap-1 text-xs text-white/80">
              <WhatsAppIcon size={11} /> WhatsApp · {ADVISOR.role}
            </p>
          </div>
          <button onClick={onClose} aria-label="Cerrar" className="grid h-8 w-8 place-items-center rounded-full transition-colors hover:bg-white/20">
            <X size={18} />
          </button>
        </div>

        {/* messages (WhatsApp paper) */}
        <div ref={scrollRef} className="flex-1 space-y-2 overflow-y-auto px-4 py-4" style={{ backgroundColor: '#ece5dd' }}>
          <p className="mx-auto flex w-fit items-center gap-1.5 rounded-md bg-[#fff5c4] px-3 py-1 text-center text-[11px] text-slate-600 shadow-sm">
            🔒 Conversación por WhatsApp · cifrada de extremo a extremo
          </p>
          {msgs.map((m) =>
            m.who === 'sistema' ? (
              <p key={m.id} className="mx-auto w-fit rounded-md bg-white/80 px-3 py-1 text-center text-[11px] font-medium text-slate-500 shadow-sm">
                {m.text}
              </p>
            ) : (
              <div key={m.id} className={`flex ${m.who === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[82%] rounded-lg px-3 py-2 text-sm leading-snug shadow-sm ${
                    m.who === 'user' ? 'rounded-br-none bg-[#d9fdd3] text-slate-800' : 'rounded-bl-none bg-white text-slate-700'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ),
          )}
          {typing && (
            <div className="flex justify-start">
              <div className="flex gap-1 rounded-lg rounded-bl-none bg-white px-3 py-3 shadow-sm">
                <Dot /> <Dot delay="150ms" /> <Dot delay="300ms" />
              </div>
            </div>
          )}
        </div>

        {/* footer / actions */}
        <div className="border-t border-slate-100 bg-[#f0f0f0] p-3">
          {phase === 'reserve' && (
            <div className="flex gap-2">
              <button onClick={onClose} className="rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-50">
                Ahora no
              </button>
              <button onClick={onReserve} className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe5d]">
                <WhatsAppIcon size={16} /> Sí, reservar lote
              </button>
            </div>
          )}
          {phase === 'deposit' && (
            <button onClick={onDeposit} className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe5d]">
              <Paperclip size={16} /> Enviar comprobante · {ADELANTO}
            </button>
          )}
          {phase === 'processing' && (
            <button disabled className="flex w-full items-center justify-center gap-2 rounded-full bg-slate-300 px-4 py-3 text-sm font-semibold text-white">
              <Loader2 size={17} className="animate-spin" /> Enviando por WhatsApp…
            </button>
          )}
          {phase === 'done' && (
            <div className="space-y-2">
              <p className="flex items-center justify-center gap-1.5 text-sm font-semibold text-green-600">
                <BadgeCheck size={18} /> Lote {lot.id} reservado por el agente
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe5d]"
              >
                <WhatsAppIcon size={16} /> Continuar por WhatsApp
              </a>
              <button onClick={onClose} className="w-full rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-50">
                Cerrar
              </button>
            </div>
          )}
          {phase === 'intro' && (
            <p className="flex items-center justify-center gap-1.5 py-2 text-xs text-slate-400">
              <WhatsAppIcon size={13} /> Conectando por WhatsApp con tu asesor…
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function Dot({ delay = '0ms' }: { delay?: string }) {
  return <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-300" style={{ animationDelay: delay }} />;
}
