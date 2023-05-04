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
        <title>Entalpy AS</title>
        <meta name="description" content="Write page description here" />
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
