import Head from 'next/head';

import { Personopplysninger } from '@/components/Personopplysninger';

const personopplysninger = [
  {
    id: '1',
    title: 'Levering av tjeneste/avtaleinngåelse',
    description: [
      'Vi bruker dine personopplysninger til å oppfylle våre avtaler med deg, det vil si når du har bestilt et produkt eller en tjeneste fra oss. Det rettslige grunnlaget for å behandle personopplysninger til dette formålet er at behandlingen er nødvendig for å oppfylle en avtale med deg. ',
    ],
  },
  {
    id: '2',
    title: 'Administrasjon av kundeforhold',
    description: [
      'Vi bruker dine personopplysninger til å administrere vårt kundeforhold med deg. Det kan for eksempel være kundeservice, klagebehandling og feilretting vedrørende ditt kundeforhold. Det rettslige grunnlaget for å behandle personopplysninger til dette formålet er at behandlingen er nødvendig for å oppfylle en avtale med deg.',
    ],
  },
  {
    id: '3',
    title: 'Analyse, forretningsutvikling og forbedring av tjenester',
    description: [
      'Vi arbeider kontinuerlig med å utvikle og forbedre våre tjenester og produkter. Mye av dette arbeidet innebærer å analysere ulike former for personopplysninger, som for eksempel kundeaktivitet, kundehistorikk og konto og profilinformasjon. Det rettslige grunnlaget for å behandle personopplysninger til dette formålet er vår berettigede interesse.',
    ],
  },
  {
    id: '4',
    title: 'Tilpasset brukeropplevelse',
    description: [
      'Vi bruker personopplysninger i forbindelse med salg og markedsføring av våre produkter og tjenester, for eksempel ved at du mottar epost fra oss. Det rettslige grunnlaget for å behandle personopplysninger til dette formålet er vår berettigede interesse. Du har mulighet å reservere deg fra deler av denne behandlingen ved å, for eksempel, reservere deg fra å motta epost fra oss. I tillegg til dette kan vi også be deg om samtykke til å bruke dine personopplysninger til såkalt profilering, hvor vi utleder interesser og behov på bakgrunn av dine personopplysninger. Hensikten med profilering vil være at markedsføringen vår skal bli mer relevant',
    ],
  },
  {
    id: '5',
    title: 'Salg og markedsføring',
    description: [
      'Vi bruker personopplysninger i forbindelse med salg og markedsføring av våre produkter og tjenester, for eksempel ved at du mottar epost fra oss. Det rettslige grunnlaget for å behandle personopplysninger til dette formålet er vår berettigede interesse. Du har mulighet å reservere deg fra deler av denne behandlingen ved å, for eksempel, reservere deg fra å motta epost fra oss. I tillegg til dette kan vi også be deg om samtykke til å bruke dine personopplysninger til såkalt profilering, hvor vi utleder interesser og behov på bakgrunn av dine personopplysninger. Hensikten med profilering vil være at markedsføringen vår skal bli mer relevant.',
    ],
  },
  {
    id: '6',
    title: 'Systemovervåking, feilretting mm.',
    description: [
      'Vi overvåker våre systemer etter feil og problemer. En del av disse prosessene innebærer lagring og behandling av personopplysninger. Det rettslige grunnlaget for å behandle personopplysninger til dette formålet er vår berettigede interesse.',
    ],
  },
  {
    id: '7',
    title: 'Sikkerhet, avdekking av svindel og kriminelle handlinger',
    description: [
      'Vi behandler personopplysninger i vårt arbeid med å beskytte våre brukere og oss selv mot svindelaktivitet, misbruk og kriminelle handlinger. Det rettslige grunnlaget for å behandle personopplysninger til dette formålet er vår berettigede interesse.',
    ],
  },
  {
    id: '8',
    title: 'Overholde rettslige forpliktelser',
    description: [
      'I enkelte tilfeller er vi pålagt å behandle personopplysninger av hensyn til andre rettslige forpliktelser. Et eksempel på dette er informasjon knyttet til salg, som vi er pliktig til å regnskapsføre og oppbevare i henhold til bokføringsloven. Det rettslige grunnlaget for å behandle personopplysninger til dette formålet er at behandlingen er nødvendig for å oppfylle en rettslig forpliktelse som påhviler oss.',
    ],
  },
  {
    id: '9',
    title: 'Dine rettigheter',
    description: [
      'Dersom du ønsker å utøve noen av dine rettigheter, ta kontakt med oss på frank@entalpy.no.',
    ],
  },
  {
    id: '10',
    title: 'Rett til innsyn i egne opplysninger',
    description: [
      'Du kan be om en kopi av alle opplysninger vi behandler om deg. Ta kontakt på epostadressen ovenfor for å bruke innsynsretten din.',
    ],
  },
  {
    id: '11',
    title: 'Rett til korrigering av personopplysninger',
    description: [
      'Du har rett til å be oss rette eller supplere opplysninger som er feilaktige eller misvisende.',
    ],
  },
  {
    id: '12',
    title: 'Retten til sletting av personopplysninger',
    description: [
      'Du har rett til å få dine personopplysninger slettet uten ugrunnet opphold. Du kan derfor når som helst be oss slette opplysninger om deg selv. Men merk at informasjon som vi er pålagt beholde av hensyn til andre rettslige forpliktelser (som fore eksempel bokføringsloven) ikke vil bli slettet.',
    ],
  },
  {
    id: '13',
    title: 'Begrensning av behandling av personopplysninger',
    description: [
      'I noen situasjoner kan du også be oss begrense behandlingen av opplysninger om deg. Dette gjør du ved å administrere samtykker eller reservasjoner i våre løsninger.',
    ],
  },
  {
    id: '14',
    title: 'Protestere mot en behandling av personopplysninger',
    description: [
      'Dersom vi behandler opplysninger om deg med grunnlag i våre oppgaver eller på bakgrunn av en interesseavveining, har du rett til å protestere på vår behandling av opplysninger om deg. Dette gjør du ved å administrere samtykker eller reservasjoner i våre løsninger',
    ],
  },
  {
    id: '15',
    title: 'Dataportabilitet',
    description: [
      'Du har rett til å få utlevert dine personopplysninger i et strukturert, alminnelig anvendt og maskinlesbart format. Ta kontakt på epostadressen ovenfor for å få utlevert dine personopplysninger.',
    ],
  },
  {
    id: '16',
    title: 'Du kan klage på vår behandling av personopplysninger',
    description: [
      'Vi håper du vil si ifra dersom du mener vi ikke overholder reglene i personopplysningsloven. Si da gjerne først i fra gjennom den kontakten eller kanalen du allerede har etablert med oss. Du kan også klage over vår behandling av personopplysninger. Dette gjør du til Datatilsynet.',
    ],
  },
];

