import Head from 'next/head';

import { Button } from '@/components/Button';

const betingelser = [
  {
    id: '1',
    title: 'Alminnelige bestemmelser',
    description: [
      'Med mindre annet er bestemt, legges følgende bestemmelser til grunn: NL 17. Alminnelige leverings-betingelser for leveranser av maskiner og annet mekanisk og elektrisk utstyr, for ordre som ikke inkluderer montering eller igangkjøring. ',
    ],
  },
  {
    id: '2',
    title: 'Tilbud',
    description: [
      'Tilbud er bare bindende innenfor angitt tidsbegrensning. Hvis ikke annet er angitt, er tilbudet kun gyldig i 30 dager fra tilbudsdato. Statlige særavgifter faktureres etter gjeldende satser.',
    ],
  },
  {
    id: '3',
    title: 'Priser',
    description: [
      'Alle priser er angitt EXW, dersom ikke annet er avtalt. Hvis ordren inkluderer montering og igangkjøring, skjer dette etter regning, med mindre annet er avtalt. EAS kan forlange bankgaranti som dekker hele eller deler av kontrakt- summen.',
    ],
  },
  {
    id: '4',
    title: 'Levering/Risiko',
    description: [
      'Levering omfatter kun det materiell, utstyr og arbeid som er angitt i ordrebekreftelsen. EAS har ikke ansvar hvis en eventuell forsinkelse skyldes forhold kjøper svarer for.',
      'EAS er under ingen omstendigheter ansvarlig for tap eller øvrige ulemper som skyldes manglende eller forsinket levering på grunn av epidemier, virusutbrudd eller lignende.',
      'Hvis kjøper ikke kan ta imot levering til avtalt tid, må kjøper erstatte EASs meromkostninger og må foreta oppgjør i samsvar med avtalen som om levering hadde funnet sted.',
      'Når risikoen for varen er gått over på kjøperen, faller ikke hans plikt til å betale kjøpesummen bort ved at tingen deretter går tapt, skades eller minskes som følge av hending som ikke beror på selgeren.',
      'Risikoen går over på kjøper, idet varen er levert.',
      'Varer som selger skal frakte til kjøper, anses levert når varen er levert på kjøpers angitte leveringsadresse, til det tidspunkt som er spesifisert i avtale mellom partene.',
      'Levering anses forsinket fra selgers side, dersom leveringen skjer på annen måte enn det som er avtalt, og dette skyldes selgers forhold.',
      'Blir levering forsinket, og dette ikke skyldes forhold på selgers side, går risiko likevel over på kjøper. Dette gjelder også i de tilfeller hvor selger tilbyr oppbevaring på selgers eiendom eller på annet avtalt sted.',
    ],
  },
  {
    id: '5',
    title: 'Betalingsbetingelser',
    description: [
      '50% ved bestilling, 50% når varen er klar for levering. Etter forfall beregnes forsinkelsesrenter etter gjeldende sats. Ved manglende betaling vil saken bli sendt inkasso og renter påløpe. Leverte varer forblir EAS eiendom inntil full betaling foreligger. Manglende uberettiget betaling kan medføre begrensninger i support.',
    ],
  },
  {
    id: '6',
    title: 'Reklamasjonsansvar',
    description: [
      'Dersom det foreligger grunnlag for erstatningskrav mot oss, er vårt ansvar begrenset til feil og mangler ved de leverte gjenstander. Vi er uten ansvar for tap som direkte eller indirekte måtte være foranlediget av de leverte gjenstander. Erstatningskravet kan ikke overstige leveransens kostnad.',
      'Ved mottagelse av varene må kjøper undersøke leveransen nøye, og gi skriftlig meddelelse uten ubegrunnet opphold til EAS hvis mangler oppdages. Ved ordre som også omfatter montering og igangkjøring, skal det avholdes overtagelses-protokoll, hvor eventuelle mangler skal innføres. Hvis reklamasjon ikke skjer uten ubegrunnet opphold, mister kjøper retten til å fremsette krav pga. mangelen.',
      'EAS er ansvarlig for mangler som skyldes feil i konstruksjonen, materiale eller arbeid i 3-tre år – fra leveringsdato, hvis ikke annet er avtalt.',
      'Ved eventuelle feil eller mangler har EAS rett til å foreta utbedringer for egen regning og risiko. Dersom kunden selv utfører retting, skal EAS på forhånd godkjenne metode og kostnad.',
      'Defekte komponenter, som omfattes av normal slitasje eller feil bruk, omfattes ikke av reklamasjonsansvaret. Reklamasjonen dekker ikke kuldemedier, oljer, arbeidstimer og reisekostnader.',
      'Reklamasjon gjelder ikke dersom oppgitte parametere ikke er fulgt, samt at bruks og vedlikeholds instruks ikke er fulgt. Ved reklamasjon må det dokumenteres at utførte service-intervaller er utført av autorisert personell. Har anlegget kuldemedier skal det dokumenteres at pålagt årlig lekkasjekontroll er utført.',
    ],
  },
  {
    id: '7',
    title: 'Kjøpers egne betingelser',
    description: [
      'Hvis kjøper har egne innkjøpsbetingelser som avviker fra EASs betingelser, går EASs betingelser foran – med mindre EAS skriftlig har godtatt kjøpers betingelser.',
    ],
  },
  {
    id: '8',
    title: 'Force Majeure',
    description: [
      'I tilfelle av force majeure er EAS fritatt for sine forpliktelser, så lenge force majeure situasjonen består. Force majeure foreligger såfremt EAS eller underleverandører forhindres i å oppfylle avtaler som reguleres ved disse salgs- og leverings bestemmelser, som følge av begivenheter som, men ikke begrenset til, Krig, opprør, terrorhandlinger, offentlige restriksjoner, import- eller eksport forbud, naturkatastrofer av enhver art, epidemier/virusutbrudd, samt utbredte eller lokale arbeidskonflikter, brann strømsvikt, manglende levering av komponenter, computervirus eller lignende, med mindre det kan påvises at EAS med rimelighet burde ha forutsatt dette på tidspunktet for aksept av ordren.',
    ],
  },
];

