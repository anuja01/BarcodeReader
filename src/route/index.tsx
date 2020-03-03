
import Landing from '../modules/Landing';
import BarcodeScanner from '../modules/Scanner';
import Home from '../modules/Home';
import About from '../modules/About';

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
