import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import Image, { StaticImageData } from "next/image";
import elsInActieImg from "../../public/images/els/Els-in-actie.jpeg";
import clsx from "clsx";

interface BookingCTAProps {
  title?: string;
  buttonText?: string;
  href?: string;
  showImage?: boolean;
  imageVariant?: "arch" | "circle";
}

const BookingCTA = ({ 
  title = "Klaar om tot rust te komen?", 
  buttonText = "Boek een sessie", 
  href = "/boek",
  showImage = false,
  imageVariant = "arch"
}: BookingCTAProps) => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-plaster relative overflow-hidden">
      {/* Decorative Arches */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-64 h-96 border border-sandstone/30 arch-clip pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-96 border border-sandstone/30 arch-clip pointer-events-none" />

      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <ScrollReveal stagger>
          {showImage && (
            <div className="mb-10 md:mb-14 flex justify-center">
              <div className="relative p-1.5">
                <div className={clsx(
                  "absolute inset-0 bg-warm-sand/40 translate-x-2 translate-y-2 -z-10",
                  imageVariant === "circle" ? "rounded-full" : "rounded-t-full rounded-b-xl"
                )} />
                <div className={clsx(
                  "relative overflow-hidden shadow-lg border border-sandstone/10 bg-transparent",
                  imageVariant === "circle" ? "w-32 h-32 md:w-44 md:h-44 rounded-full" : "w-28 h-40 md:w-36 md:h-52 rounded-t-full rounded-b-xl"
                )}>
                  <Image 
                    src={elsInActieImg} 
                    alt="Massage sfeerbeeld" 
                    fill 
                    className="object-cover scale-[1.4] origin-center"
                    sizes={imageVariant === "circle" ? "(max-width: 768px) 128px, 176px" : "(max-width: 768px) 112px, 144px"}
                  />
                </div>
              </div>
            </div>
          )}
          <h2 className="font-serif text-[clamp(28px,5vw,56px)] leading-tight mb-8 md:mb-12 max-w-[700px] mx-auto text-dark-earth">
            {title}
          </h2>
          <Link href={href} className="btn-primary inline-block">
            {buttonText}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BookingCTA;
