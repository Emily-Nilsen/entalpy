import Image from 'next/image';
import Link from 'next/link';

const jobOpenings = [
  {
    id: 1,
    role: 'Kjøletekniker',
    href: '/kjoletekniker',
    description:
      'Erfaren, selvstendig, løsningsorientert. Kundefokusert. Konkurransedyktige betingelser. Utviklingsmuligheter. Samarbeid i et flerfaglig miljø.',
    stillingsbrøk: 'Fulltid',
    location: 'Stavanger',
  },
  {
    id: 2,
    role: 'Produksjonsplanlegger',
    href: '',
    description:
      'Ansvarlig for å planlegge og optimalisere produksjonsprosessen, sikre effektiv ressursallokering og koordinering av produksjonsaktiviteter.',
    stillingsbrøk: 'Fulltid',
    location: 'Stavanger',
  },
  {
    id: 3,
    role: 'Administrasjons- og logistikksjef',
    href: '',
    description:
      'Ansvarlig for å håndtere administrative og logistikkmessige oppgaver, inkludert innkjøp, lagerstyring og koordinering av transport.',
    stillingsbrøk: 'Fulltid',
    location: 'Stavanger',
  },
];

export function JobbHosOss() {
  return (
    <section id="jobb-med-oss">
      <div className="px-6 mx-auto mt-32 max-w-7xl sm:mt-40 lg:px-8">
        <div className="flex flex-col items-end justify-between max-w-2xl gap-16 mx-auto lg:mx-0 lg:max-w-none lg:flex-row">
          <div className="w-full lg:max-w-lg lg:flex-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Jobb hos oss
            </h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Bli med i vårt dedikerte team og bidra til utviklingen av
              innovative løsninger basert på fornybar energi hos Entalpy AS.
            </p>
            <Image
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1683012527/Entalpy/PDF_image_01_qwapep.webp"
              alt=""
              className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
              width={1181}
              height={1527}
            />
          </div>
          <div className="w-full lg:max-w-xl lg:flex-auto">
            <h3 className="sr-only">Stillingsannonser</h3>
            <ul className="-my-8 divide-y divide-gray-100">
              {jobOpenings.map((opening) => (
                <li key={opening.id} className="py-8">
                  <dl className="relative flex flex-wrap gap-x-3">
                    <dt className="sr-only">Rolle</dt>
                    <dd className="flex-none w-full text-lg font-semibold tracking-tight text-gray-900">
                      {opening.href ? (
                        <Link className="group" href={opening.href}>
                          {opening.role}{' '}
                          <span
                            className="text-sm text-green-600 bg-green-50 px-3.5 py-2.5 rounded-md group-hover:bg-green-100 group-hover:text-green-700 transition duration-300 ease-in-out ml-3"
                            aria-hidden="true"
                          >
                            {' '}
                            Stillingsannonse
                          </span>
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                        </Link>
                      ) : (
                        <Link className="group" href={opening.href}>
                          {opening.role}{' '}
                          <span
                            className="absolute inset-0 cursor-default"
                            aria-hidden="true"
                          />
                        </Link>
                      )}
                    </dd>
                    <dt className="sr-only">Beskivelse</dt>
                    <dd className="flex-none w-full mt-2 text-base leading-7 text-gray-600">
                      {opening.description}
                    </dd>
                    <dt className="sr-only">Stillingsbrøk</dt>
                    <dd className="mt-4 text-base font-semibold leading-7 text-gray-900">
                      {opening.stillingsbrøk}
                    </dd>
                    <dt className="sr-only">Lokasjon</dt>
                    <dd className="flex items-center mt-4 text-base leading-7 text-gray-500 gap-x-3">
                      <svg
                        viewBox="0 0 2 2"
                        className="h-0.5 w-0.5 flex-none fill-gray-300"
                        aria-hidden="true"
                      >
                        <circle cx={1} cy={1} r={1} />
                      </svg>
                      {opening.location}
                    </dd>
                  </dl>
                </li>
              ))}
            </ul>
            <div className="flex pt-8 mt-8 border-t border-gray-100">
              <Link
                href="/kontakt"
                className="text-sm font-semibold leading-6 text-green-600 transition duration-300 ease-in-out hover:text-green-500"
              >
                Kontakt oss <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