export default function Betingelser() {
  return (
    <>
      <Head>
        <title>Salgs- og leveringsbetingelser - Entalpy AS</title>
        <meta
          name="description"
          content="Få informasjon salgs- og leveringsbetingelser for våre varmepumper. Les våre vilkår og betingelser før du foretar en bestilling eller ett kjøp."
        />
        <meta
          name="keywords"
          content="Varmepumpe salgs- og leveringsbetingelser, B2B varmepumpeutleie vilkår, Entalpy AS sine betingelser for varmepumpeprodukter, Betingelser for kjøp og bruk av industrielle varmepumper, Vilkår og avtaler for varmepumpeinstallasjoner, Retningslinjer og betingelser for varmepumpeservice, Entalpy AS - Vilkår for kjøp og support av varmepumper, Vilkår og betingelser for varmepumpevedlikehold, Entalpy AS sine generelle salgsbetingelser, Juridiske betingelser og avtaler for varmepumpebransjen, Betingelser for garantier og reklamasjoner på varmepumper, Varmepumpefinansiering og betalingsbetingelser, Salgs- og leveringsbetingelser for varmepumpekomponenter, Retningslinjer for sikkerhet og ansvar ved bruk av varmepumper, Betingelser for varmepumpeserviceavtaler og supporttjenester"
        />
        <link
          rel="canonical"
          href="https://entalpy.no/betingelser"
          key="canonical"
        />
      </Head>
      <div className="py-24 bg-white sm:py-32">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
            <p className="text-base font-semibold leading-7 text-green-600">
              Generelle
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Salgs- og leveringsbetingelser
            </h1>
            <div className="grid max-w-xl grid-cols-1 gap-8 mt-10 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
              <div>
                <p className="text-lg font-semibold">
                  Nedenstående salgs- og leveringsbetingelser anvendes ved alle
                  salg og Leveringer fra Entalpy AS (heretter kalt EAS), med
                  mindre de er helt eller delvis fraveket ved skriftlig avtale
                  mellom EAS og kjøper.
                </p>
                <dl className="max-w-xl mt-10 space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {betingelser.slice(0, 4).map((betingelse) => (
                    <div key={betingelse.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <div
                          className="absolute top-0 left-0 flex items-center justify-center text-sm text-green-600 rounded-full bg-green-600/10 ring-1 ring-inset ring-green-600/10 w-7 h-7"
                          aria-hidden="true"
                        >
                          {betingelse.id}
                        </div>
                        {betingelse.title}
                      </dt>{' '}
                      <dd className="block space-y-4">
                        {betingelse.description.map((desc, i) => (
                          <p key={i}>{desc}</p>
                        ))}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div>
                <dl className="max-w-xl mt-0 space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {betingelser.slice(5, 8).map((betingelse) => (
                    <div key={betingelse.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <div
                          className="absolute top-0 left-0 flex items-center justify-center text-sm text-green-600 rounded-full bg-green-600/10 ring-1 ring-inset ring-green-600/10 w-7 h-7"
                          aria-hidden="true"
                        >
                          {betingelse.id}
                        </div>
                        {betingelse.title}
                      </dt>{' '}
                      <dd className="block space-y-4">
                        {betingelse.description.map((desc, i) => (
                          <p key={i}>{desc}</p>
                        ))}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="flex mt-10">
              <Button
                download
                href="/Entalpy-AS-salgs-og-leveringsbetingelser.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Last ned PDF
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
