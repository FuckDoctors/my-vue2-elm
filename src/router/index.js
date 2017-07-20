const Home = () => import('@/pages/home/Home');
const City = () => import('@/pages/city/City');
const Login = () => import('@/pages/login/Login');
const Forgot = () => import('@/pages/login/Forgot');
const msite = () => import('@/pages/msite/msite');
const Search = () => import('@/pages/search/Search');
const Profile = () => import('@/pages/profile/Profile');
const ProfileInfo = () => import('@/pages/profile/info/Info');
const ChangeUserName = () => import('@/pages/profile/info/ChangeUserName');
const Address = () => import('@/pages/profile/address/Address');
const AddAddress = () => import('@/pages/profile/address/AddAddress');
const AddDetail = () => import('@/pages/profile/address/AddDetail');
const Service = () => import('@/pages/service/Service');
const Question = () => import('@/pages/service/question/Question');
const Points = () => import('@/pages/points/Points');
const PointDetail = () => import('@/pages/points/Detail');
const Balance = () => import('@/pages/balance/Balance');
const BalanceDetail = () => import('@/pages/balance/Detail');
const Benefit = () => import('@/pages/benefit/Benefit');
const Commend = () => import('@/pages/benefit/sub/Commend');
const Coupon = () => import('@/pages/benefit/sub/Coupon');
const Exchange = () => import('@/pages/benefit/sub/Exchange');
const HbDesciption = () => import('@/pages/benefit/sub/HaobaoDescription');
const HbHistory = () => import('@/pages/benefit/sub/HaobaoHistory');
const VipCard = () => import('@/pages/vipcard/VipCard');
const VipDescription = () => import('@/pages/vipcard/sub/VipDescription');
const UseCart = () => import('@/pages/vipcard/sub/UseCart');
const InvoiceRecord = () => import('@/pages/vipcard/sub/InvoiceRecord');
const Shop = () => import('@/pages/shop/Shop');
const ShopDetail = () => import('@/pages/shop/detail/ShopDetail');
const ShopSafe = () => import('@/pages/shop/detail/ShopSafe');
const FoodDetail = () => import('@/pages/shop/detail/FoodDetail');
const Food = () => import('@/pages/food/Food');
const Explore = () => import('@/pages/explore/Explore');
const Order = () => import('@/pages/order/Order');
const OrderDetail = () => import('@/pages/order/OrderDetail');
const ConfirmOrder = () => import('@/pages/confirmOrder/ConfirmOrder');
const ChooseAddress = () => import('@/pages/confirmOrder/sub/ChooseAddress');
const Invoice = () => import('@/pages/confirmOrder/sub/Invoice');
const Payment = () => import('@/pages/confirmOrder/sub/Payment');
const Remark = () => import('@/pages/confirmOrder/sub/Remark');
const UserValidation = () => import('@/pages/confirmOrder/sub/UserValidation');
const AddOrderAddress = () => import('@/pages/confirmOrder/sub/address/AddAddress');
const SearchOrderAddress = () => import('@/pages/confirmOrder/sub/address/SearchAddress');
const Download = () => import('@/pages/profile/Download');

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
        path: 'shopDetail',
        component: ShopDetail,
        children: [
          {
            path: 'shopSafe',
            component: ShopSafe,
          },
        ],
      }, {
        path: 'shopDetail',
        component: ShopDetail,
      }, {
        path: 'foodDetail',
        component: FoodDetail,
      },
    ],
  }, {
    path: '/food',
    name: 'food',
    component: Food,
  }, {
    path: '/explore',
    name: 'explore',
    component: Explore,
  }, {
    path: '/order',
    name: 'order',
    component: Order,
    children: [
      {
        path: 'orderDetail',
        component: OrderDetail,
      },
    ],
  }, {
    path: '/confirmOrder',
    name: 'confirmOrder',
    component: ConfirmOrder,
    children: [
      {
        path: 'chooseAddress',
        component: ChooseAddress,
        children: [
          {
            path: 'addAddress',
            component: AddOrderAddress,
            children: [
              {
                path: 'searchAddress',
                component: SearchOrderAddress,
              },
            ],
          },
        ],
      }, {
        path: 'invoice',
        component: Invoice,
      }, {
        path: 'payment',
        component: Payment,
      }, {
        path: 'remark',
        component: Remark,
      }, {
        path: 'userValidation',
        component: UserValidation,
      },
    ],
  }, {
    path: '/download',
    name: 'download',
    component: Download,
  },
];
