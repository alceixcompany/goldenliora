import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim & Randevu | Golden Liora',
  description: 'Golden Liora ile iletişime geçin, adres ve konum bilgilerimizi öğrenin ya da online randevu formu doldurarak hemen randevunuzu planlayın.',
  alternates: {
    canonical: 'https://goldenliora.com/iletisim',
  },
  openGraph: {
    title: 'İletişim & Randevu | Golden Liora',
    description: 'Golden Liora ile iletişime geçin, adres ve konum bilgilerimizi öğrenin ya da randevunuzu planlayın.',
    url: 'https://goldenliora.com/iletisim',
    type: 'website',
  },
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
