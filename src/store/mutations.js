import {
  setStore,
  getStore,
} from '@/utils/mUtils';

import {
  RECORD_ADDRESS,
  ADD_CART,
  REDUCE_CART,
  INIT_CART,
  CLEAR_CART,
  RECORD_SHOPDETAIL,
  RECORD_USERINFO,
  GET_USERINFO,
  CONFIRM_REMARK,
  CONFIRM_INVOICE,
  CHOOSE_SEARCH_ADDRESS,
  SAVE_GEOHASH,
  CONFIRM_ADDRESS,
  CHOOSE_ADDRESS,
  NEED_VALIDATION,
  SAVE_CART_ID_SIG,
  SAVE_ORDER_PARAM,
  CHANGE_ORDER_PARAM,
  ORDER_SUCCESS,
  SAVE_SHOP,
  SAVE_ORDER,
  OUT_LOGIN,
  RETSET_NAME,
  SAVE_AVANDER,
  SAVE_ADDRESS,
  SAVE_ADDDETAIL,
  SAVE_QUESTION,
  ADD_ADDRESS,
  SHOPPING_CART,
} from './mutation-types';

export default {
  // 记录当前经度纬度
  [RECORD_ADDRESS](state, { latitude, longitude }) {
    state.latitude = latitude;
    state.longitude = longitude;
  },

  [RECORD_SHOPDETAIL](state, detail) {
    state.shopDetail = detail;
  },
  // 加入购物车
  [ADD_CART](state, {
    shopId,
    categoryId,
    itemId,
    foodId,
    name,
    price,
    specs,
    packingFee,
    skuId,
    stock,
  }) {
    const cart = state.cartList;
    const shop = cart[shopId] || {};
    cart[shopId] = shop;
    const category = shop[categoryId] || {};
    shop[categoryId] = category;
    const item = category[itemId] || {};
    category[itemId] = item;
    if (item[foodId]) {
      item[foodId].num += 1;
    } else {
      item[foodId] = {
        num: 1,
        id: foodId,
        name,
        price,
        specs,
        packingFee,
        skuId,
        stock,
      };
    }
    state.cartList = { ...cart };
    // 存入localStorage
    setStore('shoppingCart', state.cartList);
  },
  // 移出购物车
  [REDUCE_CART](state, {
    shopId,
    categoryId,
    itemId,
    foodId,
  }) {
    const cart = state.cartList;
    const shop = (cart[shopId] || {});
    const category = (shop[categoryId] || {});
    const item = (category[itemId] || {});
    if (item && item[foodId]) {
      if (item[foodId].num > 0) {
        item[foodId].num -= 1;
        state.cartList = { ...cart };
        // 存入localStorage
        setStore('shoppingCart', state.cartList);
      } else {
        // 商品数量为0，则清空当前商品的信息
        item[foodId] = null;
      }
    }
  },
  // 网页初始化时从本地缓存获取购物车数据
  [INIT_CART](state) {
    const initCart = getStore('shoppingCart');
    if (initCart) {
      state.cartList = JSON.parse(initCart);
    }
  },
  // 清空当前商品的购物车信息
  [CLEAR_CART](state, shopId) {
    state.cartList[shopId] = null;
    state.cartList = { ...state.cartList };
    setStore('shoppingCart', state.cartList);
  },
  // 记录用户信息
  [RECORD_USERINFO](state, info) {
    state.userInfo = info;
    state.login = true;
    setStore('user_id', info.user_id);
  },
  // 获取用户信息存入vuex
  [GET_USERINFO](state, info) {
    // TODO:为什么是state.userInfo.username !== info.username？？？
    if (state.userInfo && (state.userInfo.username !== info.username)) {
      return;
    }
    if (!state.login) {
      return;
    }
    if (!info.message) {
      state.userInfo = { ...info };
    } else {
      state.userInfo = null;
    }
  },
  // 修改用户名
  [RETSET_NAME](state, username) {
    state.userInfo = Object.assign({}, state.userInfo, {
      username,
    });
  },
  // 保存商铺id
  [SAVE_SHOP](state, shopId) {
    state.shopId = shopId;
  },
  // 记录订单页面用户选择的备注, 传递给订单确认页面
  [CONFIRM_REMARK](state, {
    remarkText,
    inputText,
  }) {
    state.remarkText = remarkText;
    state.inputText = inputText;
  },
  // 是否开发票
  [CONFIRM_INVOICE](state, invoice) {
    state.invoice = invoice;
  },
  // 选择搜索的地址
  [CHOOSE_SEARCH_ADDRESS](state, place) {
    state.searchAddress = place;
  },
  // 保存geohash
  [SAVE_GEOHASH](state, geohash) {
    state.geohash = geohash;
  },
  // 确认订单页添加新的的地址
  [CONFIRM_ADDRESS](state, newAddress) {
    state.newAddress.push(newAddress);
  },
  // 选择的地址
  [CHOOSE_ADDRESS](state, {
    address,
    index,
  }) {
    state.choosedAddress = address;
    state.addressIndex = index;
  },
  // 保存下单需要验证的返回值
  [NEED_VALIDATION](state, needValidation) {
    state.needValidation = needValidation;
  },
  // 保存下单后购物id 和 sig
  [SAVE_CART_ID_SIG](state, {
    cartId,
    sig,
  }) {
    state.cartId = cartId;
    state.sig = sig;
  },
  // 保存下单参数，用户验证页面调用
  [SAVE_ORDER_PARAM](state, orderParam) {
    state.orderParam = orderParam;
  },
  // 修改下单参数
  [CHANGE_ORDER_PARAM](state, newParam) {
    state.orderParam = Object.assign({}, state.orderParam, newParam);
  },
  // 下单成功，保存订单返回信息
  [ORDER_SUCCESS](state, order) {
    state.cartPrice = null;
    state.orderMessage = order;
  },
  // 进入订单详情页前保存该订单信息
  [SAVE_ORDER](state, orderDetail) {
    state.orderDetail = orderDetail;
  },
  // 退出登录
  [OUT_LOGIN](state) {
    state.userInfo = {};
    state.login = false;
  },
  // 保存图片
  [SAVE_AVANDER](state, imgPath) {
    state.imgPath = imgPath;
  },
  // 删除地址列表
  [SAVE_ADDRESS](state, newAdress) {
    state.removeAddress = newAdress;
  },
  // 添加地址name
  [SAVE_ADDDETAIL](state, addAddress) {
    state.addAddress = addAddress;
  },
  // 保存所选问题标题和详情
  [SAVE_QUESTION](state, question) {
    state.question = { ...question };
  },
  // 增加地址
  [ADD_ADDRESS](state, obj) {
    state.removeAddress = [obj, ...state.removeAddress];
  },
  // 会员卡价格纪录
  [SHOPPING_CART](state, price) {
    state.cartPrice = price;
  },
};
