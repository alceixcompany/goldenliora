import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Haberler & Blog | Golden Liora',
  description: 'Güzellik ipuçları, cilt bakımı trendleri, yeni teknolojiler ve Golden Liora’dan en son haberler ve makaleler.',
  alternates: {
    canonical: 'https://goldenliora.com/haberler',
  },
  openGraph: {
    title: 'Haberler & Blog | Golden Liora',
    description: 'Güzellik ipuçları, cilt bakımı trendleri ve Golden Liora’dan en son haberler.',
    url: 'https://goldenliora.com/haberler',
    type: 'website',
  },
};

export default function HaberlerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
