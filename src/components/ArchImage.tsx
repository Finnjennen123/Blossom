import Image from "next/image";
import clsx from "clsx";

interface ArchImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

const ArchImage = ({ src, alt, className, priority }: ArchImageProps) => {
  return (
    <div className={clsx("relative w-full aspect-[3/4] arch-clip overflow-hidden bg-warm-sand", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 hover:scale-105"
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
};

export default ArchImage;
