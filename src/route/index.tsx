
import Main from '../modules/Main';
import { BarcodeScanner } from '../modules/Scanner';
import Home from '../modules/Home';
import About from '../modules/About';

export const tabNavigation = [
  {
    name: 'Main',
    component: Main,
    options: {
      tabBarLabel: 'Main',
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
