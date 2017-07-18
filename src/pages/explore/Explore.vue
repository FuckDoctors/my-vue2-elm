 <template>
  <div class="rating_page">
    <top-header header-title="发现" go-back='true'></top-header>
    <section>发现</section>
    <footer-navi></footer-navi>
  </div>
</template>

<script>
import topHeader from '@/components/header/Header';
import { getImgPath } from '@/components/common/mixin';
import footerNavi from '@/components/footer/Footer';

export default {
  data() {
    return {

    };
  },
  created() {

  },
  mixins: [getImgPath],
  components: {
    topHeader,
    footerNavi,
  },
  props: [],
  methods: {

  },
};
</script>

<style lang="postcss" scoped>
@import '../../style/mixin.css';

.rating_page {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 202;
  padding-top: 1.95rem;
  p,
  span {
    font-family: Helvetica Neue, Tahoma, Arial;
  }
}
</style>
