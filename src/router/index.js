import Hello from '@/components/Hello';
import HelloPostCSS from '@/pages/HelloPostCSS';

export default [
  {
    path: '/',
    name: 'Hello',
    component: Hello,
  }, {
    path: '/hello-postcss',
    name: 'HelloPostCSS',
    component: HelloPostCSS,
  },
];
