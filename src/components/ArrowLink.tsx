import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ArrowLinkProps {
  href: string;
  label: string;
  className?: string;
}

const ArrowLink = ({ href, label, className }: ArrowLinkProps) => {
  return (
    <Link
      href={href}
      className="group text-terracotta text-[12px] font-medium uppercase tracking-[0.1em] inline-flex items-center gap-2 transition-all duration-300"
    >
      {label}
      <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-[6px]" />
    </Link>
  );
};

export default ArrowLink;
