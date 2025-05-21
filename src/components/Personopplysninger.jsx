import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

export function Personopplysninger() {
  return (
    <div className="bg-white ">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <p className="text-base font-semibold leading-7 text-green-600">
            Entalpy AS
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Personvernerklæring
          </h2>
          <p className="mt-8 text-lg font-semibold leading-7 text-gray-700">
            Entalpy AS er behandlingsansvarlig for behandlingen av
            personopplysninger som beskrevet i denne personvernerklæringen. I
            denne personvernerklæringen forklarer vi hva slags
            personopplysninger vi lagrer og hvordan vi behandler de. Denne
            personvernerklæringen gjelder for:{' '}
            <Link href="www.entalpy.no" className="text-green-600">
              {' '}
              www.entalpy.no
            </Link>{' '}
            og app Entalpy Remote.{' '}
          </p>
          <h1 className="mt-10 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            Personopplysninger vi samler inn og behandler
          </h1>
          {/* <p className="text-lg font-semibold text-gray-900">
            Personopplysninger vi samler inn og behandler
          </p> */}
          <div className="mt-6 text-gray-700 text-base/7">
            <p>Vi behandler følgende kategorier av personopplysninger:</p>
            <ul role="list" className="max-w-xl mt-8 space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="items-center justify-center flex-none text-sm text-green-600 rounded-full w-7 h-7"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Grunnleggende informasjon:
                  </strong>{' '}
                  navn, fødselsdato
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="items-center justify-center flex-none text-sm text-green-600 rounded-full w-7 h-7"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Kontaktinformasjon:
                  </strong>{' '}
                  adresse, telefonnummer, epostadresse
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="items-center justify-center flex-none text-sm text-green-600 rounded-full w-7 h-7"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Konto og profilinformasjon:
                  </strong>{' '}
                  innstillinger, preferanser
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="items-center justify-center flex-none text-sm text-green-600 rounded-full w-7 h-7"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Betalingsinformasjon:
                  </strong>{' '}
                  transaksjonsinformasjon, betalingsmiddel
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="items-center justify-center flex-none text-sm text-green-600 rounded-full w-7 h-7"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Kundehistorikk og kundeengasjement:
                  </strong>{' '}
                  bestillings- og leveringsopplysninger, handlekurvbevegelser,
                  rabattkoder, lojalitetsprograminformasjon
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="items-center justify-center flex-none text-sm text-green-600 rounded-full w-7 h-7"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Kundehistorikk og kundeengasjement:
                  </strong>{' '}
                  aktive produkter og avtaler samt produkter og tjenester du har
                  hatt tidligere, hvor mye og hvor ofte de brukes, status på
                  produkter/tjenester
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="items-center justify-center flex-none text-sm text-green-600 rounded-full w-7 h-7"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Kundeaktivitet:
                  </strong>{' '}
                  lese- og handlingshistorikk fra app, nettsider eller
                  elektronisk kommunikasjon vi sender ut. Samt teknisk
                  informasjon om enhetene du bruker.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="items-center justify-center flex-none text-sm text-green-600 rounded-full w-7 h-7"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Cookies:
                  </strong>{' '}
                  se vår informasjon om cookies her: URL til cookie-erklæring
                </span>
              </li>
            </ul>
            <p className="mt-8">
              Personopplysningene samles i de fleste tilfeller inn direkte fra
              deg eller de genereres i forbindelse med at du bruker våre
              tjenester og produkter. Når vi henter personopplysninger fra andre
              kilder, henter vi personopplysninger fra følgende kilder:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
