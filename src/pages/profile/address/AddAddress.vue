 <template>
  <div class="rating_page">
    <top-header header-title="新增地址" go-back='true'></top-header>
    <section class="adddetail">
      <form action="" v-on:submit.prevent>
        <section class="ui-padding-block">
          <div class="input-new">
            <input type="text" placeholder="请填写你的姓名" :class="{verifies:verify}" v-model="message" @input="inputUsername">
            <p v-if="verify">请填写您的姓名</p>
          </div>
          <router-link to='/profile/info/address/add/addDetail' class="add-detail">
            <div class="input-new">
              <input type="text" placeholder="小区/写字楼/学校等" readonly="readonly" v-model="addAddress" />
            </div>
          </router-link>
          <div class="input-new">
            <input type="text" placeholder="请填写详细送餐地址" :class="{verifies:verifythree}" @input="inputAddress" v-model="mesthree" />
            <p v-if="verifythree">{{sendaddress}}</p>
          </div>
          <div class="input-new">
            <input type="text" placeholder="请填写能够联系到您的手机号" :class="{verifies:verifyfour}" v-model="telenum" @input="inputTel" />
            <p v-if="verifyfour">{{telephone}}</p>
          </div>
          <div class="input-new">
            <input type="text" placeholder="备用联系电话（选填）" v-model="standbytelenum" @input="inputTel2" />
            <p v-if="verifyfive">{{standbytele}}</p>
          </div>
        </section>
        <section class="addbutton">
          <button :class="{butopacity:butpart}" @click.prevent="submitThing">新增地址</button>
        </section>
      </form>
    </section>
    <transition name="router-slid" mode="out-in">
      <router-view></router-view>
    </transition>
    <alert-tip v-if="showAlert" @closeTip="showAlert = false" :alertText="alertText"></alert-tip>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import topHeader from '@/components/header/Header';
import { getImgPath } from '@/components/common/mixin';
import { postAddAddress } from '@/service/getData';
import alertTip from '@/components/common/AlertTip';

export default {
  data() {
    return {
      verify: false, // 姓名
      verifytwo: false, // 备注
      verifythree: false, // 地址
      verifyfour: false, // 电话
      verifyfive: false, // 备用电话
      butpart: false, // 新增地址按钮的透明度
      sendaddress: '', // 地址
      message: '', // 信息
      mesthree: '', // 送餐地址
      telenum: '', // 手机号
      telephone: '', // 手机号提示
      standbytele: '', // 备用手机号提示
      standbytelenum: '', // 备用手机号
      addSearch: false, // 添加搜索地址
      newAddress: {}, // 增加数组的元素
      showAlert: false, // 弹出框
      alertText: null, // 弹出信息
    };
  },
  created() {

  },
  mixins: [getImgPath],
  components: {
    topHeader,
    alertTip,
  },
  computed: {
    ...mapState([
      'userInfo',
      'addAddress',
      'removeAddress',
      'newAddress',
      'geohash',
    ]),

  },
  props: [],
  methods: {
    ...mapMutations([
      'ADD_ADDRESS',
    ]),
    inputUsername() {
      if (this.message) {
        this.verify = false;
      } else {
        this.verify = true;
      }
      this.bindThing();
    },
    // 输入地址
    inputAddress() {
      this.verifythree = true;
      if (this.mesthree.length === 0) {
        this.sendaddress = '请详细填写送餐地址';
      } else if (this.mesthree.length > 0 && this.mesthree.length <= 2) {
        this.sendaddress = '送餐地址太短了，不能辨识';
      } else {
        this.sendaddress = '';
        this.verifythree = false;
      }
      this.bindThing();
    },
    // 输入手机号
    inputTel() {
      this.verifyfour = true;
      if ((/^[1][358][0-9]{9}$/).test(this.telenum)) {
        this.verifyfour = false;
      } else if (this.telenum === '') {
        this.telephone = '手机号不能为空';
      } else {
        this.telephone = '请输入正确的手机号';
      }
      this.bindThing();
    },
    // 输入备注手机号
    inputTel2() {
      this.verifyfive = true;
      if ((/^[1][358][0-9]{9}$/).test(this.standbytelenum) || this.standbytelenum === '') {
        this.verifyfive = false;
      } else {
        this.standbytele = '请输入正确的手机号';
      }
      this.bindThing();
    },
    bindThing() {
      if (this.message && this.mesthree && !this.verifyfour) {
        this.butpart = true;
      } else {
        this.butpart = false;
      }
    },
    // 保存地址
    async submitThing() {
      const res = await postAddAddress(this.userInfo.user_id, this.mesthree,
                                     this.addAddress, this.geohash, this.message,
                                     this.telenum, this.standbytelenum, 0, 1, '公司', 4);
      if (res.data.message) {
        this.showAlert = true;
        this.alertText = res.data.message;
      } else if (this.butpart) {
        // 保存的地址存入vuex
        this.ADD_ADDRESS({
          name: this.message,
          address: this.mesthree,
          address_detail: this.addAddress,
          geohash: 'wtw37r7cxep4',
          phone: this.telenum,
          phone_bk: this.standbytelenum,
          poi: this.addAddress,
          poi_type: 0,
        });
        this.$router.go(-1);
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../../style/mixin.css';

.router-slid-enter-active,
.router-slid-leave-active {
  transition: all .4s;
}

.router-slid-enter,
.router-slid-leave-active {
  transform: translate3d(2rem, 0, 0);
  opacity: 0;
}

.rating_page {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f2f2f2;
  z-index: 202;
  padding-top: 1.95rem;
  p,
  span {
    font-family: Helvetica Neue, Tahoma, Arial;
  }
}

.adddetail {
  margin-top: .4rem;
}

.ui-padding-block {
  background: #fff;
  padding-top: .4rem;
  .add-detail {
    display: block;
  }
  .input-new {
    padding-bottom: .4rem;
    input {
      display: block;
      width: 15rem;
      font-size: .6rem;
      margin: 0 auto;
      padding: .3rem;
      background: #f2f2f2;
      border: 1px solid #ddd;
      @mixin borderRadius 3px;
    }
    .verifies {
      border-color: #ea3106;
    }
    p {
      @mixin fsc .4rem, #ea3106;
      padding-left: .5rem;
      margin-top: .2rem;
    }
  }
}

.addbutton {
  margin: .6rem auto;
  width: 15rem;
  background: #4cd964;
  @mixin borderRadius 3px;
  button {
    width: 100%;
    @mixin fsc .6rem, #fff;
    line-height: 1.6rem;
    background: none;
    font-weight: 700;
    opacity: .6;
  }
  .butopacity {
    transition: all .4s;
    opacity: 1;
  }
}
</style>
