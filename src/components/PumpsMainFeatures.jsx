import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from '@heroicons/react/20/solid';

import { ShieldIcon } from '@/components/Logos';
import { FanIcon } from '@/components/Logos';
import { ToggleIcon } from '@/components/Logos';

const features = [
  {
    name: 'Robust rammebeskyttelse',
    description:
      'Robust galvanisert stålramme med hjørnestolper gir solid beskyttelse mot støt. Rammen har også utskjæringer som gjør det enkelt å transportere enheten med gaffeltruck.',
    href: '#',
    icon: (
      <ShieldIcon
        className="flex-none w-5 h-5 fill-green-600 "
        aria-hidden="true"
      />
    ),
  },
  {
    name: 'Effektiv ventilasjon',
    description:
      'Kraftige vifter sørger for effektiv resirkulering av varmluft i bygget.',
    href: '#',
    icon: <FanIcon className="flex-none w-5 h-5 fill-green-600 " />,
  },
  {
    name: 'Brukervennlighet',
    description: 'Enkel betjening og temperaturinnstilling på aggregatet.',
    href: '#',
    icon: <ToggleIcon className="flex-none w-5 h-5 fill-green-600 " />,
  },
];

export function PumpMainFeatures() {
  return (
    <div className="pb-24 bg-white sm:pb-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl ">
          <h2 className="text-base font-semibold leading-7 text-green-600">
            Skreddersydd
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Luft-til-luft industriell varmepumpe
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Vår luft-til-luft industrielle varmepumpe er spesialdesignet og
            produsert i Norge for byggtørking og oppvarming.
          </p>
        </div>
        <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center text-base font-semibold leading-7 text-gray-900 gap-x-3">
                  {feature.icon}
                  {feature.name}
                </dt>
                <dd className="flex flex-col flex-auto mt-4 text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    {/* <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-green-600"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a> */}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
