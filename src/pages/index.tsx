import Image from 'next/image';
import Head from 'next/head';

import { Hero } from '@/components/Hero';
import { ProductFeatureSection } from '@/components/ProductFeatureSection';
import { JobbMedOssSection } from '@/components/JobbMedOssSection';
import { BlogPreview } from '@/components/BlogPreview';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Entalpy AS - Fornybar energi til bygg | Varmepumper for utleie og salg
        </title>
        <meta
          name="description"
          content="Entalpy AS designer og produserer skreddersydde varmepumper for bærekraftig oppvarming og kjøling av bygg. Vi tilbyr utslippsfrie løsninger med effektiv drift og positiv miljøpåvirkning."
        />
        <link rel="canonical" href="https://www.entalpy.no/" key="canonical" />
      </Head>
      <div className="bg-white">
        <main>
          <Hero />
          <ProductFeatureSection />
          <JobbMedOssSection />
          {/* <BlogPreview /> */}
        </main>
      </div>
    </>
  );
}
