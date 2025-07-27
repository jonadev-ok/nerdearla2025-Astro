// src/components/ContactForm.jsx
import { useState } from 'preact/hooks';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('Enviando...');

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch(form.action, {
      method: form.method,
      body: data,
    });

    if (response.ok) {
      setStatus('✅ Mensaje enviado');
      form.reset();
    } else {
      setStatus('❌ Hubo un error. Intentalo de nuevo.');
    }
  }

  return (
    <form
      action="https://formsubmit.co/tucorreo@dominio.com"
      method="POST"
      onSubmit={handleSubmit}
      class="flex flex-col gap-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Tu nombre"
        required
        class="border p-2"
      />
      <input
        type="email"
        name="email"
        placeholder="Tu correo"
        required
        class="border p-2"
      />
      <textarea
        name="message"
        placeholder="Tu mensaje"
        required
        class="border p-2"
      />
      <button
        type="submit"
        class="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Enviar
      </button>
      {status && <p>{status}</p>}
    </form>
  );
}
