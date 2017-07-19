 <template>
  <div class="rating_page">
    <top-header header-title="选择发票抬头" go-back='true'></top-header>
    <section class="choose_invoice">
      <span>不需要开发票</span>
      <svg @click="chooseInvoice" :class="{choosed: invoice}">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#select"></use>
      </svg>
    </section>
    <div class="determine" @click="confrimInvoice">确定</div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import topHeader from '@/components/header/Header';

export default {
  data() {
    return {
      invoice: false, // 是否需要发票
    };
  },
  components: {
    topHeader,
  },
  props: [],
  methods: {
    ...mapMutations([
      'CONFIRM_INVOICE',
    ]),
    // 是否选择发票
    chooseInvoice() {
      this.invoice = !this.invoice;
    },
    // 保存发票信息
    confrimInvoice() {
      this.CONFIRM_INVOICE(this.invoice);
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../../style/mixin.css';

.rating_page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 204;
  padding-top: 1.95rem;
  p,
  span {
    font-family: Helvetica Neue, Tahoma, Arial;
  }
}

.choose_invoice {
  @mixin flexj;
  align-items: center;
  background-color: #fff;
  line-height: 2.5rem;
  margin-top: 0.5rem;
  padding: 0 .7rem;
  span {
    @mixin fsc .75rem, #333;
  }
  svg {
    @mixin wh .8rem, .8rem;
    fill: #999;
  }
  .choosed {
    fill: #4cd964;
  }
}

.determine {
  background-color: #4cd964;
  @mixin fsc .7rem, #fff;
  text-align: center;
  margin: 0 .7rem;
  line-height: 1.8rem;
  border-radius: 0.2rem;
  margin-top: 0.5rem;
}
</style>
