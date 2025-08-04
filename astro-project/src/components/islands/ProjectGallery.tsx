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
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            onClick={() => setSelected(img.src)}
            class="cursor-pointer rounded hover:opacity-80"
          />
        ))}
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        >
          <img src={selected} alt="Vista ampliada" class="max-h-[90%] max-w-[90%]" />
        </div>
      )}
    </div>
  );
}
