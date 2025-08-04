/** @jsxImportSource preact */
import { useState } from 'preact/hooks';


interface Props {
  url: string;
  title: string;
}

export default function ShareButtons({ url}: Props) {
  const [copied, setCopied] = useState(false);

  const twitterURL = `https://x.com/intent/tweet?url=${encodeURIComponent(url)}}`;
  const linkedinURL = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("No se pudo copiar el enlace", err);
    }
  };

  return (
    <div class="flex w-full justify-center gap-4 mt-4">
      <a
        href={twitterURL}
        target="_blank"
        rel="noopener noreferrer"
        class="px-3 py-2 flex justify-around items-center  bg-blue-500 text-white rounded w-40"
      >
        <span>Compartir en</span> <img class="w-4" src="../../../public/logos/Xspace.svg" alt="x-space" loading="lazy"/>
      </a>
      <a
        href={linkedinURL}
        target="_blank"
        rel="noopener noreferrer"
        class="px-3 py-2 flex justify-around items-center  bg-blue-500 text-white rounded w-40"
      >
        <span>Compartir en</span> <img class="w-4" src="../../../public/logos/Linkedin.svg" alt="linkedin" loading="lazy"/>
      </a>
      <button
        onClick={copyLink}
        class="px-3 py-2 flex justify-around items-center  bg-blue-500 text-white rounded w-40 cursor-pointer"
      >
        <span>{copied ? "¡Copiado!" : "Copiar enlace"}</span>
      </button>
    </div>
  );
}
