import integratieveImg from "../../public/images/products/Unknown-13.jpeg";
import crystalHealingImg from "../../public/images/products/Unknown-15.jpeg";
import holisticPulsingImg from "../../public/images/products/Unknown-16.jpeg";
import lomiLomiImg from "../../public/images/products/Unknown-18.jpeg";
import { StaticImageData } from "next/image";

export interface Service {
  id: string;
  name: string;
  slug: string;
  duration: string;
  price: number;
  description: string;
  fullDescription: string;
  image: string | StaticImageData;
  imageScale?: number;
  clothing?: string;
  benefits?: string[];
  options?: { duration: string; price: number; slug: string }[];
}

export const services: Service[] = [
  {
    id: "integratieve",
    name: "Integratieve Massage",
    slug: "integratieve-60",
    duration: "60 min",
    price: 75,
    image: integratieveImg,
    description: "Een harmonieuze combinatie van holistic pulsing, intuïtieve massage en polariteitsmassage.",
    fullDescription: "Deze behandeling is Els haar signature blend. Het is een harmonieuze combinatie van drie krachtige massagevormen: holistic pulsing, intuïtieve massage met olie en polariteitsmassage. De polariteitsmassage werkt door handen op twee plaatsen op het lichaam te leggen om energiebanen te verbinden en de natuurlijke stroom van energie te herstellen.",
    options: [
      { duration: "60 min", price: 75, slug: "integratieve-60" },
      { duration: "80 min", price: 95, slug: "integratieve-80" }
    ]
  },
  {
    id: "crystal-healing",
    name: "Crystal Healing Massage",
    slug: "crystal-healing-massage",
    duration: "60 min",
    price: 85,
    image: crystalHealingImg,
    imageScale: 1.15,
    description: "Een warme oliemassage in combinatie met de energetische kracht van kristallen.",
    fullDescription: "Een ontspannende oliemassage waarbij warme kristallen worden gebruikt om zowel fysieke als energetische blokkades te verzachten. De combinatie van de warmte van de stenen en hun unieke energetische eigenschappen zorgt voor een diepe staat van ontspanning en herstel.",
  },
  {
    id: "holistic-pulsing",
    name: "Holistic Pulsing",
    slug: "holistic-pulsing",
    duration: "50 min",
    price: 60,
    image: holisticPulsingImg,
    description: "Een zachte, ritmische massagevorm die met kleding aan wordt uitgevoerd.",
    fullDescription: "Holistic Pulsing is een uiterst zachte massagevorm waarbij het lichaam op een ritmische manier wordt gewiegd en gepulst. Deze methode is zeer toegankelijk omdat de massage met kleding aan wordt uitgevoerd. Het is ideaal voor mensen die nieuw zijn met massage of die op zoek zijn naar een diepe, zachte ontspanning zonder zich te hoeven ontkleedden.",
  },
  {
    id: "lomi-lomi",
    name: "Lomi Lomi Massage",
    slug: "lomi-lomi",
    duration: "80 min",
    price: 135,
    image: lomiLomiImg,
    imageScale: 1.15,
    description: "Een traditionele Hawaiiaanse massage met vloeiende, ritmische strijkingen.",
    fullDescription: "Lomi Lomi is een eeuwenoude Hawaiiaanse massagetechniek die bekend staat om zijn vloeiende, ritmische en dansante bewegingen over het hele lichaam. Met gebruik van de onderarmen en handen worden lange, continue strijkingen gemaakt die aanvoelen als de golven van de oceaan. Het is een diep koesterende ervaring die zowel lichaam als geest volledig tot rust brengt.",
  },
];
