import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'jak-funguje-evaporativni-chlazeni',
    title: 'Jak funguje evaporativní chlazení? Vědecký pohled',
    excerpt: 'Pochopte fyziku za technologií, která chladí bez klimatizace. Mikro mlha se odpařuje a sníží teplotu až o 8°C.',
    content: `# Jak funguje evaporativní chlazení?

Evaporativní chlazení je stará technika, kterou už staří Egypťané znali. Když se voda odpařuje, odebírá z okolí teplo.

## Fyzika procesu

Jednoduše řečeno:
- Voda se rozpráší do mikro kapánek
- Kapičky se odpařují
- Proces odpařování spotřebovává energii (teplo)
- Tato energie pochází z okolního vzduchu
- Výsledek: snížená teplota

## Rozdíl oproti klimatizaci

- **Klimatizace**: Mechanické chlazení, vysoká spotřeba energie (3-5 kW)
- **Mlžítka**: Evaporativní chlazení, nízká spotřeba (0,1-0,3 kW)
- **Výsledek**: Úspora 80-90% energetických nákladů

## Kde se používá?

Evaporativní chlazení se ukazuje být ideální pro:
- Venkovní prostory
- Moderní města
- Ekologicky vědomé projekty
- Malé a střední podniky

## Závěr

Evaporativní chlazení není jenom efektivní, ale také ekologické a ekonomické.
    `,
    author: 'Ing. Jan Šimánek',
    date: '2024-07-01',
    image: '/images/blog/evaporativni-chlazeni.jpg',
    category: 'innovations',
    tags: ['fyzika', 'chlazení', 'technologie', 'věda'],
    relatedPostIds: ['post-3', 'post-5'],
    internalLinks: [
      { text: 'MlžítkaGo PRO City', slug: 'produkty#pro-city' },
      { text: 'Případ Staroměstského náměstí', slug: 'realizace/praha-oldtown-square' },
    ],
  },
  {
    id: 'post-2',
    slug: 'pravda-o-uspore-vody',
    title: 'Pravda o úspoře vody: Kolik vody opravdu ušetří?',
    excerpt: 'Detailní analýza spotřeby vody u tradičních sprstek vs. mlžovacích systémů. Zjistěte reálná čísla.',
    content: `# Pravda o úspoře vody

## Srovnání spotřeby vody

### Tradiční sprcha
- Průměrně: 100-150 litrů za minutu
- Při provozu 2 hodiny za den: 12,000-18,000 litrů za měsíc
- Náklady: 300-450 Kč/měsíc

### MlžítkaGo systémy
- Průměrně: 5-10 litrů za minutu
- Při provozu 4 hodiny za den: 1,200-2,400 litrů za měsíc
- Náklady: 30-60 Kč/měsíc

## Úspora

- **Veřejný prostor (Staroměstské náměstí)**: 15,000 Kč/měsíc
- **Farmer market**: 8,500 Kč/měsíc
- **Privátní zahrada**: 200-300 Kč/měsíc

## Ekologické benefity

- Nižší zátěž na vodohospodářství
- Méně znečištěné vody
- Větší kapacita pro ostatní oblasti

## Investice se vrací

Průměrná investice se vrací za 18-24 měsíců prostřednictvím úspor na vodě a energii.
    `,
    author: 'Mgr. Petra Voslová',
    date: '2024-06-28',
    image: '/images/blog/uspora-vody.jpg',
    category: 'uspory',
    tags: ['voda', 'úspora', 'ekonomika', 'ekologie'],
    relatedPostIds: ['post-1', 'post-4'],
    internalLinks: [
      { text: 'Realizace - Staroměstské náměstí', slug: 'realizace/praha-oldtown-square' },
      { text: 'Přínosy mlžítek', slug: 'produkty#benefits' },
    ],
  },
  {
    id: 'post-3',
    slug: 'letni-tepelny-stres-ve-mestech',
    title: 'Letní teplotní stres ve městech - jak se proti němu bránit',
    excerpt: 'Fenomén tepelných ostrůvků ve městech a praktická řešení pro ochranu zdraví.',
    content: `# Letní teplotní stres ve městech

## Fenomén tepelných ostrůvků

Teplotní ostrůvky jsou urbánní oblasti, kde je teplota o 2-5°C vyšší než v okolí.

## Příčiny

- Betonové a asfaltu povrchy
- Absence zeleně
- Znečistění vzduchu
- Hustá zástavba

## Zdravotní dopad

- Zvýšení počtu infarktů o 15-20%
- Dehydratace
- Tepelné úpaly
- Zhoršení spánku

## Řešení

### Přírodní řešení
- Zvýšení zeleně
- Vodní prvky
- Obnova jezer

### Technologická řešení
- Mlžovací systémy
- Reflektivní povrchy
- Zelené střechy

### Kombinovaný přístup
- Kombinace všech výše uvedených řešení
- Snížení teploty o 3-8°C
- Zlepšení životní podmínky
    `,
    author: 'Dr. Milan Kuchta',
    date: '2024-06-25',
    image: '/images/blog/tepelny-stres.jpg',
    category: 'zdravi',
    tags: ['zdraví', 'město', 'klima', 'teplo'],
    relatedPostIds: ['post-1', 'post-6'],
    internalLinks: [
      { text: 'MlžítkaGo pro města', slug: 'produkty#pro-city' },
      { text: 'Případ Parku Lužánky', slug: 'realizace/brno-luzanky-park' },
    ],
  },
  {
    id: 'post-4',
    slug: 'turismus-a-atraktivita-mest',
    title: 'Jak mlžítka zvyšují turismus v městech',
    excerpt: 'Případová studie: Zvýšení počtu návštěvníků o 35% díky zlepšení klimatických podmínek.',
    content: `# Jak mlžítka zvyšují turismus v městech

## Problém letních měsíců

V červenci a srpnu jsou historické městské centrum v Česku příliš horkých.
- Návštěvníci omezují pobyt
- Nižší výdaje v kavárnách a restauracích
- Kratší doby focení a sledování atraktivit

## Řešení - MlžítkaGo

Instalace mlžovacích systémů na klíčových místech.

## Výsledky z Prahy

- **Návštěvnost**: +35% v červenci a srpnu
- **Průměrná doba pobytu**: +45 minut
- **Výdaje na osobu**: +18%
- **Spokojenost**: 92% pozitivních zpětných vazeb

## Ekonomický dopad

- Zvýšené příjmy z gastronomie
- Nižší absence na pracovišti
- Zvýšené příjmy z cestovního ruchu
- Lepší reputace města

## Závěr

Mlžovací systémy nejsou jenom komfortní, ale také ekonomicky přínosné.
    `,
    author: 'Ing. Pavel Novák',
    date: '2024-06-20',
    image: '/images/blog/turismus.jpg',
    category: 'tipy',
    tags: ['turismus', 'město', 'ekonomika', 'Praha'],
    relatedPostIds: ['post-2', 'post-3'],
    internalLinks: [
      { text: 'Realizace - Staroměstské náměstí', slug: 'realizace/praha-oldtown-square' },
      { text: 'MlžítkaGo PRO City', slug: 'produkty#pro-city' },
    ],
  },
  {
    id: 'post-5',
    slug: 'ai-autopilot-priortizace',
    title: 'AI Autopilot: Budoucnost inteligentního chlazení',
    excerpt: 'Jak umělá inteligence optimalizuje spotřebu vody a energie v mlžovacích systémech.',
    content: `# AI Autopilot: Budoucnost inteligentního chlazení

## Co je AI Autopilot?

AI Autopilot je inteligentní systém, který se učí z vašeho chování a optimalizuje provoz.

## Jak funguje?

1. **Sběr dat**: Teplota, vlhkost, počet osob, čas
2. **Analýza**: Machine Learning algoritmy
3. **Předpověď**: Předvídá potřebu chlazení
4. **Optimalizace**: Automaticky spustí/vypne mlžítka

## Výhody

- Úspora vody až 40%
- Úspora elektřiny až 35%
- Lepší komfort
- Snížení nákladů na údržbu

## Příklady

- V Praze se AI naučilo spouštět mlžítka 15 minut před špičkou návštěvníků
- V Brně optimalizuje provoz v závislosti na předpovědi počasí

## Budoucnost

AI Autopilot se bude dále vyvíjet a učit.
    `,
    author: 'Mgr. Tomáš Dvořák',
    date: '2024-06-15',
    image: '/images/blog/ai-autopilot.jpg',
    category: 'innovations',
    tags: ['AI', 'technologie', 'automatizace', 'budoucnost'],
    relatedPostIds: ['post-1', 'post-6'],
    internalLinks: [
      { text: 'MlžítkaGo Park Professional', slug: 'produkty#park-professional' },
      { text: 'Přínosy technologické nadvlády', slug: 'produkty#tech-benefits' },
    ],
  },
  {
    id: 'post-6',
    slug: 'inspirujici-projekty-evropa',
    title: 'Inspirující projekty v Evropě: Jak se zabírají vedoucí města',
    excerpt: 'Přehled zajímavých projektů mlžovacích systémů v Amsterdamu, Barceloně a Neapoli.',
    content: `# Inspirující projekty v Evropě

## Přehled projektů

### Amstedam, Holandsko
- **Projekt**: Kanálové oblasti
- **Řešení**: Evaporativní chlazení + zelená střechy
- **Výsledek**: Teplota -3°C, Zvýšená kvalita života

### Barcelona, Španělsko
- **Projekt**: Plaza Real
- **Řešení**: Mlžovací systémy
- **Výsledek**: +50% návštěvníků v letních měsících

### Neapol, Itálie
- **Projekt**: Historické centrum
- **Řešení**: Inteligentní mlžítka s AI
- **Výsledek**: -8°C v letě, Skvělá reputace

## Co si vzít zpět?

- Kombinace tradičních a moderních řešení
- Důraz na kvalitu života
- Dlouhodobá investice do infrastruktury

## Česká příležitost

České města mají potenciál stát se lídry v inovativních řešeních ochlazování.
    `,
    author: 'Tomáš Skála',
    date: '2024-06-10',
    image: '/images/blog/evropa-projekty.jpg',
    category: 'inspirace',
    tags: ['Evropa', 'inspirace', 'projekty', 'města'],
    relatedPostIds: ['post-3', 'post-4'],
    internalLinks: [
      { text: 'Naše realizace', slug: 'realizace' },
      { text: 'MlžítkaGo pro města', slug: 'produkty#pro-city' },
    ],
  },
];
