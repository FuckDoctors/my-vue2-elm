import Home from '@/pages/home/Home';
import City from '@/pages/city/City';
import Login from '@/pages/login/Login';
import Forgot from '@/pages/login/Forgot';
import msite from '@/pages/msite/msite';

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
  }, {
    path: '/home',
    name: 'home',
    component: Home,
  }, {
    path: '/city/:cityId',
    name: 'City',
    component: City,
  }, {
    path: '/login',
    name: 'login',
    component: Login,
  }, {
    path: '/forgot',
    name: 'forgot',
    component: Forgot,
  }, {
    path: '/msite',
    name: 'msite',
    component: msite,
  },
];
