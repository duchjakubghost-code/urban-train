import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'praha-oldtown-square',
    title: 'Staroměstské náměstí, Praha',
    location: 'Staré Město, Praha 1',
    type: 'city',
    description: 'Instalace 12 jednotek MlžítkoGo PRO City pro chlazení jednoho z nejdůležitějších míst v Praze. Systém automaticky reaguje na teplotu a vytváří příjemné mikroklimatické zóny.',
    images: [
      '/images/projects/praha-oldtown-1.jpg',
      '/images/projects/praha-oldtown-2.jpg',
      '/images/projects/praha-oldtown-3.jpg',
    ],
    benefits: [
      'Zvýšení komfortu pro туристy a místní',
      'Snížení počtu osob s tepelným stresem',
      'Zvýšení doby pobytu na náměstí o 35%',
      'Úspora 15 000 Kč měsíčně na vodě',
    ],
    testimonial: {
      author: 'Ing. Pavel Novák',
      role: 'Vedoucí správy Staroměstského náměstí',
      quote: 'MlžítkaGo kompletně změnila atmosféru na našem náměstí. Návštěvníci jsou spokojeni a my jsme ušetřili na provozních nákladech.',
    },
    tags: ['Praha', 'Náměstí', 'Turismus', 'Veřejný prostor'],
    featured: true,
  },
  {
    id: 'brno-luzanky-park',
    title: 'Park Lužánky, Brno',
    location: 'Lužánky, Brno',
    type: 'park',
    description: 'Revitalizace historického parku s instalací 8 modulárních jednotek MlžítkoGo Park Professional. Systém se automaticky aktivuje při teplotě nad 28°C.',
    images: [
      '/images/projects/brno-luzanky-1.jpg',
      '/images/projects/brno-luzanky-2.jpg',
    ],
    benefits: [
      'Vytvořilo 5 nových relaxačních zón',
      'Zvýšení návštěvnosti o 42%',
      'Lepší prostředí pro sportovce a běžce',
      'Zvýšena atraktivita pro rodiny s dětmi',
    ],
    testimonial: {
      author: 'Mgr. Helena Svobodová',
      role: 'Správce Parku Lužánky',
      quote: 'Návštěvníci jsou nadšení. Park je nyní využíván i v nejhorkějších dnech léta.',
    },
    tags: ['Brno', 'Park', 'Rekreace', 'Rodiny'],
    featured: true,
  },
  {
    id: 'ceske-budejovice-market',
    title: 'Přemyslovácké náměstí - Farmer Market, České Budějovice',
    location: 'Nám. Přemyslovců, České Budějovice',
    type: 'public',
    description: 'Instalace 6 jednotek MlžítkoGo PRO City pro pravidelný farmářský trh. Prodejcům zboží a návštěvníkům je teď komfortněji i v letních měsících.',
    images: [
      '/images/projects/budejovice-market-1.jpg',
      '/images/projects/budejovice-market-2.jpg',
    ],
    benefits: [
      'Prodloužení trhu do pozdních odpoledních hodin',
      'Zvýšení tržeb prodejců o 28%',
      'Lepší příjezd nových prodejců',
      'Vyšší návštěvnost i v horkých dnech',
    ],
    testimonial: {
      author: 'Roman Horák',
      role: 'Vedoucí farmářského trhu',
      quote: 'Mlžítka jsou zázrak. Prodejci už nechcějí trh opouštět a zákazníci se vrací.',
    },
    tags: ['České Budějovice', 'Trh', 'Obchod', 'Prodej'],
    featured: false,
  },
  {
    id: 'ostrava-garden-residential',
    title: 'Privátní zahrada s terasou, Ostrava',
    location: 'Privátní nemovitost, Ostrava',
    type: 'public',
    description: 'Instalace MlžítkoGo Garden ECO pro rezidenční prostor. Majitel nyní může trávit léto na terase bez nepříjemného tepla.',
    images: [
      '/images/projects/ostrava-garden-1.jpg',
      '/images/projects/ostrava-garden-2.jpg',
    ],
    benefits: [
      'Komfortné posezení v létě',
      'Ochrana rostlin před vypálením',
      'Zvýšení hodnoty nemovitosti',
      'Minimální údržba',
    ],
    testimonial: {
      author: 'Petr Kozák',
      role: 'Majitel nemovitosti',
      quote: 'Nejlepší investice do zahrady. Terasa je teď v létě opravdu použitelná.',
    },
    tags: ['Ostrava', 'Zahrada', 'Rezidence', 'Terasa'],
    featured: false,
  },
];
