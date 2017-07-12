/**
 * 配置编译环境和线上环境之间的切换
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 */

const baseUrl = 'http://cangdu.org:8001';
// vue-router 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。
// 如果不想要很丑的 hash，我们可以用路由的 history 模式，这种模式充分利用 history.pushState API 来完成 URL 跳转而无须重新加载页面。
// https://router.vuejs.org/zh-cn/essentials/history-mode.html
// const routerMode = 'history'; // 使用history，打包后页面显示不出来。因为history模式需要配合server端才行。
const routerMode = 'hash';
const imgBaseUrl = 'http://images.cangdu.org/';

if (process.env.NODE_ENV === 'development') {
  // baseUrl = 'http://cangdu.org:8001';
} else if (process.env.NODE_ENV === 'production') {
  // baseUrl = 'http://cangdu.org:8001';
}

export {
  baseUrl,
  routerMode,
  imgBaseUrl,
};
