import Image from 'next/image';
import Link from 'next/link';

const featuredPost = {
  id: 3,
  title: 'Hvordan vår varmepumpe kan spare deg for penger på lang sikt',
  href: '#',
  description:
    'Som B2B-leverandør av industrielle varmepumper tilbyr vi en bærekraftig og kostnadseffektiv løsning for oppvarming og kjøling av bygg. I denne bloggposten ser vi nærmere på hvordan investeringen i en varmepumpe kan føre til betydelige besparelser på lang sikt.',
  date: '06. mai 2023',
  datetime: '2020-05-06',
  author: {
    name: 'Frank Utsola',
    href: '#',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Entalpy/Entalpy_-_Frank_avatar_p9ttvw.webp',
  },
};
const posts = [
  {
    id: 2,
    title: 'Hvordan velge riktig varmepumpe til din byggeplass',
    href: '#',
    description:
      'Entalpy AS tilbyr skreddersydde varmepumper for ulike typer bygg og formål. I denne bloggposten vil vi gi deg noen tips og råd om hvordan du kan velge riktig varmepumpe til din byggeplass, basert på størrelse, krav og miljøhensyn.',
    date: '28. april 2023',
    datetime: '2023-04-28',
    author: {
      name: 'Frank Utsola',
      href: '#',
      imageUrl:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Entalpy/Entalpy_-_Frank_avatar_p9ttvw.webp',
    },
  },
  {
    id: 1,
    title: 'Fornybar energi i byggindustrien: Hvorfor vi trenger å tenke grønt',
    href: '#',
    description:
      'I Entalpy AS tror vi på å ta et aktivt ansvar for å redusere vår påvirkning på miljøet. I denne bloggposten ser vi på hvorfor det er så viktig å tenke grønt i byggindustrien og hvordan vår løsning kan bidra til å redusere CO2-utslippene.',
    date: '16. mars 2023',
    datetime: '2023-03-16',
    author: {
      name: 'Svein A. Torgersen',
      href: '#',
      imageUrl:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Entalpy/Svein_avatar_gkbqsc.webp',
    },
  },
];

export function BlogPreview() {
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="grid grid-cols-1 px-6 mx-auto max-w-7xl gap-x-8 gap-y-12 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
        <article className="w-full max-w-2xl mx-auto lg:mx-0 lg:max-w-lg">
          <time
            dateTime={featuredPost.datetime}
            className="block text-sm leading-6 text-gray-600"
          >
            {featuredPost.date}
          </time>
          <h2
            id="featured-post"
            className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            {featuredPost.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            {featuredPost.description}
          </p>
          <div className="flex flex-col justify-between gap-6 mt-4 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
            <div className="flex">
              <Link
                href={featuredPost.href}
                className="text-sm font-semibold leading-6 text-green-600"
                aria-describedby="featured-post"
              >
                Fortsett å lese <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <div className="flex lg:border-t lg:border-gray-900/10 lg:pt-8">
              <Link
                href={featuredPost.author.href}
                className="flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900"
              >
                <Image
                  src={featuredPost.author.imageUrl}
                  alt={featuredPost.author.name}
                  width={625}
                  height={625}
                  className="flex-none w-6 h-6 rounded-full bg-gray-50"
                />
                {featuredPost.author.name}
              </Link>
            </div>
          </div>
        </article>
        <div className="w-full max-w-2xl pt-12 mx-auto border-t border-gray-900/10 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
          <div className="-my-12 divide-y divide-gray-900/10">
            {posts.map((post) => (
              <article key={post.id} className="py-12">
                <div className="relative max-w-xl group">
                  <time
                    dateTime={post.datetime}
                    className="block text-sm leading-6 text-gray-600"
                  >
                    {post.date}
                  </time>
                  <h2 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                    <Link href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="flex mt-4">
                  <Link
                    href={post.author.href}
                    className="relative flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900"
                  >
                    <Image
                      src={post.author.imageUrl}
                      alt={post.author.name}
                      width={625}
                      height={625}
                      className="flex-none w-6 h-6 rounded-full bg-gray-50"
                    />
                    {post.author.name}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
