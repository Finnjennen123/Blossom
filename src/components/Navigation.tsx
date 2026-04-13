"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";

import { siteConfig } from "@/lib/config";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { business } = siteConfig;
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Force scroll to top on page change if there's no hash
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Behandelingen", href: "/#behandelingen" },
    { name: "Over Els", href: "/over-els" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full h-[72px] z-[100] transition-all duration-300 flex items-center px-6 md:px-12",
        isScrolled || isMenuOpen
          ? "bg-plaster/92 backdrop-blur-md shadow-sm border-b border-sandstone/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-[1200px] w-full mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-3 group z-[110]"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="relative w-8 h-8 transition-transform duration-500 group-hover:rotate-12">
            <Image src="/favicon.svg" alt={`${business.name} Logo`} fill className="object-contain" />
          </div>
          <span className="font-serif text-[26px] text-dark-earth leading-none">
            {business.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-[12px] font-medium uppercase tracking-[0.15em] text-clay hover:text-dark-earth transition-colors"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-terracotta transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link href="/boek" className="btn-primary py-2 px-6 normal-case text-[12px]">
            Boek nu
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-clay z-[110] p-2 -mr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Sluit menu" : "Open menu"}
        >
          <div className="relative w-6 h-6">
            <span className={clsx(
              "absolute left-0 block w-full h-0.5 bg-current transition-all duration-300",
              isMenuOpen ? "top-3 rotate-45" : "top-1"
            )} />
            <span className={clsx(
              "absolute left-0 top-3 block w-full h-0.5 bg-current transition-opacity duration-300",
              isMenuOpen ? "opacity-0" : "opacity-100"
            )} />
            <span className={clsx(
              "absolute left-0 block w-full h-0.5 bg-current transition-all duration-300",
              isMenuOpen ? "top-3 -rotate-45" : "top-5"
            )} />
          </div>
        </button>

        {/* Mobile Menu Panel */}
        <div className={clsx(
          "fixed inset-0 bg-plaster transition-all duration-500 ease-in-out md:hidden z-[105] flex flex-col justify-center px-6",
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        )}>
          <div className="flex flex-col gap-8 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[24px] font-serif text-dark-earth hover:text-terracotta transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/boek" 
              className="btn-primary py-4 px-10 text-[16px] mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Boek nu
            </Link>
          </div>
          
          <div className="absolute bottom-12 left-0 w-full text-center px-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-clay/60 mb-2">Locatie</p>
            <p className="text-clay text-[14px]">{business.address}, {business.city.split(' ').pop()}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
