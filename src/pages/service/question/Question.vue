 <template>
  <div class="detail_page">
    <top-header :header-title="question.title" go-back='true'></top-header>
    <section id="scroll_section" class="scroll_container">
      <section v-html="markdownText" class="markdown"></section>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import BScroll from 'better-scroll';
import showdown from 'showdown';
import topHeader from '@/components/header/Header';

export default {
  data() {
    return {
    };
  },
  components: {
    topHeader,
  },
  mounted() {
    this.$nextTick(() => {
      /* eslint-disable no-new */
      new BScroll('#scroll_section', {
        deceleration: 0.001,
        bounce: true,
        swipeTime: 1800,
        click: true,
      });
    });
  },
  computed: {
    ...mapState([
      'question',
    ]),
    markdownText() {
      // 转换markDown格式
      const converter = new showdown.Converter();
      return converter.makeHtml(this.question.detail);
    },
  },
  methods: {

  },
};
</script>

<style lang="postcss" scoped>
@import '../../../style/mixin.css';

.detail_page {
  position: fixed;
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

.scroll_container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 1.95rem;
  overflow-y: auto;
}

.markdown {
  font-size: .65rem;
  padding: 0 .7rem;
  color: #666;
  padding-bottom: 2rem;
}
</style>
