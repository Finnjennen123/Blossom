import Image from "next/image";
import { services } from "@/lib/services";
import elsMainImg from "../../public/images/els/Els-main picture.jpg.avif";
import elsInActieImg from "../../public/images/els/Els-in-actie.jpeg";

export default function ImagePreloader() {
  // This component preloads the heavy hero/product images in the background
  // to ensure they show up completely instantaneously with zero blur when navigating.
  return (
    <div 
      style={{ opacity: 0.01, position: "absolute", top: "-9999px", width: "1px", height: "1px", overflow: "hidden", pointerEvents: "none" }} 
      aria-hidden="true"
    >
      <Image src={elsMainImg} alt="preload" priority fill sizes="(max-width: 768px) 100vw, 50vw" quality={100} />
      <Image src={elsInActieImg} alt="preload" priority fill sizes="(max-width: 768px) 100vw, 50vw" />
      {services.map((s) => (
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image key={s.id} src={s.image} alt="preload" priority fill sizes="(max-width: 768px) 100vw, 50vw" />
      ))}
    </div>
  );
}
