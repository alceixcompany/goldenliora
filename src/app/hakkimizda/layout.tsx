import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakkımızda | Golden Liora',
  description: 'Golden Liora hikayesi, misyonumuz, vizyonumuz ve zarafet felsefemiz hakkında bilgi edinin. Güzelliği ve bakımı uzman kadromuz ve en son teknoloji cihazlarımızla sunuyoruz.',
  alternates: {
    canonical: 'https://goldenliora.com/hakkimizda',
  },
  openGraph: {
    title: 'Hakkımızda | Golden Liora',
    description: 'Golden Liora hikayesi, misyonumuz, vizyonumuz ve zarafet felsefemiz hakkında bilgi edinin.',
    url: 'https://goldenliora.com/hakkimizda',
    type: 'website',
  },
};

export default function HakkimizdaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
