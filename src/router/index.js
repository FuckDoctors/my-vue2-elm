import Hello from '@/components/Hello';
import HelloPostCSS from '@/pages/HelloPostCSS';

import Home from '@/pages/Home';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
  }, {
    path: '/hello',
    name: 'Hello',
    component: Hello,
  }, {
    path: '/hello-postcss',
    name: 'HelloPostCSS',
    component: HelloPostCSS,
  },
];
