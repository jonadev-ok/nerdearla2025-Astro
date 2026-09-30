/** @jsxImportSource preact */
import { useEffect, useState } from "preact/hooks";

interface ModalProps {
  title: string;      // titulo
  message: string;    // mensaje
  delay?: number;     // tiempo antes de mostrarlo
  downloadUrl: string; // ruta al archivo PDF
  buttonText?: string; // texto de boton
}

export default function Modal({
  title,
  message,
  delay = 5000,
  downloadUrl,
  buttonText = "Descargar guía",
}: ModalProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!open) return null;

  return (
    <div class="guide-modal-backdrop">
      <div class="guide-modal" role="dialog" aria-modal="true" aria-labelledby="guide-modal-title">
        <button
          class="guide-modal-close"
          onClick={() => setOpen(false)}
          aria-label="Cerrar"
        >
          ✕
        </button>

        <span class="guide-modal-mark" aria-hidden="true">✳</span>
        <h2 id="guide-modal-title">{title}</h2>
        <p>{message}</p>
        <a
          href={downloadUrl}
          target="_blank"
          download
          class="guide-modal-button"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}
