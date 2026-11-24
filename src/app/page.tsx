import Hero from '@/components/Hero';
import Services from '@/components/Services';
import News from '@/components/News';
import Gallery from '@/components/Gallery';
import WhyChooseUs from '@/components/WhyChooseUs';
import References from '@/components/References';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import type { Metadata } from 'next';

// SEO: ana sayfa başlığında semt + işletme şeması (yalnız sitede yazan bilgilerle) (ALCEIX)
export const metadata: Metadata = {
  title: 'Eyüpsultan Güzellik Merkezi | Golden Liora',
  description: "Golden Liora, Eyüpsultan Yeşilpınar'da diod buz lazer, cilt bakımı, protez tırnak, ipek kirpik ve kalıcı makyaj için randevulu güzellik merkezi.",
  alternates: { canonical: '/' },
};

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: 'Golden Liora',
  url: 'https://goldenliora.com',
  image: 'https://goldenliora.com/logo.png',
  logo: 'https://goldenliora.com/logo.png',
  telephone: '+905019472856',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Yeşilpınar Mah. Girne Cad. No:18',
    addressLocality: 'Eyüpsultan',
    addressRegion: 'İstanbul',
    addressCountry: 'TR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 41.080369, longitude: 28.916935 },
  sameAs: ['https://www.instagram.com/goldenlioratr/'],
};

export default function Home() {
  return (
    <main className="home-flow min-h-screen">
      <Hero />
      <WhyChooseUs />
      <Services />
      <Gallery />
      <References />
      <FAQ />
      <News />
      <Contact />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd).replace(/</g, '\\u003c') }}
      />
    </main>
  );
}
