'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FiInstagram, FiMapPin, FiPhone } from 'react-icons/fi';

const Footer = () => {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith('/admin') || false;

  if (isAdminPage) {
    return null;
  }

  return (
    <footer className="lale-light-section text-[var(--dream-dark)]">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="border-t border-[rgba(199,155,67,0.20)] py-16">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.78fr_1.22fr_1fr] lg:gap-12">
            <div>
              <div className="inline-flex min-h-[64px] items-center rounded-full border border-[rgba(199,155,67,0.22)] bg-white/[0.70] px-5 py-2 shadow-[0_12px_34px_rgba(31,24,18,0.08)] backdrop-blur-xl">
                <Image
                  src="/logo.png"
                  alt="Golden Liora"
                  width={854}
                  height={292}
                  className="h-12 w-auto max-w-[220px] object-contain"
                />
              </div>
              <p className="mt-6 max-w-sm text-sm leading-7 text-[var(--dream-text)]">
                Profesyonel güzellik ve cilt bakımı hizmetlerinde hijyenik,
                modern ve özenli bir deneyim sunuyoruz.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href="https://www.instagram.com/goldenlioratr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(199,155,67,0.28)] bg-white/[0.54] text-[var(--lale-gold)] shadow-sm backdrop-blur-xl transition-colors hover:bg-white/80"
                  title="Instagram"
                >
                  <FiInstagram className="h-4 w-4" />
                </a>
                <a
                  href="tel:+905019472856"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(199,155,67,0.28)] bg-white/[0.54] text-[var(--lale-gold)] shadow-sm backdrop-blur-xl transition-colors hover:bg-white/80"
                  title="Telefon"
                >
                  <FiPhone className="h-4 w-4" />
                </a>
                <a
                  href="https://www.instagram.com/goldenlioratr/"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(199,155,67,0.28)] bg-white/[0.54] text-[var(--lale-gold)] shadow-sm backdrop-blur-xl transition-colors hover:bg-white/80"
                  title="Instagram"
                >
                  <FiInstagram className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-[var(--lale-gold)]">Sayfalar</h3>
              <ul className="mt-5 space-y-3 text-sm text-[var(--dream-text)]">
                <li><Link href="/" className="transition-colors hover:text-[var(--lale-gold)]">Ana Sayfa</Link></li>
                <li><Link href="/hakkimizda" className="transition-colors hover:text-[var(--lale-gold)]">Hakkımızda</Link></li>
                <li><Link href="/hizmetlerimiz" className="transition-colors hover:text-[var(--lale-gold)]">Hizmetlerimiz</Link></li>
                <li><Link href="/galeri" className="transition-colors hover:text-[var(--lale-gold)]">Galeri</Link></li>
                <li><Link href="/iletisim" className="transition-colors hover:text-[var(--lale-gold)]">İletişim</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-[var(--lale-gold)]">Bakımlar</h3>
              <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-[var(--dream-text)]">
                <li>Diod Buz Lazer</li>
                <li>Bölgesel İnceleme</li>
                <li>G5</li>
                <li>Protez Tırnak</li>
                <li>Saç</li>
                <li>Cilt Bakımı</li>
                <li>İpek Kirpik</li>
                <li>El - Ayak Bakımı</li>
                <li>Kalıcı Makyaj</li>
                <li>Mezoterapi</li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-[var(--lale-gold)]">İletişim</h3>
              <ul className="mt-5 space-y-4 text-sm text-[var(--dream-text)]">
                <li className="flex items-start gap-3">
                  <FiMapPin className="mt-1 h-4 w-4 text-[var(--lale-gold)]" />
                  <span>Yeşilpınar Mah. Girne Cad. No:18, Eyüpsultan / İstanbul</span>
                </li>
                <li className="flex items-center gap-3">
                  <FiPhone className="h-4 w-4 text-[var(--lale-gold)]" />
                  <a href="tel:+905019472856" className="transition-colors hover:text-[var(--lale-gold)]">
                    +90 501 947 28 56
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <FiInstagram className="h-4 w-4 text-[var(--lale-gold)]" />
                  <a
                    href="https://www.instagram.com/goldenlioratr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[var(--lale-gold)]"
                  >
                    @goldenlioratr
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(199,155,67,0.20)] py-6">
          <div className="flex flex-col gap-3 text-center text-sm text-[var(--dream-text)] md:flex-row md:items-center md:justify-between md:text-left">
            <p>
              © 2026 <span className="font-medium text-[var(--lale-gold)]">Golden Liora</span>. Tüm hakları saklıdır.
            </p>

            <div className="flex items-center justify-center gap-5 md:justify-end">
              <a
                href="https://www.alceix.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[var(--lale-gold)]"
              >
                Hakları Alceix tarafından saklıdır
              </a>
              <Link href="/hakkimizda" className="transition-colors hover:text-[var(--lale-gold)]">
                Gizlilik Politikası
              </Link>
              <Link href="/iletisim" className="transition-colors hover:text-[var(--lale-gold)]">
                İletişim
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
