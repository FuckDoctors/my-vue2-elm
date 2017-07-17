 <template>
  <div class="page">
    <top-header header-title="推荐有奖" go-back='true'></top-header>
    <section class="activity_banner">
      <img src="../../../assets/images/activity.png">
    </section>
    <section class="invite_firend">
      <div class="invite_firend_style">
        <img src="../../../assets/images/weixin.png" @click="fenxiang">
        <p>邀请微信好友</p>
      </div>
      <div class="invite_firend_style">
        <img src="../../../assets/images/qq.png" @click="fenxiang">
        <p>邀请QQ好友</p>
      </div>
      <div class="invite_firend_style">
        <img src="../../../assets/images/fenxiang.png" @click="fenxiang">
        <p>面对面邀请</p>
      </div>
    </section>
    <section class="invite_num">
      <div class="invite_num_style">
        <p>累计收益</p>
        <p>
          <span>0</span>元</p>
      </div>
      <div class="invite_num_style invite_people">
        <p>成功邀请</p>
        <p>
          <span>0</span>人</p>
      </div>
    </section>
    <p class="income_detail">-收益明细-</p>
    <section class="incom_tips">
      <img src="../../../assets/images/qianbao.png">
      <p>还不赶紧去邀请好友</p>
    </section>
    <alert-tip v-if="showAlert" @closeTip="showAlert = false" :alertText="alertText"></alert-tip>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import topHeader from '@/components/header/Header';
import alertTip from '@/components/common/AlertTip';

export default {
  data() {
    return {
      showAlert: false,
      alertText: null,
    };
  },
  mounted() {

  },
  components: {
    topHeader,
    alertTip,
  },
  computed: {
    ...mapState([
      'userInfo',
    ]),
  },
  methods: {
    fenxiang() {
      this.showAlert = true;
      this.alertText = '请在饿了么APP中打开';
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../../style/mixin.css';

.page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  padding-top: 1.95rem;
  z-index: 203;
  background-color: #f5f5f5;
  p,
  span {
    font-family: Helvetica Neue, Tahoma, Arial;
  }
}

.activity_banner {
  img {
    @mixin wh 100%, 10rem;
  }
}

.invite_firend {
  display: flex;
  padding: 1rem 0;
  background-color: #fff;
  .invite_firend_style {
    flex: 1;
    text-align: center;
    img {
      @mixin wh 2.5rem, 2.5rem;
    }
    p {
      @mixin fsc .5rem, #333;
    }
  }
}

.invite_num {
  display: flex;
  margin-top: 1rem;
  @mixin fsc .5rem, #666;
  .invite_num_style {
    flex: 1;
    text-align: center;
    p {
      color: #666;
    }
    span {
      @mixin fsc .8rem, #ff5633;
      font-weight: bold;
    }
  }
  .invite_people {
    border-left: 0.025rem solid #ddd;
    span {
      @mixin fsc .8rem, #666;
      font-weight: bold;
    }
  }
}

.income_detail {
  text-align: center;
  margin-top: 1rem;
  @mixin fsc .5rem, #666;
}

.incom_tips {
  text-align: center;
  margin-top: 1rem;
  img {
    @mixin wh 1.3rem, 1.6rem;
  }
  p {
    @mixin fsc .5rem, #999;
  }
}
</style>
