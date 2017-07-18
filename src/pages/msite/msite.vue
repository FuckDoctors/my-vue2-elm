<template>
  <div>
    <top-header signin-up='msite'>
      <router-link :to="'/search/' + geohash" class="link_search" slot="search">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <circle cx="8" cy="8" r="7" stroke="rgb(255,255,255)" stroke-width="1" fill="none" />
          <line x1="14" y1="14" x2="20" y2="20" style="stroke:rgb(255,255,255);stroke-width:2" />
        </svg>
      </router-link>
      <router-link to="/home" slot="msite-title" class="msite_title">
        <span class="title_text ellipsis">{{msietTitle}}</span>
      </router-link>
    </top-header>
    <nav class="msite_nav">
      <div class="swiper-container" v-if="foodTypes.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide food_types_container" v-for="(item, index) in foodTypes" :key="index">
            <router-link :to="{path: '/food', query: {geohash, title: foodItem.title, restaurant_category_id: getCategoryId(foodItem.link)}}" v-for="foodItem in item" :key="foodItem.id" class="link_to_food">
              <figure>
                <img :src="imgBaseUrl + foodItem.image_url">
                <figcaption>{{foodItem.title}}</figcaption>
              </figure>
            </router-link>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <img src="../../assets/images/fl.svg" class="fl_back animation_opactiy" v-else>
    </nav>
    <div class="shop_list_container">
      <header class="shop_header">
        <svg class="shop_icon">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#shop"></use>
        </svg>
        <span class="shop_header_title">附近商家</span>
      </header>
      <shopping-list v-if="hasGetData" :geohash="geohash"></shopping-list>
    </div>
    <footer-navi></footer-navi>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import topHeader from '@/components/header/Header';
import footerNavi from '@/components/footer/Footer';
import shoppingList from '@/components/common/ShopList';
import { msiteAdress, msiteFoodTypes, guessCity } from '@/service/getData';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

export default {
  components: {
    topHeader,
    shoppingList,
    footerNavi,
  },
  data() {
    return {
      geohash: '', // city页面传递过来的地址geohash
      msietTitle: '请选择地址...', // msiet页面头部标题
      foodTypes: [], // 食品分类列表
      hasGetData: false, // 是否已经获取地理位置数据，成功之后再获取商铺列表信息
      imgBaseUrl: 'https://fuss10.elemecdn.com', // 图片域名地址
    };
  },
  async beforeMount() {
    if (!this.$route.query.geohash) {
      const address = await guessCity();
      this.geohash = `${address.data.latitude},${address.data.longitude}`;
    } else {
      this.geohash = this.$route.query.geohash;
    }
    // 保存geohash 到vuex
    this.SAVE_GEOHASH(this.geohash);
    // 获取位置信息
    const res = await msiteAdress(this.geohash);
    this.msietTitle = res.data.name;
    // 记录当前经度纬度
    this.RECORD_ADDRESS(res.data);

    this.hasGetData = true;
  },
  mounted() {
    // 获取导航食品类型列表
    msiteFoodTypes(this.geohash).then((res) => {
      const resLength = res.data.length;
      const resArr = [...res.data]; // 返回一个新的数组
      const foodArr = [];
      for (let i = 0, j = 0; i < resLength; i += 8, j += 1) {
        foodArr[j] = resArr.splice(0, 8);
      }
      this.foodTypes = foodArr;
    }).then(() => {
      // 初始化swiper
      /* eslint-disable no-new */
      new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        loop: false,
      });
    });
  },
  computed: {

  },
  methods: {
    ...mapMutations([
      'RECORD_ADDRESS',
      'SAVE_GEOHASH',
    ]),
    // 解码url地址，求去restaurant_category_id值
    getCategoryId(url) {
      const urlData = decodeURIComponent(url.split('=')[1].replace('&target_name', ''));
      if (/restaurant_category_id/gi.test(urlData)) {
        return JSON.parse(urlData).restaurant_category_id.id;
      }
      return '';
    },
  },
  watch: {

  },
};
</script>

<style lang="postcss" scoped>
@import '../../style/mixin.css';
.link_search {
  left: .8rem;
  /* @mixin wh .9rem, .9rem; */
  @mixin wh 1rem, 1rem;
  @mixin vcenter;
}

.msite_title {
  @mixin center;
  width: 50%;
  color: #fff;
  text-align: center;
  margin-left: -0.5rem;
  .title_text {
    @mixin fsc 0.8rem, #fff;
    text-align: center;
    display: block;
  }
}

.msite_nav {
  padding-top: 2.1rem;
  background-color: #fff;
  border-bottom: 0.025rem solid $bgc;
  height: 10.6rem;
  .swiper-container {
    @mixin wh 100%, auto;
    padding-bottom: 0.6rem;
    .swiper-pagination {
      bottom: 0.2rem;
    }
  }
  .fl_back {
    @mixin wh 100%, 100%;
  }
}

.food_types_container {
  display: flex;
  flex-wrap: wrap;
  .link_to_food {
    width: 25%;
    padding: 0.3rem 0rem;
    @mixin flexj center;
    figure {
      img {
        margin-bottom: 0.3rem;
        @mixin wh 1.8rem, 1.8rem;
      }
      figcaption {
        text-align: center;
        @mixin fsc 0.55rem, #666;
      }
    }
  }
}

.shop_list_container {
  margin-top: .4rem;
  border-top: 0.025rem solid $bgc;
  background-color: #fff;
  .shop_header {
    .shop_icon {
      fill: #999;
      margin-left: 0.6rem;
      vertical-align: middle;
      @mixin wh 0.6rem, 0.6rem;
    }
    .shop_header_title {
      color: #999;
      @mixin fslh 0.55rem, 1.6rem;
    }
  }
}
</style>
