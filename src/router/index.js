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
import Points from '@/pages/points/Points';
import PointDetail from '@/pages/points/Detail';
import Balance from '@/pages/balance/Balance';
import BalanceDetail from '@/pages/balance/Detail';
import Benefit from '@/pages/benefit/Benefit';
import Commend from '@/pages/benefit/sub/Commend';
import Coupon from '@/pages/benefit/sub/Coupon';
import Exchange from '@/pages/benefit/sub/Exchange';
import HbDesciption from '@/pages/benefit/sub/HaobaoDescription';
import HbHistory from '@/pages/benefit/sub/HaobaoHistory';
import VipCard from '@/pages/vipcard/VipCard';
import VipDescription from '@/pages/vipcard/sub/VipDescription';
import UseCart from '@/pages/vipcard/sub/UseCart';
import InvoiceRecord from '@/pages/vipcard/sub/InvoiceRecord';
import Shop from '@/pages/shop/Shop';

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
    path: '/points',
    name: 'points',
    component: Points,
    children: [
      {
        path: 'detail',
        component: PointDetail,
      },
    ],
  }, {
    path: '/balance',
    name: 'balance',
    component: Balance,
    children: [
      {
        path: 'detail',
        component: BalanceDetail,
      },
    ],
  }, {
    path: '/benefit',
    name: 'benefit',
    component: Benefit,
    children: [
      {
        path: 'commend',
        component: Commend,
      }, {
        path: 'coupon',
        component: Coupon,
      }, {
        path: 'exchange',
        component: Exchange,
      }, {
        path: 'hbDesciption',
        component: HbDesciption,
      }, {
        path: 'hbHistory',
        component: HbHistory,
      },
    ],
  }, {
    path: '/vipcard',
    name: 'vipcard',
    component: VipCard,
    children: [
      {
        path: 'vipDescription',
        component: VipDescription,
      }, {
        path: 'useCart',
        component: UseCart,
      }, {
        path: 'invoiceRecord',
        component: InvoiceRecord,
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
  }, {
    path: '/shop',
    name: 'shop',
    component: Shop,
    children: [
      {
        path: 'question',
        component: Question,
      },
    ],
  },
];
