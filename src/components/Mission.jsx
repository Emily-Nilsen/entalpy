const stats = [
  {
    label: 'Med profesjonelle varmepumper og kjølesystemer',
    value: '25 års erfaring',
  },
  {
    label: 'Strømforbruk enn direkte elektrisk oppvarming',
    value: '78% reduksjon',
  },
  {
    label: 'Per måned av CO2-utslipp sammenlignet med diesel',
    value: '18 tonn reduksjon',
  },
];

export function Mission() {
  return (
    <div className="px-6 mx-auto -mt-12 max-w-7xl sm:mt-0 lg:px-8 xl:-mt-8">
      <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Vårt oppdrag
        </h2>
        <div className="flex flex-col mt-6 gap-x-8 gap-y-20 lg:flex-row">
          <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
            <p className="text-xl leading-8 text-gray-600">
              Entalpy AS er forpliktet til å levere innovative og bærekraftige
              energiløsninger som gir reelle fordeler for våre kunder. Vi er
              stolte av våre resultater.
            </p>
            <div className="max-w-xl mt-10 text-base leading-7 text-gray-700">
              <p>
                Vårt oppdrag er å designe og levere skreddersydde løsninger som
                gir effektive og miljøvennlige energialternativer for en rekke
                bruksområder. Vi er forpliktet til å være en pålitelig partner
                og lede veien mot en bærekraftig fremtid.
              </p>
            </div>
          </div>
          <div className="lg:flex lg:flex-auto lg:justify-center">
            <dl className="w-64 space-y-8 xl:w-80">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                  <dt className="text-base leading-7 text-gray-600">
                    {stat.label}
                  </dt>
                  <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
