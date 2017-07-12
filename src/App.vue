<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
// import '@/style/common.css'; // 这种解析不了postcss的写法，在style中可以。

export default {
  name: 'app',
};
</script>

<style src="./style/common.css" lang="postcss"></style>
<style lang="postcss">
/*
  postcss-import
  https://github.com/postcss/postcss-import
  can consume `node_modules`, `web_modules` or local modules
  @import "normalize.css";  == @import "../node_modules/normalize.css/normalize.css";
  @import "foo.css";  relative to css/ according to `from` option above
  不管是用@import还是上面的style src=""的形式，common.css里的内容都不起作用，打包后能起作用。
 */
/*  @import './style/common.css'; */

.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity .3s;
}

.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
</style>
