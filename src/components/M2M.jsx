const stats = [
  { id: 1, name: 'Automatisk driftsovervåkning', value: '1' },
  {
    id: 2,
    name: 'Fjernassistanse fra servicetekniker via internett',
    value: '2',
  },
  { id: 3, name: 'Statistikk for drift og temperaturer', value: '3' },
];

export function M2M() {
  return (
    <div className="relative z-0 py-24 mb-12 bg-gray-900 sm:py-32">
      <div className="z-20 px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              IOT kommunikasjon gir flere fordeler
            </h2>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col p-8 bg-white/5">
                <dt className="z-20 text-lg font-medium leading-6 text-gray-300">
                  {stat.name}
                </dt>
              </div>
            ))}
          </dl>
        </div>
        <div
          className="absolute inset-x-0 z-0 flex justify-center overflow-hidden -top-16 transform-gpu blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1318/600] w-[82.375rem] flex-none bg-gradient-to-r from-blue-500 to-green-500 opacity-[15%]"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
