import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz | Golden Liora',
  description: 'Golden Liora ayrıcalığıyla sunulan Diod Buz Lazer, bölgesel inceleme, protez tırnak, saç, cilt bakımı, ipek kirpik, el-ayak bakımı ve kalıcı makyaj hizmetlerimizi inceleyin.',
  alternates: {
    canonical: 'https://goldenliora.com/hizmetlerimiz',
  },
  openGraph: {
    title: 'Hizmetlerimiz | Golden Liora',
    description: 'Golden Liora ayrıcalığıyla sunulan Diod Buz Lazer, cilt bakımı, protez tırnak, ipek kirpik, el-ayak bakımı, saç ve kalıcı makyaj hizmetleri.',
    url: 'https://goldenliora.com/hizmetlerimiz',
    type: 'website',
  },
};

export default function HizmetlerimizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
