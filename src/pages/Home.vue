<template>
  <div>
    <top-header signin-up='home'>
      <span slot='logo' class="head_logo" @click="reload">ele.me</span>
    </top-header>
    <nav class="city_nav">
      <div class="city_tip">
        <span>当前定位城市：</span>
        <span>定位不准时，请在城市列表中选择</span>
      </div>
      <router-link :to="'/city/' + guessCityid" class="guess_city">
        <span>{{guessCity}}</span>
        <svg class="arrow_right">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
        </svg>
      </router-link>
    </nav>
    <section id="hot_city_container">
      <h4 class="city_title">热门城市</h4>
      <ul class="citylistul clear">
        <router-link tag="li" v-for="item in hotCities" :to="'/city/' + item.id" :key="item.id">
          {{item.name}}
        </router-link>
      </ul>
    </section>
    <section class="group_city_container">
      <ul class="letter_classify">
        <li v-for="(value, key, index) in sortgroupCities" :key="key" class="letter_classify_li">
          <h4 class="city_title">{{key}}
            <span v-if="index == 0">（按字母排序）</span>
          </h4>
          <ul class="groupCities_name_container citylistul clear">
            <router-link tag="li" v-for="item in value" :to="'/city/' + item.id" :key="item.id" class="ellipsis">
              {{item.name}}

            </router-link>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import topHeader from '@/components/header/Header';
import { guessCity, hotCities, groupCities } from '@/service/getData';

export default {
  data() {
    return {
      guessCity: '',      // 当前城市
      guessCityid: '',    // 当前城市id
      hotCities: [],      // 热门城市列表
      groupCities: {},    // 所有城市列表
    };
  },

  mounted() {
    // 获取当前城市
    guessCity().then((res) => {
      this.guessCity = res.name;
      this.guessCityid = res.id;
    });

    // 获取热门城市
    hotCities().then((res) => {
      this.hotCities = res;
    });

    // 获取所有城市
    groupCities().then((res) => {
      this.groupCities = res;
    });
  },

  components: {
    topHeader,
  },

  computed: {
    // 将获取的数据按照A-Z字母开头排序
    sortgroupCities() {
      const sortobj = {};
      for (let i = 65; i <= 90; i += 1) {
        if (this.groupCities[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = this.groupCities[String.fromCharCode(i)];
        }
      }
      return sortobj;
    },
  },

  methods: {
    // 点击图标刷新页面
    reload() {
      window.location.reload();
    },
  },
};
</script>

<style lang="postcss" scoped>
/* 使用@import '@/style/mixin.css';错误，style里的@import不能使用@. */
@import '../style/mixin.css';

.head_logo {
  left: 0.4rem;
  font-weight: 400;
  font-size: 0.7rem;
  color: #fff;
  @mixin wh 2.3rem, 0.7rem;
  @mixin hcenter;
}

.city_nav {
  padding-top: 2.35rem;
  border-top: 1px solid $bgc;
  background-color: #fff;
  margin-bottom: 0.4rem;
  .city_tip {
    @mixin flexj;
    line-height: 1.45rem;
    padding: 0 0.45rem;
    span:nth-of-type(1) {
      @mixin fsColor 0.55rem, #666;
    }
    span:nth-of-type(2) {
      font-weight: 900;
      @mixin fsColor 0.475rem, #9f9f9f;
    }
  }
  .guess_city {
    @mixin flexj;
    align-items: center;
    height: 1.8rem;
    padding: 0 0.45rem;
    border-top: 1px solid $bgc;
    border-bottom: 2px solid $bgc;
    @mixin fslh 0.75rem, 1.8rem;
    span:nth-of-type(1) {
      color: $blue;
    }
    .arrow_right {
      @mixin wh .6rem, .6rem;
      fill: #999;
    }
  }
}

#hot_city_container {
  background-color: #fff;
  margin-bottom: 0.4rem;
}

.citylistul {
  li {
    float: left;
    text-align: center;
    color: $blue;
    border-bottom: 0.025rem solid $bgc;
    border-right: 0.025rem solid $bgc;
    @mixin wh 25%, 1.75rem;
    @mixin fslh 0.6rem, 1.75rem;
  }
  li:nth-of-type(4n) {
    border-right: none;
  }
}

.city_title {
  color: #666;
  font-weight: 400;
  text-indent: 0.45rem;
  border-top: 2px solid $bgc;
  border-bottom: 1px solid $bgc;
  @mixin fslh 0.55rem, 1.45rem, 'Helvetica Neue';
  span {
    @mixin fsColor 0.475rem, #999;
  }
}

.letter_classify_li {
  margin-bottom: 0.4rem;
  background-color: #fff;
  border-bottom: 1px solid $bgc;
  .groupCities_name_container {
    li {
      color: #666;
    }
  }
}
</style>
