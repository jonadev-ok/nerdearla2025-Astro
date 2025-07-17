import { useState } from 'preact/hooks';

export default function MenuToggle() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden flex justify-end w-full relative px-2 bg-black">
      <button
        className="text-2xl text-orange-500 flex w-10 h-10 justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        ☰
      </button>
      {open && (
        <div className="absolute right-0 mt-2 text-white shadow p-4 flex flex-col gap-4">
            
          <a href="/" class=" hover:text-orange-500 "onClick={() => setOpen(false)}>Inicio</a>
          <a href="#about" class="hover:text-orange-500 "onClick={() => setOpen(false)}>Sobre Nosotros</a>
          <a href="#services" class="hover:text-orange-500 "onClick={() => setOpen(false)}>Servicios</a>
          <a href="#contact" class="hover:text-orange-500 "onClick={() => setOpen(false)}>Contacto</a>
          <a href="/Blog/" class="hover:text-orange-500 "onClick={() => setOpen(false)}>Blog</a>
        </div>
      )}
    </div>
  );
}
