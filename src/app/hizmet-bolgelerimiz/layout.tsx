import type { Metadata } from 'next';
import type { ReactNode } from 'react';

// SEO: liste sayfasının kendi başlığı ve canonical adresi (önceden ana sayfaya işaret ediyordu) (ALCEIX)
export const metadata: Metadata = {
  title: 'Hizmet Bölgelerimiz | Golden Liora Eyüpsultan',
  description: "Golden Liora, Yeşilpınar Mah. Girne Cad. No:18 Eyüpsultan'da randevulu güzellik ve bakım hizmeti verir. Hizmet verdiğimiz bölgeleri inceleyin.",
  alternates: {
    canonical: '/hizmet-bolgelerimiz',
  },
  openGraph: {
    title: 'Hizmet Bölgelerimiz | Golden Liora',
    description: "Golden Liora'nın Eyüpsultan merkezli hizmet bölgeleri.",
    url: 'https://goldenliora.com/hizmet-bolgelerimiz',
    siteName: 'Golden Liora',
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function ServiceAreasLayout({ children }: { children: ReactNode }) {
  return children;
}
