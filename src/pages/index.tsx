import Image from 'next/image';
import Head from 'next/head';

import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductFeatureSection } from '@/components/ProductFeatureSection';
import { JobbMedOssSection } from '@/components/JobbMedOssSection';
import { BlogPreview } from '@/components/BlogPreview';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Entalpy AS - Fornybar energi til bygg i Oslo | Varmepumper for utleie
          og salg
        </title>
        <meta
          name="description"
          content="Entalpy AS designer og produserer skreddersydde varmepumper for bærekraftig oppvarming og kjøling av bygg. Vi tilbyr utslippsfrie løsninger med effektiv drift og positiv miljøpåvirkning."
        />
        <link rel="canonical" href="https://www.entalpy.no/" key="canonical" />
      </Head>
      <div className="bg-white">
        <Header />
        <main>
          <Hero />
          <ProductFeatureSection />
          <JobbMedOssSection />
          <BlogPreview />
        </main>
        <Footer />
      </div>
    </>
  );
}
