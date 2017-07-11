// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import FastClick from 'fastclick';

import App from './App';
import routes from './router/';
import store from './store/';
import { routerMode } from './config/env';

// To instantiate FastClick on the body, which is the recommended method of use:
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body);
  }, false);
}

Vue.config.productionTip = false;

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: routerMode,
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior(to, from, savedPosition) {
    // 滚动行为
    // https://router.vuejs.org/zh-cn/advanced/scroll-behavior.html
    // 使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。
    if (savedPosition) {
      return savedPosition;
    }

    // else
    if (from.meta.keepAlive) {
      from.meta.savedPosition = document.body.scrollTop;
    }
    return {
      x: 0,
      y: to.meta.savedPosition || 0,
    };
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
