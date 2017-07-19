 <template>
  <div class="download_page">
    <top-header header-title="下载" go-back='true'></top-header>
    <section class="dowload_container">
      <img src='../../assets/images/elmlogo.jpeg' class="logo_img">
      <p>下载饿了么APP</p>
      <div class="determine" @click="download">下载</div>
    </section>
    <alert-tip v-if="showAlert" @closeTip="showAlert = false" :alertText="alertText"></alert-tip>
  </div>
</template>

<script>
import topHeader from '@/components/header/Header';
import alertTip from '@/components/common/AlertTip';

export default {
  data() {
    return {
      system: null,
      showAlert: false,
      alertText: null,
    };
  },
  created() {
    // 判断系统
    const ua = navigator.userAgent;
    const isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1; // android
    const isIOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
    if (isAndroid) {
      this.system = 'Android';
    } else if (isIOS) {
      this.system = 'IOS';
    } else {
      this.system = 'pc';
    }
  },
  mixins: [],
  components: {
    topHeader,
    alertTip,
  },
  props: [],
  methods: {
    download() {
      // 如果是ios用户则提示，否则直接下载
      if (this.system === 'IOS') {
        this.showAlert = true;
        this.alertText = 'IOS用户请前往AppStore下载';
      } else {
        try {
          const elemIF = document.createElement('iframe');
          elemIF.src = 'http://cangdu.org/files/elm.apk';
          elemIF.style.display = 'none';
          document.body.appendChild(elemIF);
        } catch (e) {
          this.showAlert = true;
          this.alertText = '下载失败';
        }
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../style/mixin.css';

.download_page {
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

.dowload_container {
  text-align: center;
  .logo_img {
    border-radius: 1rem;
    margin-top: 1rem;
  }
  p {
    @mixin fsc .8rem, #666;
    margin-bottom: 1rem;
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
}
</style>
