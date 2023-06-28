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
        <meta
          name="keywords"
          content="Industrielle varmepumper, Bygningsoppvarming i Norge, Bygningsoppvarming i Stavanger, B2B varmepumpesupplier, Effektive varmepumper, Energieffektiv oppvarming, Klimavennlig energiløsning, Profesjonelle varmepumpeleverandører, Leie varmepumper for bedrifter, Konstruksjonsselskapers oppvarmingsløsninger, Varmepumpe med lavt strømforbruk, Miljøvennlig oppvarmingsteknologi, Skreddersydde varmepumper for norske forhold, Pålitelige varmepumper i kaldt klima, Enkel drift og styring av varmepumper, Varmepumper for reduserte CO2-utslipp"
        />
        <link rel="canonical" href="https://entalpy.no/" key="canonical" />
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
