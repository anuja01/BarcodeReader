
import Landing from '../components/landing';
import { BarcodeScanner } from '../components/scanner';
import Home from '../components/home';
import About from '../components/about';

export const tabNavigation = [
  {
    name: 'Landing',
    component: Landing,
    options: {
      tabBarLabel: 'Landing',
    },
  },
  {
    name: 'Scanner',
    component: BarcodeScanner,
    options: {
      tabBarLabel: 'Scan',
    },
  },
];

export const stackNavigation = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'About',
    component: About,
  },
];
