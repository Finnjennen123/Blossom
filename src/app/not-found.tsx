import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 text-center">
      <ScrollReveal>
        <h1 className="text-[clamp(56px,8vw,100px)] font-serif mb-6">Oeps...</h1>
        <p className="text-clay text-[18px] mb-12 max-w-[440px] mx-auto">
          De pagina die je zoekt lijkt niet te bestaan. Laat je meevoeren terug naar de rust van onze hoofdpagina.
        </p>
        <Link href="/" className="btn-primary inline-block">
          Terug naar huis
        </Link>
      </ScrollReveal>
    </div>
  );
}
