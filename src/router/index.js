import Home from '@/pages/home/Home';
import City from '@/pages/city/City';
import Login from '@/pages/login/Login';

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
  },
];
