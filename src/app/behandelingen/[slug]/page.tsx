import { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/lib/services";
import ServiceDetailClient from "./ServiceDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug || s.options?.some(opt => opt.slug === slug));

  if (!service) {
    return {
      title: "Behandeling niet gevonden | Blossom",
    };
  }

  return {
    title: `${service.name} | Blossom Massagetherapie Antwerpen`,
    description: service.description,
    openGraph: {
      title: `${service.name} | Blossom`,
      description: service.description,
      images: [service.image],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  
  // Find the base service
  const baseService = services.find((s) => s.slug === slug || s.options?.some(opt => opt.slug === slug));

  if (!baseService) {
    notFound();
  }

  // Find the specific option if it exists, otherwise use base info
  const initialOption = baseService.options?.find(opt => opt.slug === slug) || 
                        { duration: baseService.duration, price: baseService.price, slug: baseService.slug };

  const relatedServices = services.filter((s) => s.id !== baseService.id).slice(0, 3);

  return (
    <ServiceDetailClient 
      baseService={baseService}
      initialOption={initialOption}
      relatedServices={relatedServices}
    />
  );
}
