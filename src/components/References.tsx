'use client';

import Image from 'next/image';
import { FiMapPin, FiStar } from 'react-icons/fi';

const founder = {
  name: 'Golden Liora Kurucusu',
  role: 'Kurucu & CEO',
  location: 'İstanbul',
  comment:
    'Golden Liora’da amacımız yalnızca işlem yapmak değil; her misafirin kendini güvende, anlaşılmış ve zarif hissettiği bir bakım kültürü oluşturmak.',
  image: '/content/team/founder-ceo.png',
} as const;

const reviews = [
  {
    service: 'Cilt Bakımı',
    comment:
      'İlk girdiğim andan itibaren çok huzurlu bir ortam vardı. Cilt bakımı sonrasında yüzüm daha aydınlık göründü.',
  },
  {
    service: 'Diod Buz Lazer',
    comment:
      'Süreç detaylı anlatıldı. Seanslar konforlu geçti ve düzenli takip yapmaları güven verdi.',
  },
  {
    service: 'İpek Kirpik',
    comment:
      'İpek kirpik uygulamasında doğal bir görünüm elde edildi. Yüzüme en uygun yoğunluğu seçtiler.',
  },
] as const;

const stats = [
  { value: '128+', label: 'Olumlu yorum' },
  { value: '500+', label: 'Mutlu misafir' },
  { value: '%98', label: 'Memnuniyet' },
] as const;

const References = () => {
  return (
    <section id="referanslar" className="lale-light-section py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <div className="mb-7 h-px w-28 bg-[linear-gradient(90deg,var(--lale-gold),transparent)]" />
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--lale-gold)]">
              Kurucu mesajı
            </p>
            <h2 className="max-w-2xl font-serif text-3xl font-normal leading-tight text-[var(--dream-dark)] sm:text-4xl lg:text-5xl">
              Golden Liora’da güzellik, güvenle başlar.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[var(--dream-text)]">
              Kurucumuzun yaklaşımı; hijyen, kişiye özel analiz ve doğal sonuç
              hedefini her randevunun merkezine alır.
            </p>

            <div className="mt-8 grid max-w-xl grid-cols-3 border-y border-[rgba(199,155,67,0.22)] py-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl text-[var(--lale-gold)]">{stat.value}</p>
                  <p className="mt-1 text-sm text-[var(--dream-text)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-[rgba(199,155,67,0.18)] bg-white/[0.48] p-6 shadow-[0_24px_70px_rgba(31,24,18,0.08)] sm:p-8">
            <div className="flex items-center gap-4">
              <Image
                src={founder.image}
                alt={founder.name}
                width={64}
                height={64}
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-[var(--dream-dark)]">{founder.name}</h3>
                <div className="mt-1 flex items-center gap-2 text-sm text-[var(--dream-text)]">
                  <FiMapPin className="h-4 w-4" />
                  {founder.role} · {founder.location}
                </div>
              </div>
            </div>

            <div className="mt-7 flex gap-1 text-[var(--lale-gold)]">
              {Array.from({ length: 5 }).map((_, index) => (
                <FiStar key={index} className="h-5 w-5 fill-current" />
              ))}
            </div>

            <p className="mt-6 font-serif text-2xl leading-relaxed text-[var(--dream-dark)]">
              “{founder.comment}”
            </p>

            <div className="mt-8 grid gap-4 border-t border-[rgba(199,155,67,0.16)] pt-6">
              {reviews.map((review) => (
                <div key={review.service} className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
                  <p className="text-sm leading-6 text-[var(--dream-text)]">“{review.comment}”</p>
                  <span className="text-sm font-medium text-[var(--lale-gold)]">{review.service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;
