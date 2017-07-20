const Home = () => import(/* webpackChunkName: "home" */ '@/pages/home/Home');
const City = () => import(/* webpackChunkName: "city" */ '@/pages/city/City');
const Login = () => import(/* webpackChunkName: "login" */ '@/pages/login/Login');
const Forgot = () => import(/* webpackChunkName: "login" */ '@/pages/login/Forgot');
const msite = () => import(/* webpackChunkName: "msite" */ '@/pages/msite/msite');
const Search = () => import(/* webpackChunkName: "search" */ '@/pages/search/Search');
const Profile = () => import(/* webpackChunkName: "profile" */ '@/pages/profile/Profile');
const ProfileInfo = () => import(/* webpackChunkName: "profile" */ '@/pages/profile/info/Info');
const ChangeUserName = () => import(/* webpackChunkName: "profile" */ '@/pages/profile/info/ChangeUserName');
const Address = () => import(/* webpackChunkName: "profile-address" */ '@/pages/profile/address/Address');
const AddAddress = () => import(/* webpackChunkName: "profile-address" */ '@/pages/profile/address/AddAddress');
const AddDetail = () => import(/* webpackChunkName: "profile-address" */ '@/pages/profile/address/AddDetail');
const Service = () => import(/* webpackChunkName: "service" */ '@/pages/service/Service');
const Question = () => import(/* webpackChunkName: "service" */ '@/pages/service/question/Question');
const Points = () => import(/* webpackChunkName: "points" */ '@/pages/points/Points');
const PointDetail = () => import(/* webpackChunkName: "points" */ '@/pages/points/Detail');
const Balance = () => import(/* webpackChunkName: "balance" */ '@/pages/balance/Balance');
const BalanceDetail = () => import(/* webpackChunkName: "balance" */ '@/pages/balance/Detail');
const Benefit = () => import(/* webpackChunkName: "benefit" */ '@/pages/benefit/Benefit');
const Commend = () => import(/* webpackChunkName: "benefit" */ '@/pages/benefit/sub/Commend');
const Coupon = () => import(/* webpackChunkName: "benefit" */ '@/pages/benefit/sub/Coupon');
const Exchange = () => import(/* webpackChunkName: "benefit" */ '@/pages/benefit/sub/Exchange');
const HbDesciption = () => import(/* webpackChunkName: "benefit" */ '@/pages/benefit/sub/HaobaoDescription');
const HbHistory = () => import(/* webpackChunkName: "benefit" */ '@/pages/benefit/sub/HaobaoHistory');
const VipCard = () => import(/* webpackChunkName: "vipcard“ */ '@/pages/vipcard/VipCard');
const VipDescription = () => import(/* webpackChunkName: "vipcard“ */ '@/pages/vipcard/sub/VipDescription');
const UseCart = () => import(/* webpackChunkName: "vipcard“ */ '@/pages/vipcard/sub/UseCart');
const InvoiceRecord = () => import(/* webpackChunkName: "vipcard“ */ '@/pages/vipcard/sub/InvoiceRecord');
const Shop = () => import(/* webpackChunkName: "shop" */ '@/pages/shop/Shop');
const ShopDetail = () => import(/* webpackChunkName: "shop-detail" */ '@/pages/shop/detail/ShopDetail');
const ShopSafe = () => import(/* webpackChunkName: "shop-detail" */ '@/pages/shop/detail/ShopSafe');
const FoodDetail = () => import(/* webpackChunkName: "shop-detail" */ '@/pages/shop/detail/FoodDetail');
const Food = () => import(/* webpackChunkName: "food" */ '@/pages/food/Food');
const Explore = () => import(/* webpackChunkName: "explore */ '@/pages/explore/Explore');
const Order = () => import(/* webpackChunkName: "order" */ '@/pages/order/Order');
const OrderDetail = () => import(/* webpackChunkName: "order" */ '@/pages/order/OrderDetail');
const ConfirmOrder = () => import(/* webpackChunkName: "confirm-order" */ '@/pages/confirmOrder/ConfirmOrder');
const ChooseAddress = () => import(/* webpackChunkName: "confirm-order" */ '@/pages/confirmOrder/sub/ChooseAddress');
const Invoice = () => import(/* webpackChunkName: "confirm-order" */ '@/pages/confirmOrder/sub/Invoice');
const Payment = () => import(/* webpackChunkName: "confirm-order" */ '@/pages/confirmOrder/sub/Payment');
const Remark = () => import(/* webpackChunkName: "confirm-order" */ '@/pages/confirmOrder/sub/Remark');
const UserValidation = () => import(/* webpackChunkName: "confirm-order" */ '@/pages/confirmOrder/sub/UserValidation');
const AddOrderAddress = () => import(/* webpackChunkName: "confirm-order" */ '@/pages/confirmOrder/sub/address/AddAddress');
const SearchOrderAddress = () => import(/* webpackChunkName: "confirm-order" */ '@/pages/confirmOrder/sub/address/SearchAddress');
const Download = () => import(/* webpackChunkName: "profile" */ '@/pages/profile/Download');

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
