'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

const principles = [
  {
    title: 'Analiz',
    text: 'Cildinizin ihtiyacını ve beklentinizi netleştirerek başlarız.',
  },
  {
    title: 'Hazırlık',
    text: 'Hijyen, konfor ve doğru ürün seçimini her seansın merkezine alırız.',
  },
  {
    title: 'Uygulama',
    text: 'Sakin, kontrollü ve aceleye gelmeyen profesyonel bir akış sunarız.',
  },
  {
    title: 'Takip',
    text: 'Bakım sonrası önerilerle sonucu günlük rutininizde destekleriz.',
  },
];

const stats = [
  { value: '8+', label: 'Yıllık deneyim' },
  { value: '500+', label: 'Mutlu misafir' },
  { value: '%98', label: 'Memnuniyet oranı' },
];

const WhyChooseUs = () => {
  return (
    <section id="hakkimizda" className="lale-light-section overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center xl:gap-14">
          <div>
            <div className="mb-7 h-px w-28 bg-[linear-gradient(90deg,var(--lale-gold),transparent)]" />
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--lale-gold)]">
              Golden Liora Deneyimi
            </p>
            <h2 className="max-w-2xl font-serif text-3xl font-normal leading-tight text-[var(--dream-dark)] sm:text-4xl lg:text-5xl">
              Kendinizi iyi hissettiren bakım, doğru atmosferle başlar.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[var(--dream-text)]">
              Golden Liora&apos;da her randevu; temiz hazırlık, kişiye özel yönlendirme
              ve sakin bir salon akışıyla planlanır. Amacımız parlak ama doğal, bakımlı
              ama size ait bir görünüm.
            </p>

            <div className="mt-8 grid gap-5 border-y border-[rgba(199,155,67,0.22)] py-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl text-[var(--lale-gold)]">{stat.value}</p>
                  <p className="mt-1 text-sm text-[var(--dream-text)]">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/hakkimizda" className="lale-gold-button gap-3">
                Daha Fazla
                <FiArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center rounded-full border border-[rgba(95,89,108,0.18)] bg-white/[0.34] px-6 py-3 text-sm font-medium text-[var(--dream-dark)] transition-all duration-300 hover:bg-white/70"
              >
                Randevu Planla
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative min-h-[430px] overflow-hidden rounded-lg border border-white/55 bg-white/35 shadow-[0_28px_80px_rgba(31,24,18,0.14)] sm:min-h-[560px]">
              <Image
                src="/content/news/skincare-routine.png"
                alt="Golden Liora profesyonel cilt bakımı"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 52vw"
                priority={false}
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,250,248,0.08),transparent_42%,rgba(31,24,18,0.18))]" />
            </div>

            <div className="absolute -bottom-6 left-5 right-5 rounded-lg border border-[rgba(199,155,67,0.22)] bg-[rgba(255,250,248,0.86)] p-5 shadow-[0_20px_54px_rgba(31,24,18,0.12)] backdrop-blur-2xl sm:left-auto sm:right-6 sm:w-[360px]">
              <div className="flex items-start gap-3">
                <FiCheckCircle className="mt-1 h-5 w-5 shrink-0 text-[var(--lale-gold)]" />
                <p className="text-sm leading-6 text-[var(--dream-dark)]">
                  Cildinizin ihtiyacına göre planlanan, hijyenik ve konforlu bakım rutini.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid border-y border-[rgba(199,155,67,0.18)] sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((item, index) => (
            <div
              key={item.title}
              className="border-b border-[rgba(199,155,67,0.18)] py-6 sm:border-r sm:px-6 lg:border-b-0 first:sm:pl-0 last:border-b-0 last:sm:border-r-0 last:lg:pr-0"
            >
              <p className="font-serif text-2xl text-[var(--lale-gold)]">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-4 text-base font-semibold text-[var(--dream-dark)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--dream-text)]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
