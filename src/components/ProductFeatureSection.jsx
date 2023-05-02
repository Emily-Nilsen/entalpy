import Image from 'next/image';
import Link from 'next/link';

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';

import { HeatIcon } from './Logos';
import { LeafIcon } from './Logos';
import { SnowflakeIcon } from './Logos';
import { MobileIcon } from './Logos';

const features = [
  {
    name: 'Bærekraftig og effektiv.',
    description:
      'Gir utslippsfri, fornybar energi med 78 % mindre strømforbruk enn direkte elektrisk oppvarming, og reduserer CO2-utslippene med 18 tonn/måned sammenlignet med diesel.',
    icon: (
      <LeafIcon
        className="absolute w-5 h-5 fill-green-600 left-1 top-1"
        aria-hidden="true"
      />
    ),
  },
  {
    name: 'Norsk kvalitet.',
    description: 'Norsk design, utviklet og produsert for norske forhold.',
    icon: (
      <SnowflakeIcon
        className="absolute w-5 h-5 fill-green-600 left-1 top-1"
        aria-hidden="true"
      />
    ),
  },
  {
    name: 'Oppvarming med høy ytelse.',
    description:
      'Produserer 90 kW varme med kun 20 kW forbruk, fungerer pålitelig ned til -25°C, og gir effektiv oppvarming med varmluft.',
    icon: (
      <HeatIcon
        className="absolute w-5 h-5 fill-green-600 left-1 top-1"
        aria-hidden="true"
      />
    ),
  },
  {
    name: 'Praktisk og håndterlig.',
    description:
      'Leveres med en praktisk app for enkel styring og overvåking av varmesystemet.',
    icon: (
      <MobileIcon
        className="absolute w-5 h-5 fill-green-600 left-1 top-1"
        aria-hidden="true"
      />
    ),
  },
];

export function ProductFeatureSection() {
  return (
    <div className="py-24 overflow-hidden bg-white sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-green-600">
                Varmeløsninger for Norge
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Tilpasset løsninger for enhver situasjon
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Vi tilbyr skreddersydde, energieffektive og miljøvennlige
                varmeløsninger til industri, bygg og anlegg for norske forhold.
              </p>
              <dl className="max-w-xl mt-10 space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      {feature.icon}
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative px-6 pt-8 overflow-hidden bg-green-600 isolate sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
              <div
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-green-100 opacity-20 ring-1 ring-inset ring-white"
                aria-hidden="true"
              />
              <div className="max-w-2xl mx-auto sm:mx-0 sm:max-w-none">
                <Image
                  src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1683012527/Entalpy/image_02_cropped_lh2pos.webp"
                  alt="Product screenshot"
                  width={2432}
                  height={1442}
                  className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                />
              </div>
              <div
                className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
