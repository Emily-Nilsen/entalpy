import Image from 'next/image';
import Link from 'next/link';

const people = [
  {
    name: 'Frank Utsola',
    role: 'Daglig leder',
    imageUrl: '/media/Entalpy_-_Frank_avatar.webp',
    bio: 'Med en VVS-ingeniørbakgrunn og omfattende erfaring innen prosjektutvikling har Frank ekspertise til å utvikle ideer til ferdige produkter. Han er også en erfaren entreprenør og konsulent med internasjonal erfaring.',
    linkedinUrl: 'https://www.linkedin.com/in/frank-utsola-41487b11/',
  },
  {
    name: 'Svein A. Torgersen',
    role: 'Teknisk leder',
    imageUrl: '/media/Entalpy_-_Svein.webp',
    bio: 'Svein har en bred internasjonal erfaring og et omfattende nettverk i HVAC-bransjen. Med over 25 års erfaring med profesjonelle varmepumper og kjølesystemer. Svein sin ekspertise omfatter prosjektering av anlegg for boliger, næringsbygg, fiskeoppdrett og grunnkjøling.',
    linkedinUrl: 'https://www.linkedin.com/in/svein-a-torgersen-361b501b/',
  },
];

export function Team() {
  return (
    <div className="py-24 mt-24 bg-gradient-to-b from-gray-50 md:py-32 sm:mt-40">
      <div className="grid grid-cols-1 px-6 mx-auto max-w-7xl gap-x-8 gap-y-20 lg:px-8 xl:grid-cols-5">
        <div className="max-w-2xl xl:col-span-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Om oss
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Vi er dedikerte til vårt arbeid, og streber alltid etter å levere de
            beste resultatene for våre kunder.
          </p>
        </div>
        <ul
          role="list"
          className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3"
        >
          {people.map((person) => (
            <li
              key={person.name}
              className="flex flex-col gap-10 pt-12 sm:flex-row"
            >
              <Image
                className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
                src={person.imageUrl}
                alt={person.name}
                width={800}
                height={600}
              />
              <div className="flex-auto max-w-xl">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {person.role}
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  {person.bio}
                </p>
                <ul role="list" className="flex mt-6 gap-x-6">
                  <li>
                    <Link
                      href={person.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 transition duration-300 ease-in-out cursor-pointer hover:text-gray-500"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
