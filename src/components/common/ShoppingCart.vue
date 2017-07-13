 <template>
  <section class="cart_module">
    <section v-if="!foods.specifications.length" class="cart_button">
      <transition name="showReduce">
        <span @click="removeOutCart(foods.categoryId, foods.itemId, foods.specfoods[0].foodId, foods.specfoods[0].name, foods.specfoods[0].price, '', foods.specfoods[0].packingFee, foods.specfoods[0].skuId, foods.specfoods[0].stock)" v-if="foodNum">
          <svg>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-minus"></use>
          </svg>
        </span>
      </transition>
      <transition name="fade">
        <span class="cart_num" v-if="foodNum">{{foodNum}}</span>
      </transition>
      <svg class="add_icon" @touchstart="addToCart(foods.categoryId, foods.itemId, foods.specfoods[0].foodId, foods.specfoods[0].name, foods.specfoods[0].price, '', foods.specfoods[0].packingFee, foods.specfoods[0].skuId, foods.specfoods[0].stock, $event)">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-add"></use>
      </svg>
    </section>
    <section v-else class="choose_specification">
      <section class="choose_icon_container">
        <transition name="showReduce">
          <svg class="specs_reduce_icon" v-if="foodNum" @click="showReduceTip">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-minus"></use>
          </svg>
        </transition>
        <transition name="fade">
          <span class="cart_num" v-if="foodNum">{{foodNum}}</span>
        </transition>
        <span class="show_chooselist" @click="showChooseList(foods)">选规格</span>
      </section>
    </section>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      showMoveDot: [], // 控制下落的小圆点显示隐藏
    };
  },
  mounted() {

  },
  computed: {
    ...mapState([
      'cartList',
    ]),
    /**
     * 监听cartList变化，更新当前商铺的购物车信息shopCart，同时返回一个新的对象
     */
    shopCart() {
      return Object.assign({}, this.cartList[this.shopId]);
    },
    // shopCart变化的时候重新计算当前商品的数量
    foodNum() {
      const categoryId = this.foods.categoryId;
      const itemId = this.foods.itemId;
      if (this.shopCart && this.shopCart[categoryId] && this.shopCart[categoryId][itemId]) {
        let num = 0;
        Object.values(this.shopCart[categoryId][itemId]).forEach((item) => {
          num += item.num;
        });
        return num;
      }
      return 0;
    },
  },
  props: ['foods', 'shopId'],
  methods: {
    ...mapMutations([
      'ADD_CART',
      'REDUCE_CART',
    ]),
    // 移出购物车
    removeOutCart(categoryId, itemId, foodId, name, price, specs, packingFee, skuId, stock) {
      if (this.foodNum > 0) {
        this.REDUCE_CART({
          shopId: this.shopId,
          categoryId,
          itemId,
          foodId,
          name,
          price,
          specs,
          packingFee,
          skuId,
          stock,
        });
      }
    },
    // 加入购物车，计算按钮位置。
    addToCart(categoryId, itemId, foodId, name, price, specs, packingFee, skuId, stock, event) {
      this.ADD_CART({
        shopId: this.shopId,
        categoryId,
        itemId,
        foodId,
        name,
        price,
        specs,
        packingFee,
        skuId,
        stock,
      });
      const elLeft = event.target.getBoundingClientRect().left;
      const elBottom = event.target.getBoundingClientRect().bottom;
      this.showMoveDot.push(true);
      this.$emit('showMoveDot', this.showMoveDot, elLeft, elBottom);
    },
    // 显示规格列表
    showChooseList(foodScroll) {
      this.$emit('showChooseList', foodScroll);
    },
    // 点击多规格商品的减按钮，弹出提示
    showReduceTip() {
      this.$emit('showReduceTip');
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../style/mixin.css';
.cart_module {
  .add_icon {
    position: relative;
    z-index: 999;
  }
  .cart_button {
    display: flex;
    align-items: center;
  }
  svg {
    @mixin wh .9rem, .9rem;
    fill: #3190e8;
  }
  .specs_reduce_icon {
    fill: #999;
  }
  .cart_num {
    @mixin fsc .65rem, #666;
    min-width: 1rem;
    text-align: center;
    font-family: Helvetica Neue, Tahoma;
  }
  .choose_specification {
    .choose_icon_container {
      display: flex;
      align-items: center;
      .show_chooselist {
        display: block;
        @mixin fsc .55rem, #fff;
        padding: .1rem .2rem;
        background-color: $blue;
        border-radius: 0.2rem;
        border: 1px solid $blue;
      }
    }
  }
}

.showReduce-enter-active,
.showReduce-leave-active {
  transition: all .3s ease-out;
}

.showReduce-enter,
.showReduce-leave-active {
  opacity: 0;
  transform: translateX(1rem);
}

.fade-enter-active,
.fade-leave-active {
  transition: all .3s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.fadeBounce-enter-active,
.fadeBounce-leave-active {
  transition: all .3s;
}

.fadeBounce-enter,
.fadeBounce-leave-active {
  opacity: 0;
  transform: scale(.7);
}
</style>

