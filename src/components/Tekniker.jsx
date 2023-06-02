import Image from 'next/image';
import Link from 'next/link';

const stats = [
  { label: 'Founded', value: '2021' },
  { label: 'Employees', value: '37' },
  { label: 'Countries', value: '12' },
  { label: 'Raised', value: '$25M' },
];

export function Tekniker() {
  return (
    <div id="tekniker" className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid items-start max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative px-6 pt-64 overflow-hidden bg-gray-900 shadow-2xl rounded-3xl pb-9 sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 lg:aspect-auto lg:h-[34.5rem] aspect-[6/5]">
              <Image
                width={1181}
                height={1527}
                className="absolute inset-0 object-cover w-full h-full"
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1683012527/Entalpy/PDF_image_01_qwapep.webp"
                alt=""
              />
              <div className="absolute inset-0 bg-gray-900/30 mix-blend-multiply" />
              <div
                className="absolute -ml-16 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 transform-gpu blur-3xl"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-green-300 to-blue-300 opacity-40"
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-green-600">
                Jobb hos oss
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Vi søker en dyktig kjøletekniker
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  Entalpy AS er en ledende leverandør innen utvikling, design og
                  produksjon av varmepumper for det profesjonelle markedet. Vi
                  har for tiden to modeller tilgjengelig, med en effekt på 50 og
                  90 kW. Våre kunder spenner fra byggebransjen til
                  lagerfasiliteter og idrettshaller.
                </p>
                <p className="mt-8">
                  Vi leter etter en erfaren kjøletekniker med god kunnskap og
                  forståelse innen automatisering og styringssystemer. Du bør
                  være dyktig til å planlegge arbeidsoppgaver og kunne arbeide
                  selvstendig. Fagbrev som kuldemontør eller utdanning fra
                  kjølemaskinistskolen er nødvendig, samt F-gass sertifikat
                  klasse 1. Førerkort klasse B er påkrevd, gjerne også BE.
                </p>
                <p className="mt-8">
                  Vi setter pris på mennesker og håper at du kan bidra med
                  pågangsmot, gode samarbeidsevner, løsningsorientert tankegang
                  og evne til å følge opp med handling. Du sier det du mener og
                  gjør det du sier, vi mener godt gjort er bedre enn godt tenkt.
                  Smil og godt humør er også viktige egenskaper for oss, sammen
                  med fokus på kundetilfredshet.
                </p>
                <p className="mt-8">
                  Vi tilbyr en variert og spennende arbeidshverdag. Som en del
                  av et lite team vil du ha ansvar for en rekke oppgaver,
                  inkludert mekanisk arbeid, serviceoppdrag og kabelforming. Vi
                  kan tilby konkurransedyktig lønn og gode arbeidsbetingelser,
                  inkludert pensjons- og personalforsikringsordninger samt
                  helseforsikring. Vi har et uformelt og trivelig arbeidsmiljø,
                  og du vil ha muligheten til å utvikle deg både faglig og
                  personlig i et flerfaglig miljø. Det finnes også mulighet for
                  medeierskap i selskapet.
                </p>
                <p className="mt-8">
                  Hvis dette høres interessant ut, ber vi deg ta kontakt med
                  daglig leder på telefon{' '}
                  <Link
                    className="font-bold transition duration-150 ease-in-out hover:text-green-600"
                    href="tel:905 64 983"
                  >
                    905 64 983
                  </Link>
                  . Vi intervjuer aktuelle kandidater fortløpende.
                </p>
                <p className="mt-8">
                  Entalpy AS tilbyr deg en spennende og utfordrende jobb i et
                  godt arbeidsmiljø.
                </p>
              </div>
            </div>
            {/* <dl className="grid grid-cols-2 gap-8 pt-10 mt-10 border-t border-gray-900/10 sm:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div key={statIdx}>
                  <dt className="text-sm font-semibold leading-6 text-gray-600">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl> */}
            <div className="flex mt-10">
              <Link
                href="tel:905 64 983"
                className="text-base font-semibold leading-7 text-green-600 transition duration-150 ease-in-out hover:text-green-700"
              >
                Ta kontakt <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
