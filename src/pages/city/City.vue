<template>
  <div class="city_container">
    <top-header :header-title="cityName" go-back='true'>
      <router-link to="/home" slot="changeCity" class="change_city">切换城市</router-link>
    </top-header>
    <form class="city_form" v-on:submit.prevent>
      <div>
        <input type="search" name="city" placeholder="输入学校、商务楼、地址" class="city_input input_style" required v-model='inputVaule'>
      </div>
      <div>
        <input type="submit" name="submit" class="city_submit input_style" @click='postPois' value="提交">
      </div>
    </form>
    <header v-if="historyTitle" class="pois_search_history">搜索历史</header>
    <ul class="getpois_ul">
      <li v-for="(item, index) in placeList" @click='nextPage(index, item.geohash)' :key="index">
        <h4 class="pois_name ellipsis">{{item.name}}</h4>
        <p class="pois_address ellipsis">{{item.address}}</p>
      </li>
    </ul>
    <footer v-if="historyTitle && placeList.length" class="clear_all_history" @click="clearAll">清空所有</footer>
    <div class="search_none_place" v-if="placeNone">很抱歉！无搜索结果</div>
  </div>
</template>

<script>
import topHeader from '@/components/header/Header';
import { currentCity, searchPlace } from '@/service/getData';
import { getStore, setStore, removeStore } from '@/utils/mUtils';

export default {
  data() {
    return {
      inputVaule: '', // 搜索地址
      cityId: '', // 当前城市id
      cityName: '', // 当前城市名字
      placeList: [], // 搜索城市列表
      placeHistory: [], // 历史搜索记录
      historyTitle: true, // 默认显示搜索历史头部，点击搜索后隐藏
      placeNone: false, // 搜索无结果，显示提示信息
    };
  },

  mounted() {
    this.cityId = this.$route.params.cityId;
    // 获取当前城市名字
    currentCity(this.cityId).then((res) => {
      this.cityname = res.data.name;
    });
    this.initData();
  },

  components: {
    topHeader,
  },

  computed: {

  },

  methods: {
    initData() {
      // 获取搜索历史记录
      if (getStore('placeHistory')) {
        this.placeList = JSON.parse(getStore('placeHistory'));
      } else {
        this.placeList = [];
      }
    },
    // 发送搜索信息inputVaule
    postPois() {
      // 输入值不为空时才发送信息
      if (this.inputVaule) {
        searchPlace(this.cityId, this.inputVaule).then((res) => {
          this.historyTitle = false;
          this.placeList = res.data;
          this.placeNone = res.data.length > 0;
        });
      }
    },
    /**
     * 点击搜索结果进入下一页面时进行判断是否已经有一样的历史记录
     * 如果没有则新增，如果有则不做重复储存，判断完成后进入下一页
     */
    nextPage(index, geohash) {
      const history = getStore('placeHistory');
      const choosePlace = this.placeList[index];
      if (history) {
        let checkRepeat = false;
        this.placeHistory = JSON.parse(history);
        this.placeHistory.forEach((item) => {
          if (item.geohash === geohash) {
            checkRepeat = true;
          }
        });
        if (!checkRepeat) {
          this.placeHistory.push(choosePlace);
        }
      } else {
        this.placeHistory.push(choosePlace);
      }
      setStore('placeHistory', this.placeHistory);
      this.$router.push({ path: '/msite', query: { geohash } });
    },
    clearAll() {
      removeStore('placeHistory');
      this.initData();
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../style/mixin.css';
.city_container {
  padding-top: 2.35rem;
}

.change_city {
  right: 0.4rem;
  @mixin fsc 0.6rem, #fff;
  @mixin vcenter;
}

.city_form {
  background-color: #fff;
  border-top: 1px solid $bgc;
  border-bottom: 1px solid $bgc;
  padding-top: 0.4rem;
  div {
    width: 90%;
    margin: 0 auto;
    text-align: center;
    .input_style {
      border-radius: 0.1rem;
      margin-bottom: 0.4rem;
      @mixin wh 100%, 1.4rem;
    }
    .city_input {
      border: 1px solid $bgc;
      padding: 0 0.3rem;
      @mixin fsc 0.65rem, #333;
    }
    .city_submit {
      background-color: $blue;
      @mixin fsc 0.65rem, #fff;
    }
  }
}

.pois_search_history {
  border-top: 1px solid $bgc;
  border-bottom: 1px solid $bgc;
  padding-left: 0.5rem;
  @mixin fslh 0.475rem, 0.8rem;
}

.getpois_ul {
  background-color: #fff;
  border-top: 1px solid $bgc;
  li {
    margin: 0 auto;
    padding-top: 0.65rem;
    border-bottom: 1px solid $bgc;
    .pois_name {
      margin: 0 auto 0.35rem;
      width: 90%;
      @mixin fsc 0.65rem, #333;
    }
    .pois_address {
      width: 90%;
      margin: 0 auto 0.55rem;
      @mixin fsc 0.45rem, #999;
    }
  }
}

.search_none_place {
  margin: 0 auto;
  @mixin fslh 0.65rem, 1.75rem;
  color: #333;
  background-color: #fff;
  text-indent: 0.5rem;
}

.clear_all_history {
  @mixin fsc 0.7rem, #666;
  text-align: center;
  line-height: 2rem;
  background-color: #fff;
}
</style>
