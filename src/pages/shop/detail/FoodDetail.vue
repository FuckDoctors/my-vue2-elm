 <template>
  <div class="rating_page">
    <top-header :header-title="name" go-back='true'></top-header>
    <section class="header_img">
      <img :src="imgBaseUrl + imagePath" class="food_img">
      <div class="cover"></div>
    </section>
    <p class="description">{{description}}</p>
    <section class="detail_container">
      <section class="detail_left">
        <p>{{name}}</p>
        <div class="rating_sale">
          <span>评分</span>
          <rating-star :rating='rating'></rating-star>
          <span>{{rating.toFixed(1)}}</span>
        </div>
        <p>
          <span>月售 {{monthSales}}单</span>
          <span>售价 ¥{{foods.specfoods[0].price}}</span>
          <span v-if="foods.specfoods.length">起</span>
        </p>
        <p>
          <span>评论数 {{ratingCount}}</span>
          <span>好评率 {{satisfyRate}}%</span>
        </p>
      </section>
      <!-- <shopping-art :shopId='shopId'  :foods='foods' @moveInCart="$emit('moveInCart')"></shopping-art> -->
    </section>
  </div>
</template>

<script>
import topHeader from '@/components/header/Header';
import { getImgPath } from '@/components/common/mixin';
import RatingStar from '@/components/common/RatingStar';
import ShoppingCart from '@/components/common/ShoppingCart';
import { imgBaseUrl } from '@/config/env';

export default {
  data() {
    return {
      imagePath: null,
      description: null,
      monthSales: null,
      name: null,
      rating: null,
      ratingCount: null,
      satisfyRate: null,
      foods: null,
      shopId: null,
      imgBaseUrl,
    };
  },
  created() {
    this.imagePath = this.$route.query.image_path;
    this.description = this.$route.query.description;
    this.monthSales = this.$route.query.month_sales;
    this.name = this.$route.query.name;
    this.rating = this.$route.query.rating;
    this.ratingCount = this.$route.query.rating_count;
    this.satisfyRate = this.$route.query.satisfy_rate;
    this.foods = this.$route.query.foods;
    this.shopId = this.$route.query.shopId;
  },
  mixins: [getImgPath],
  components: {
    topHeader,
    RatingStar,
    ShoppingCart,
  },
  props: [],
  methods: {

  },
};
</script>

<style lang="postcss" scoped>
@import '../../../style/mixin';

.rating_page {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 12;
  padding-top: 1.95rem;
  p,
  span {
    font-family: Helvetica Neue, Tahoma, Arial;
  }
}

.header_img {
  position: relative;
  .food_img {
    width: 100%;
    display: block;
  }
  .cover {
    position: absolute;
    @mixin wh 100%, 100%;
    top: 0;
    left: 0;
  }
}

.description {
  @mixin fsc .6rem, #666;
  margin-top: .5rem;
  line-height: .8rem;
  bottom: .2rem;
  padding: 0 .4rem;
}

.detail_container {
  padding: .5rem;
  @mixin flexj;
  align-items: center;
  .detail_left {
    p:nth-of-type(1) {
      @mixin fsc .7rem, #333;
      margin-bottom: .2rem;
    }
    .rating_sale {
      display: flex;
      align-items: center;
      span:nth-of-type(1) {
        @mixin fsc .6rem, #666;
        margin-right: .2rem;
      }
      span:nth-of-type(2) {
        @mixin fsc .55rem, #f60;
        margin-left: .2rem;
      }
      span:nth-of-type(3) {
        @mixin fsc .6rem, #666;
        margin-left: .4rem;
      }
    }
    p:nth-of-type(2) {
      font-size: 0;
      margin-top: .3rem;
      span:nth-of-type(1) {
        @mixin fsc .6rem, #666;
        margin-right: .4rem;
      }
      span:nth-of-type(2),
      span:nth-of-type(3) {
        @mixin fsc .6rem, #f60;
        margin-right: .2rem;
      }
    }
    p:nth-of-type(3) {
      span {
        @mixin fsc .6rem, #666;
      }
    }
  }
}
</style>
