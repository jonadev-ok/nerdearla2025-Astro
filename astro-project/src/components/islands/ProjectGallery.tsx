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
      <div class="project-gallery-grid">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            onClick={() => setSelected(img.src)}
            class="project-gallery-image"
          />
        ))}
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          class="project-lightbox"
        >
          <img src={selected} alt="Vista ampliada" class="project-lightbox-image" />
        </div>
      )}
    </div>
  );
}
