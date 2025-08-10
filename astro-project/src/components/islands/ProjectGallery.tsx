/** @jsxImportSource preact */
import { useState } from 'preact/hooks';

interface Image {
  src: string;
  alt: string;
}

interface Props {
  images: Image[];
}

export default function ProjectGallery({ images }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-2 px-4 pb-5 bg-black">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            onClick={() => setSelected(img.src)}
            class="cursor-pointer hover:opacity-80 p-2 rounded-4xl"
          />
        ))}
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-100"
        >
          <img src={selected} alt="Vista ampliada" class="max-h-[90%] max-w-[90%] rounded-4xl" />
        </div>
      )}
    </div>
  );
}
