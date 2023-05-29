import { Fragment } from 'react';

const locations = [
  {
    name: 'Kapasiteter',
    feature: [
      {
        name: 'Avgitt varmeeffekt (kW)',
        ell90: '86',
        ell50: '48,5',
      },
      {
        name: 'Tilført effekt (kW)',
        ell90: '20',
        ell50: '10,9',
      },
      {
        name: 'COP',
        ell90: '4.3',
        ell50: '4.4',
      },
      {
        name: 'Sikringskurs (Amp)',
        ell90: '63',
        ell50: '32',
      },
      {
        name: 'Spenningsart',
        ell90: '400 V',
        ell50: '3NP-E',
      },
      {
        name: 'Tilkoblinger varmluftslanger',
        ell90: '4 x Ø500',
        ell50: '2 x Ø500',
      },
      {
        name: 'Luftmengde varmluft',
        ell90: '18,500',
        ell50: '8,000',
      },
      {
        name: 'Lufttemperatur tilført bygg (°C)',
        ell90: '25-40',
        ell50: '25-35',
      },
      {
        name: 'Returluft fra bygg (°C)',
        ell90: '15',
        ell50: '15',
      },
    ],
  },
  {
    name: 'Mål og vekt',
    feature: [
      {
        name: 'Lengde (mm)',
        ell90: '2,400',
        ell50: '2,200',
      },
      {
        name: 'Bredde (mm)',
        ell90: '1,200',
        ell50: '1,200',
      },
      {
        name: 'Høyde (mm)',
        ell90: '2,200',
        ell50: '2,200',
      },
      {
        name: 'Vekt (kg)',
        ell90: '1,100',
        ell50: '840',
      },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function ComparisonTable() {
  return (
    <section id="modeller">
      <div className="px-4 pb-24 sm:px-6 lg:px-8 sm:pb-32">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              Sammenligningstabell
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              Tekniske spesifikasjoner for ELL90 og ELL50 varmepumper
            </p>
          </div>
        </div>
        <div className="flow-root max-w-3xl mx-4 mt-8 sm:mx-6 lg:mx-8">
          <div className="-mx-4 -my-2 overflow-x-auto rounded-md ring-1 ring-gray-300 sm:-mx-6 lg:-mx-8 sm:rounded-lg">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full">
                <thead className="bg-white">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                    >
                      {''}
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      ELL90
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      ELL50
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {locations.map((location) => (
                    <Fragment key={location.name}>
                      <tr className="border-t border-gray-200">
                        <th
                          colSpan={5}
                          scope="colgroup"
                          className="py-2 pl-4 pr-3 text-sm font-semibold text-left text-gray-900 bg-gray-50 sm:pl-3"
                        >
                          {location.name}
                        </th>
                      </tr>
                      {location.feature.map((item, itemIdx) => (
                        <tr
                          key={item.itemIdx}
                          className={classNames(
                            itemIdx === 0
                              ? 'border-gray-300'
                              : 'border-gray-200',
                            'border-t'
                          )}
                        >
                          <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-3">
                            {item.name}
                          </td>
                          <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {item.ell90}
                          </td>
                          <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {item.ell50}
                          </td>
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
