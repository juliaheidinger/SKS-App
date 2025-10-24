
import type { Category } from './types';
import { NavigationIcon, SeamanshipIcon, LawIcon, WeatherIcon } from './components/Icons';

export const CATEGORIES: Category[] = [
  {
    id: 'navigation',
    name: 'Navigation',
    description: 'Terrestrische und elektronische Navigation, Gezeitenkunde.',
    icon: NavigationIcon,
  },
  {
    id: 'seamanship',
    name: 'Seemannschaft',
    description: 'Manöver, Sicherheit an Bord und technische Grundlagen.',
    icon: SeamanshipIcon,
  },
  {
    id: 'law',
    name: 'Schifffahrtsrecht',
    description: 'Kollisionsverhütungsregeln und Seeschifffahrtsstraßen-Ordnung.',
    icon: LawIcon,
  },
  {
    id: 'weather',
    name: 'Wetterkunde',
    description: 'Grundlagen der Meteorologie, Wetterkarten und Seewetter.',
    icon: WeatherIcon,
  },
];
