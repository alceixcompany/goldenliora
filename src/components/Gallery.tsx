'use client';

import React, { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

interface GalleryCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  order: number;
  isActive: boolean;
}

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  imageUrl: string;
  thumbnailUrl: string;
  tags: string[];
  isActive: boolean;
  isFeatured: boolean;
  order: number;
}

const Gallery = () => {
  const [categories, setCategories] = useState<GalleryCategory[]>([]);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        setLoading(true);
        const categoriesSnapshot = await getDocs(collection(db, 'gallery_categories'));
        const categoriesData = categoriesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as GalleryCategory[];
        categoriesData.sort((a, b) => (a.order || 0) - (b.order || 0));
        setCategories(categoriesData);

        const itemsSnapshot = await getDocs(collection(db, 'gallery_items'));
        const itemsData = itemsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as GalleryItem[];
        const activeItems = itemsData.filter((item) => item.isActive);
        activeItems.sort((a, b) => (a.order || 0) - (b.order || 0));
        setGalleryItems(activeItems.slice(0, 4));
      } catch (error) {
        console.error('Galeri verisi yüklenirken hata:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  const getCategoryName = (categoryId: string) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : 'Bakım';
  };

  if (loading) {
    return (
      <section className="lale-light-section py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-[var(--lale-gold)] border-t-transparent" />
          <p className="text-sm text-[var(--dream-text)]">Galeri yükleniyor...</p>
        </div>
      </section>
    );
  }

  if (galleryItems.length === 0) {
    return null;
  }

  const [featured, ...rest] = galleryItems;

  return (
    <section className="lale-light-section py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <div className="mb-7 h-px w-28 bg-[linear-gradient(90deg,var(--lale-gold),transparent)]" />
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--lale-gold)]">
              Galeri
            </p>
            <h2 className="max-w-xl font-serif text-3xl font-normal leading-tight text-[var(--dream-dark)] sm:text-4xl lg:text-5xl">
              Salon atmosferinden seçilmiş sakin kareler.
            </h2>
          </div>
          <div className="lg:justify-self-end">
            <p className="max-w-xl text-base leading-8 text-[var(--dream-text)]">
              Uygulama alanlarımızdan, bakım süreçlerinden ve merkez deneyiminden
              seçtiğimiz görselleri tek bir akışta keşfedin.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <Link href="/galeri" className="group relative min-h-[460px] overflow-hidden rounded-lg border border-white/55 bg-white/35 shadow-[0_28px_80px_rgba(31,24,18,0.14)]">
            {featured.imageUrl ? (
              <Image
                src={featured.imageUrl}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            ) : (
              <div className="flex h-full min-h-[460px] items-center justify-center bg-[linear-gradient(135deg,#f0dfc2,#e1ab49)] text-6xl text-white">
                *
              </div>
            )}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(18,14,10,0.72))]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                {getCategoryName(featured.categoryId)}
              </p>
              <h3 className="mt-3 font-serif text-3xl">{featured.title}</h3>
            </div>
          </Link>

          <div className="grid gap-5">
            {rest.map((item) => (
              <Link
                key={item.id}
                href="/galeri"
                className="group grid grid-cols-[120px_1fr] overflow-hidden rounded-lg border border-[rgba(199,155,67,0.18)] bg-white/[0.48] shadow-[0_16px_44px_rgba(31,24,18,0.08)]"
              >
                <div className="relative min-h-[142px]">
                  {item.imageUrl ? (
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="120px"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-[rgba(223,167,69,0.16)] text-[var(--lale-gold)]">
                      *
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.14em] text-[var(--lale-gold)]">
                    {getCategoryName(item.categoryId)}
                  </p>
                  <h3 className="mt-2 line-clamp-2 text-base font-semibold text-[var(--dream-dark)]">{item.title}</h3>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--lale-gold)]">
                    Görüntüle
                    <FiArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
