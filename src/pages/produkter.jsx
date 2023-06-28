import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { ProductCommonFeatures } from '@/components/ProductCommonFeatures';
import { Button } from '@/components/Button';
import { PumpMainFeatures } from '@/components/PumpsMainFeatures';
import { M2M } from '@/components/M2M';
import { ComparisonTable } from '@/components/ComparisonTable';

export default function Produkter() {
  return (
    <>
      <Head>
        <title>
          Profesjonelle Varmepumper - Vår Produktsortiment | Entalpy AS
        </title>
        <meta
          name="description"
          content="Utforsk vårt sortiment av profesjonelle varmepumper, inkludert modeller på 50 kW og 90 kW. Bygget for byggtørking og oppvarming. Kontakt oss for mer informasjon!"
        />
        <meta
          name="keywords"
          content="Industrielle varmepumpe modeller, ELL50, ELL90, Effektive varmepumper for bygninger, Varmepumpe utleie for bedrifter, Varmepumper med høy varmeproduksjon, Energieffektive oppvarmingsløsninger, Miljøvennlig varmepumpeteknologi, Norske varmepumpeprodusenter, Varmepumper for kaldt klima, Varmepumper for reduksjon av CO2-utslipp, Skalerbare varmepumpeløsninger, Pålitelige varmepumper for industribruk, Varmepumper med avanserte styringssystemer, Energibesparende varmepumper, Fleksible varmepumper for forskjellige bygningsstørrelser"
        />
        <link
          rel="canonical"
          href="https://entalpy.no/produkter"
          key="canonical"
        />
      </Head>
      <section>
        <div className="relative -mt-24 overflow-hidden bg-white isolate">
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
            />
          </svg>
          <div className="px-6 pt-10 pb-24 mx-auto max-w-7xl sm:pb-32 lg:flex lg:px-8 lg:py-40">
            <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
              <div className="mt-24 sm:mt-32 lg:mt-16">
                <div className="inline-flex space-x-6">
                  <span className="px-3 py-1 text-sm font-semibold leading-6 text-green-600 rounded-full bg-green-600/10 ring-1 ring-inset ring-green-600/10">
                    Uslippsfri
                  </span>
                  <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                    <span>Modell ELL90</span>
                    <ChevronRightIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </div>
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Miljøvennlig byggvarme - Energisparende varmepumpe
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Effektiv varmeytelse på opptil 90 kW med et strømforbruk på kun
                20 kW.
              </p>
              <div className="flex items-center mt-10 gap-x-6">
                <Button href="/kontakt">Kontakt oss</Button>
                {/* <Link
                href="/kontakt"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Kontakt oss <span aria-hidden="true">→</span>
              </Link> */}
              </div>
            </div>
            <div className="flex max-w-2xl mx-auto mt-16 sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
              <div className="flex-none max-w-3xl sm:max-w-5xl lg:max-w-none">
                <div className="p-2 -m-2 rounded-xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1685289910/Entalpy/varmepumper_-_cropped_rplpqy.webp"
                    alt="Entalpy AS varmepumper, Industrielle varmepumpe modeller, ELL50, ELL90, Effektive varmepumper for bygninger, Varmepumpe utleie for bedrifter, Varmepumper med høy varmeproduksjon, Energieffektive oppvarmingsløsninger, Miljøvennlig varmepumpeteknologi, Norske varmepumpeprodusenter"
                    width={3061}
                    height={1626}
                    className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <PumpMainFeatures />
        <M2M />
        <ProductCommonFeatures />
        <ComparisonTable />
      </section>
    </>
  );
}