export default function Personvernerklaering() {
  return (
    <>
      <Head>
        <title>Personvernerklæring - Entalpy AS</title>
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
          href="https://entalpy.no/personverneklaering"
          key="canonical"
        />
      </Head>
      <div className="py-24 bg-white sm:py-32">
        <Personopplysninger />
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
            <h1 className="mt-10 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Hvordan vi bruker personopplysningene
            </h1>
            <div className="grid max-w-xl grid-cols-1 gap-8 mt-10 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
              <div>
                {/* <p className="text-lg font-semibold">
                  Hvordan vi bruker personopplysningene
                </p> */}
                <dl className="max-w-xl mt-0 space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {personopplysninger.slice(0, 7).map((personopplysningen) => (
                    <div key={personopplysningen.id} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <div
                          className="absolute top-0 left-0 flex items-center justify-center text-sm text-green-600 rounded-full bg-green-600/10 ring-1 ring-inset ring-green-600/10 w-7 h-7"
                          aria-hidden="true"
                        >
                          {personopplysningen.id}
                        </div>
                        {personopplysningen.title}
                      </dt>{' '}
                      <dd className="block space-y-4">
                        {personopplysningen.description.map((desc, i) => (
                          <p key={i}>{desc}</p>
                        ))}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div>
                <dl className="max-w-xl mt-0 space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {personopplysninger.slice(7, 16).map((personopplysningen) => (
                    <div key={personopplysningen.id} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <div
                          className="absolute top-0 left-0 flex items-center justify-center text-sm text-green-600 rounded-full bg-green-600/10 ring-1 ring-inset ring-green-600/10 w-7 h-7"
                          aria-hidden="true"
                        >
                          {personopplysningen.id}
                        </div>
                        {personopplysningen.title}
                      </dt>{' '}
                      <dd className="block space-y-4">
                        {personopplysningen.description.map((desc, i) => (
                          <p key={i}>{desc}</p>
                        ))}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
