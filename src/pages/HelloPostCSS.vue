<template>
  <div class="postcss">
    <div style="text-align: center;"><router-link to="/">返回</router-link></div>
    <h2>Hello PostCSS</h2>
    <div><a href="javascript:void(0);" @click="getData">测试axios</a></div>
    <h3>结果：</h3>
    <div>{{response}}</div>
    <div><a href="javascript:void(0);" @click="getData2">测试fetch2</a></div>
    <h3>结果：</h3>
    <div>{{response2}}</div>
    <div><a href="javascript:void(0);" @click="getPromise">测试Promise</a></div>
    <h3>结果：</h3>
    <div>{{response3}}</div>
  </div>
</template>

<script>
import axios from 'axios';
import fetch, { fetch2 } from '@/utils/axiosFetch';

import {
  baseUrl,
} from '../config/env';

export default {
  name: 'hello-postcss',
  data() {
    return {
      response: '',
      response2: '',
      response3: '',
    };
  },
  methods: {
    getData() {
      this.response = '';
      // axios实现
      const vm = this;
      axios.get(`${baseUrl}/v1/cities`, {
        params: {
          type: 'hot',
        },
      })
      .then((response) => {
        vm.response = response.data;
      });
    },
    getData2() {
      this.response2 = '';
      const vm = this;
      fetch2('/v1/cities', {
        type: 'hot',
      },
      'GET',
      (response) => {
        vm.response2 = response.data;
      },
      (error) => {
        vm.response2 = error;
      });
    },
    getPromise() {
      this.response3 = '';
      fetch('/v1/cities', {
        type: 'hot',
      })
      .then((response) => {
        // Promise中可以使用this
        this.response3 = response.data;
      })
      .catch((error) => {
        this.response3 = error;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
<style lang="postcss">
.postcss {
  width: 80%;
  margin: 10px auto;
}
a {
  &:hover {
    color: red;
    text-decoration: underline;
  }
}
</style>

