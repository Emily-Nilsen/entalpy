import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Hvordan vår varmepumpe kan spare deg for penger på lang sikt',
    href: '#',
    description:
      'Som B2B-leverandør av industrielle varmepumper tilbyr vi en bærekraftig og kostnadseffektiv løsning for oppvarming og kjøling av bygg. I denne bloggposten ser vi nærmere på hvordan investeringen i en varmepumpe kan føre til betydelige besparelser på lang sikt.',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Entalpy/varmepumpe_fkkys1.webp',
    date: '06. mai 2023',
    datetime: '2023-05-06',
    author: {
      name: 'Frank Utsola',
      imageUrl:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Entalpy/Entalpy_-_Frank_avatar_p9ttvw.webp',
    },
  },
  {
    id: 2,
    title: 'Hvordan velge riktig varmepumpe til din byggeplass',
    href: '#',
    description:
      'Entalpy AS tilbyr skreddersydde varmepumper for ulike typer bygg og formål. I denne bloggposten vil vi gi deg noen tips og råd om hvordan du kan velge riktig varmepumpe til din byggeplass, basert på størrelse, krav og miljøhensyn.',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Entalpy/PDF_image_02_tegbh1.webp',
    date: '28. april 2023',
    datetime: '2023-04-28',
    author: {
      name: 'Frank Utsola',
      imageUrl:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Entalpy/Entalpy_-_Frank_avatar_p9ttvw.webp',
    },
  },
  {
    id: 3,
    title: 'Fornybar energi i byggindustrien: Hvorfor vi trenger å tenke grønt',
    href: '#',
    description:
      'I Entalpy AS tror vi på å ta et aktivt ansvar for å redusere vår påvirkning på miljøet. I denne bloggposten ser vi på hvorfor det er så viktig å tenke grønt i byggindustrien og hvordan vår løsning kan bidra til å redusere CO2-utslippene.',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Entalpy/image_01_cropped_qtmubi.webp',
    date: '16. mars 2023',
    datetime: '2023-03-16',
    author: {
      name: 'Svein A. Torgersen',
      imageUrl:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Entalpy/Svein_avatar_gkbqsc.webp',
    },
  },
];

export function BlogPosts() {
  return (
    <div className="px-6 mx-auto mt-32 mb-12 max-w-7xl sm:mt-40 lg:px-8 sm:mb-24">
      <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Vår blogg – Innovative løsninger
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Få innsikt i bærekraftige energiløsninger og nyheter fra Entalpy.
        </p>
      </div>
      <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-16 auto-rows-fr sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="relative flex flex-col justify-end px-8 pb-8 overflow-hidden bg-gray-900 isolate rounded-2xl pt-80 sm:pt-48 lg:pt-80"
          >
            <Image
              src={post.imageUrl}
              alt={post.title}
              className="absolute inset-0 object-cover w-full h-full -z-10"
              fill
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

            <div className="flex flex-wrap items-center overflow-hidden text-sm leading-6 text-gray-300 gap-y-1">
              <time dateTime={post.datetime} className="mr-8">
                {post.date}
              </time>
              <div className="flex items-center -ml-4 gap-x-4">
                <svg
                  viewBox="0 0 2 2"
                  className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="flex gap-x-2.5">
                  <Image
                    src={post.author.imageUrl}
                    alt={post.author.name}
                    className="flex-none w-6 h-6 rounded-full bg-white/10"
                    width={100}
                    height={100}
                  />
                  {post.author.name}
                </div>
              </div>
            </div>
            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
              <Link href={post.href}>
                <span className="absolute inset-0" />
                {post.title}
              </Link>
            </h3>
          </article>
        ))}
      </div>
    </div>
  );
}
