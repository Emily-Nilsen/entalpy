import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/Button';

export function Hero() {
  return (
    <div className="bg-gray-950">
      <div className="relative overflow-hidden isolate">
        <Image
          src="/media/PDF_image_03.webp"
          alt="Entalpy AS - Bygningsoppvarming i Stavanger, B2B varmepumpesupplier, Effektive varmepumper, Energieffektiv oppvarming, Klimavennlig energiløsning, Profesjonelle varmepumpeleverandører"
          fill
          className="absolute inset-0 object-cover w-full h-full -z-10"
        />
        <div className="absolute inset-0 bg-gray-950/80 mix-blend-multiply" />
        <div
          className="absolute inset-x-0 z-10 overflow-hidden -top-40 transform-gpu blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-400 to-green-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="relative z-20 max-w-2xl py-32 mx-auto sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative px-3 py-1 text-sm leading-6 text-gray-400 rounded-full ring-1 ring-white/10 hover:ring-white/20">
              Bli en del av teamet vårt!{' '}
              <Link
                href="/om-oss#jobb-med-oss"
                className="font-semibold text-white"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                Les mer <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Innovative varmepumper for bærekraftig energi
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Entalpy AS produserer skreddersydde varmepumper som gir
              utslippsfri varme, kjøling og uttørking til ulike formål, med
              fokus på bærekraftig drift og miljøeffektivitet.
            </p>
            <div className="flex items-center justify-center mt-10 gap-x-6">
              <Button href="/produkter">Se våre produkter</Button>
              <Link
                href="/om-oss"
                className="text-sm font-semibold leading-6 text-white"
              >
                Les mer om oss <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-green-400 to-blue-400 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
