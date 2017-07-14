import Home from '@/pages/home/Home';
import City from '@/pages/city/City';
import Login from '@/pages/login/Login';
import Forgot from '@/pages/login/Forgot';
import msite from '@/pages/msite/msite';
import Search from '@/pages/search/Search';
import Profile from '@/pages/profile/Profile';
import ProfileInfo from '@/pages/profile/info/Info';
import ChangeUserName from '@/pages/profile/info/ChangeUserName';
import Address from '@/pages/profile/address/Address';
import AddAddress from '@/pages/profile/address/AddAddress';
import AddDetail from '@/pages/profile/address/AddDetail';
import Service from '@/pages/service/Service';
import Question from '@/pages/service/question/Question';

export default [
  {
    path: '/',
    redirect: '/home',
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
    meta: { keepAlive: true },
  }, {
    path: '/search/:geohash',
    name: 'search',
    component: Search,
  }, {
    path: '/profile',
    name: 'profile',
    component: Profile,
    children: [
      {
        path: 'info',
        component: ProfileInfo,
        children: [
          {
            path: 'address',
            component: Address,
            children: [
              {
                path: 'add',
                component: AddAddress,
                children: [
                  {
                    path: 'addDetail',
                    component: AddDetail,
                  },
                ],
              },
            ],
          },
        ],
      }, {
        path: 'changeUserName',
        component: ChangeUserName,
      },
    ],
  }, {
    path: '/service',
    name: 'service',
    component: Service,
    children: [
      {
        path: 'question',
        component: Question,
      },
    ],
  },
];
