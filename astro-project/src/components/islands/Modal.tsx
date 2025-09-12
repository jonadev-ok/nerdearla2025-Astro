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
    <div class="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div class="bg-black p-6 rounded-2xl shadow-lg max-w-sm text-center relative">
        {/* Botón cerrar */}
        <button
          class="absolute top-2 right-2 text-white hover:text-red-500 cursor-pointer"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <h2 class="text-lg font-semibold mb-4 text-orange-500">{title}</h2>
        <p class=" mb-4 text-white">{message}</p>

        {/* Botón de descarga */}
        <a
          href={downloadUrl}
          target="_blank"
          download
          class="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-700 transition"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}
