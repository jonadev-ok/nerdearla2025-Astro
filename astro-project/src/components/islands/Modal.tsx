/** @jsxImportSource preact */
import { useEffect, useState } from "preact/hooks";

interface SocialLink {
  name: string;
  href: string;
  icon: string; // ruta al svg o png
}

interface ModalProps {
  title: string;
  message: string;
  delay?: number; 
  socials?: SocialLink[];
}

export default function Modal({
  title,
  message,
  delay = 5000,
  socials = [],
}: ModalProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!open) return null;

  return (
    <div class="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div class="bg-white p-6 rounded-2xl shadow-lg max-w-sm text-center relative">
        {/* Botón cerrar */}
        <button
          class="absolute top-2 right-2 text-gray-500 hover:text-black"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <h2 class="text-lg font-semibold mb-4">{title}</h2>
        <p class="text-gray-600 mb-4">{message}</p>

        {socials.length > 0 && (
          <div class="flex justify-center gap-4">
            {socials.map((social) => (
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  class="w-8 h-8 hover:opacity-75 transition"
                />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
