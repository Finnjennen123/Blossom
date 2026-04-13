import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

interface BookingCTAProps {
  title?: string;
  buttonText?: string;
  href?: string;
}

const BookingCTA = ({ title = "Klaar om tot rust te komen?", buttonText = "Boek een sessie", href = "/boek" }: BookingCTAProps) => {
  return (
    <section className="py-32 px-6 md:px-12 bg-plaster relative overflow-hidden">
      {/* Decorative Arches */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-64 h-96 border border-sandstone/30 arch-clip pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-96 border border-sandstone/30 arch-clip pointer-events-none" />

      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <ScrollReveal>
          <h2 className="font-serif text-[32px] md:text-[56px] leading-tight mb-8 md:mb-12 max-w-[600px] mx-auto">
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
