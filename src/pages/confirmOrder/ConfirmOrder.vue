 <template>
  <div class="search_address_page">
    <section>
      <top-header header-title="搜索" go-back='true'></top-header>
      <form class="search_form">
        <input type="search" name="search" placeholder="请输入小区/写字楼/学校等" v-model="searchValue">
        <button @click.prevent="searchPlace()">搜索</button>
      </form>
      <ul class="address_list" v-if="searchData">
        <li v-for="(item, index) in searchData" :key="index" @click="choooedAddress(item)">
          <h4>{{item.name}}</h4>
          <p>{{item.address}}</p>
        </li>
      </ul>
      <div v-else class="empty_tips">
        <p>找不到地址？</p>
        <p>尝试输入小区、写字楼或学校名</p>
        <p>详细地址（如门牌号等）可稍后输入哦</p>
      </div>
    </section>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import topHeader from '@/components/header/Header';
import { searchNearby } from '@/service/getData';

export default {
  data() {
    return {
      searchValue: null, // 输入的搜索内容
      searchData: null, // 搜索的结果
    };
  },
  components: {
    topHeader,
  },
  props: [],
  methods: {
    ...mapMutations([
      'CHOOSE_SEARCH_ADDRESS',
    ]),
    // 搜索
    async searchPlace() {
      if (this.searchValue) {
        const res = await searchNearby(this.searchValue);
        this.searchData = res.data;
      }
    },
    // 选择搜素结果
    choooedAddress(item) {
      this.CHOOSE_SEARCH_ADDRESS(item);
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../style/mixin.css';

.search_address_page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 204;
  overflow-y: auto;
  padding-top: 1.95rem;
  p,
  span {
    font-family: Helvetica Neue, Tahoma, Arial;
  }
}

.search_form {
  display: flex;
  padding: .7rem;
  input {
    @mixin fsc .65rem, #999;
    flex: 4;
    background-color: #f1f1f1;
    margin-right: .6rem;
    height: 1.5rem;
    border-radius: 0.15rem;
    padding: 0 .4rem;
  }
  button {
    flex: 1;
    @mixin fsc .65rem, #fff;
    background-color: $blue;
    border-radius: 0.15rem;
  }
}

.address_list {
  padding: .7rem;
  li {
    padding: .7rem 0;
    border-bottom: 0.025rem solid #f5f5f5;
    line-height: 1rem;
    h4 {
      @mixin fsc .75rem, #555;
    }
    p {
      @mixin fsc .65rem, #999;
    }
  }
}

.empty_tips {
  @mixin center;
  width: 100%;
  p {
    @mixin fsc .5rem, #aaa;
    line-height: .7rem;
    text-align: center;
  }
}
</style>
