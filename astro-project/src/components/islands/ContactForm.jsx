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
      setStatus('✅ Mensaje enviado con éxito.');
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
      class="flex flex-col gap-y-4 max-w-2xl w-full mx-auto p-8 my-8 bg-gradient-to-r from-orange-500 to-red-700 rounded-lg shadow-lg"
    >
      <h2 class="text-2xl text-white font-bold mb-2">Contáctanos</h2>

      <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          required
          class="border rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-300"
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          required
          class="border rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-300"
        />
      </div>

      <select
        name="consulta"
        required
        class="border rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-300"
      >
        <option value="">¿Cuál es tu consulta?</option>
        <option>Desarrollo web</option>
        <option>Gestión y mantenimiento</option>
        <option>Marketing digital</option>
      </select>

      <textarea
        name="message"
        placeholder="Tu mensaje"
        required
        rows="5"
        class="border rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-300"
      ></textarea>

      <button
        type="submit"
        class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded w-full md:w-auto transition"
      >
        Enviar mensaje
      </button>

      {status && (
        <p
          class={`mt-2 font-semibold ${
            status.startsWith('✅') ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {status}
        </p>
      )}
    </form>
  );
}
