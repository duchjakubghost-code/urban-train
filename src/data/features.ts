import { Feature } from '@/types';

export const features: Feature[] = [
  {
    id: 'for-municipalities',
    title: 'Řešení pro města a obce',
    description: 'Ideální pro veřejná prostranství, náměstí a městské parky',
    institutions: ['Městské úřady', 'Obecní samosprávy', 'Páni Starostové', 'Odbory majetku'],
    benefits: [
      'Zvýšení turistické atraktivity',
      'Zlepšení kvality života občanů',
      'Snížení nákladů na údržbu',
      'Ekologické řešení',
    ],
  },
  {
    id: 'for-parks',
    title: 'Řešení pro parky a rekreaci',
    description: 'Komplexní systémy pro přírodní a rekreační areály',
    institutions: ['Správy parků', 'Botanické zahrady', 'Zoologické zahrady', 'Rekreační centra'],
    benefits: [
      'Prodloužení sezóny',
      'Zvýšení návštěvnosti',
      'Zvířata lépe snášejí teplotu',
      'Snížení stresu zvířat',
    ],
  },
  {
    id: 'for-public-spaces',
    title: 'Řešení pro veřejná prostranství',
    description: 'Adaptabilní systémy pro různé typy veřejných prostor',
    institutions: ['Nákupní centra', 'Trhy a trhovnice', 'Letní kina', 'Restaurace a bary'],
    benefits: [
      'Zvýšení pobytu návštěvníků',
      'Zvýšení prodejů',
      'Zlepšení spokojenosti hostů',
      'Moderní imidž podnikání',
    ],
  },
  {
    id: 'for-residential',
    title: 'Řešení pro rezidenci a zahrady',
    description: 'Stylové a účinné řešení pro soukromé prostory',
    institutions: ['Soukromé zahrady', 'Terasy', 'Balkóny', 'Bazénové areály'],
    benefits: [
      'Zvýšení komfortu v létě',
      'Stylové doplnění zahrady',
      'Nižší náklady než klimatizace',
      'Ochrana rostlin',
    ],
  },
];
