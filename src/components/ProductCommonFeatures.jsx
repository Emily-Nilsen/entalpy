import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    name: 'Kompressor',
    description: 'Industriell scroll-kompressor for varmepumper.',
  },
  {
    name: 'Kuldemedium',
    description: 'Lav-GWP kuldemedium for miljøvennlig drift.',
  },
  {
    name: 'Ventilatorer',
    description:
      'EC-ventilatorer med turtallsstyring for optimal effektivitet.',
  },
  {
    name: 'Elektrokomponenter',
    description: 'Elektrokomponenter av høy industrikvalitet.',
  },
];

export function ProductCommonFeatures() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 py-24 mx-auto sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="grid items-center grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <div>
            <div className="overflow-hidden bg-gray-100 rounded-lg aspect-h-1 aspect-w-1">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Entalpy/Produkt_bilde_1_rcwyyt.webp"
                width={1318}
                height={1157}
                alt="Entalpy AS varmepumpe modell ELL90"
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
              <div className="overflow-hidden bg-gray-100 rounded-lg aspect-h-1 aspect-w-1">
                <Image
                  src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Entalpy/Produkt_bilde_2_q9ajkm.webp"
                  width={1580}
                  height={864}
                  alt="Entalpy AS varmepumpe modell ELL90"
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <div className="overflow-hidden bg-gray-100 rounded-lg aspect-h-1 aspect-w-1">
                <Image
                  src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Entalpy/varmepumpe_fkkys1.webp"
                  alt="Entalpy AS varmepumpe modell ELL90"
                  width={3623}
                  height={2284}
                  className="object-cover object-center w-full h-full"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="pb-10 border-b border-gray-200">
              <h2 className="text-base font-semibold leading-7 text-green-600">
                Felles tekniske
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Spesifikasjoner
              </p>
            </div>

            <dl className="mt-10 space-y-10">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt className="font-semibold text-gray-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-3 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-12 text-lg leading-8 text-gray-600">
              Vi tilbyr også serviceavtaler som inkluderer løpende fjerndiagnose
              og assistanse, årlig teknisk kontroll og vedlikehold av våre
              erfarne teknikere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
