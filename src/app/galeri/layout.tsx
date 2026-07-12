import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galeri | Golden Liora',
  description: 'Golden Liora salonumuzdan kareler, uzman uygulamalarımız ve misafirlerimizin değişim hikayelerini galerimizde inceleyin.',
  alternates: {
    canonical: 'https://goldenliora.com/galeri',
  },
  openGraph: {
    title: 'Galeri | Golden Liora',
    description: 'Golden Liora salonumuzdan kareler, uzman uygulamalarımız ve değişim hikayeleri.',
    url: 'https://goldenliora.com/galeri',
    type: 'website',
  },
};

export default function GaleriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
