'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith('/admin') || false;
  const navLinks = [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/hizmetlerimiz', label: 'Hizmetlerimiz' },
    { href: '/galeri', label: 'Galeri' },
    { href: '/haberler', label: 'Haberler' },
    { href: '/hakkimizda', label: 'Hakkımızda' },
    { href: '/iletisim', label: 'İletişim' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu on escape key and handle body scroll
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    // Simple body scroll lock without jumping to top
    if (isMenuOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY.replace('-', '')));
      }
    }

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Admin sayfasında Header'ı gösterme
  if (isAdminPage) {
    return null;
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 transition-all duration-300 sm:px-5 sm:pt-5">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <Link
            href="/"
            className={`group flex min-h-[64px] items-center rounded-full border px-4 py-2 shadow-[0_18px_45px_rgba(31,24,18,0.16)] backdrop-blur-2xl transition-all duration-300 sm:px-5 ${
              isScrolled
                ? 'border-white/35 bg-[rgba(255,250,248,0.18)]'
                : 'border-white/28 bg-[rgba(255,250,248,0.10)]'
            }`}
            aria-label="Golden Liora ana sayfa"
          >
            <div className="relative flex items-center transition-all duration-300 drop-shadow-[0_2px_12px_rgba(255,255,255,0.42)]">
              <Image 
                src="/logo.png"
                alt="Golden Liora"
                width={854}
                height={292}
                className={`h-11 w-auto max-w-[180px] object-contain transition-all duration-300 group-hover:scale-[1.015] sm:max-w-[230px] ${
                  isScrolled ? 'lg:h-12' : 'lg:h-[54px]'
                }`}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className={`hidden min-h-[58px] items-center gap-1 rounded-full border px-2 py-2 shadow-[0_18px_50px_rgba(31,24,18,0.16)] backdrop-blur-2xl transition-all duration-300 lg:flex ${
              isScrolled
                ? 'border-white/35 bg-[rgba(255,250,248,0.18)]'
                : 'border-white/28 bg-[rgba(255,250,248,0.10)]'
            }`}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-[rgba(223,167,69,0.24)] text-[#3d3528] shadow-[0_10px_24px_rgba(31,24,18,0.08)]'
                      : 'text-[#2f2a24]/88 hover:bg-[rgba(255,250,248,0.22)] hover:text-[var(--brand-panel-deep)]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`rounded-full border p-3 shadow-[0_12px_34px_rgba(31,24,18,0.14)] backdrop-blur-2xl transition-colors duration-200 lg:hidden ${
              isScrolled
                ? 'border-white/35 bg-[rgba(255,250,248,0.18)] text-[#2f2a24] hover:bg-[rgba(255,250,248,0.28)]'
                : 'border-white/28 bg-[rgba(255,250,248,0.10)] text-[#2f2a24] hover:bg-[rgba(255,250,248,0.22)]'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Mobil menüyü aç"
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : 'translate-y-0'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 my-1 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Portal */}
        {isMenuOpen && typeof window !== 'undefined' && createPortal(
          <div className="fixed inset-0 z-[9999] bg-[linear-gradient(180deg,#fffaf8_0%,#f5e4c5_58%,#dba34a_100%)] text-[var(--dream-dark)] lg:hidden">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[rgba(199,155,67,0.24)] px-5 py-4">
              <Link
                href="/"
                className="inline-flex min-h-[58px] items-center rounded-full border border-[rgba(199,155,67,0.24)] bg-white/72 px-4 py-2 shadow-[0_14px_34px_rgba(31,24,18,0.10)]"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Golden Liora ana sayfa"
              >
                <Image 
                  src="/logo.png"
                  alt="Golden Liora"
                  width={854}
                  height={292}
                  className="h-11 w-auto max-w-[178px] object-contain"
                  priority
                />
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="rounded-full border border-[rgba(199,155,67,0.24)] bg-white/66 p-3 text-[var(--lale-gold)] shadow-sm transition-colors duration-200 hover:bg-white/86"
                aria-label="Mobil menüyü kapat"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto px-5 py-7">
              <div className="space-y-3">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block rounded-2xl border px-5 py-4 text-sm font-semibold tracking-[0.08em] transition-all duration-200 ${
                        isActive
                          ? 'border-[rgba(199,155,67,0.28)] bg-white/78 text-[var(--dream-dark)] shadow-[0_14px_34px_rgba(31,24,18,0.08)]'
                          : 'border-[rgba(199,155,67,0.16)] bg-white/42 text-[var(--dream-dark)] hover:bg-white/68 hover:text-[var(--brand-panel-deep)]'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>,
          document.body
        )}
      </div>
    </header>
  );
};

export default Header;
