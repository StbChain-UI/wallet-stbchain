<template>
  <div class="loginBox" color="grey300">
    <mu-container>
      <mu-form ref="form" :model="validateForm" class="mu-demo-form">
        <mu-form-item label="用户名" help-text="请输入用户名" prop="accountName" :rules="usernameRules" label-float>
          <mu-text-field v-model="validateForm.accountName" prop="accountName"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="密码" prop="password" :rules="passwordRules" label-float>
            <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
        </mu-form-item>
        <mu-form-item>
          <mu-button color="primary" @click="login">登录</mu-button>
          <mu-button>注册</mu-button>
        </mu-form-item>
      </mu-form>
    </mu-container>
  </div>
</template>
<script>
import {Apis} from "bitsharesjs-ws";
import accountLogin from 'bitsharesjs/dist/chain/src/AccountLogin.js'
var {ChainStore} = require("bitsharesjs")
export default {
  name: 'Login',
  data () {
    return {
      msg: '登录页面',
      size: 80,
      connected: false,
      validateForm:{
        accountName:"",
        password:""
      },
      usernameRules: [
        { validate: (val) => !!val, message: '必须填写用户名'},
        { validate: (val) => val.length >= 3, message: '用户名长度大于3'}
      ],
      passwordRules: [
        { validate: (val) => !!val, message: '必须填写密码'},
        { validate: (val) => val.length >= 3 , message: '密码长度大于3'}
      ],
    }
  },
  methods: {
    login(){
      this.$refs.form.validate().then((result) => {
        if(result && this.connected){
          console.log( accountLogin.generateKeys(this.validateForm.accountName, this.validateForm.password) );
        }
      });
    }
  },
  mounted (){
    Apis.instance("wss://bitshares.dacplay.org/ws", true).init_promise.then((res) => {
      console.log(res);
      console.log("connected to:", res[0].network_name);
      ChainStore.subscribe(updateState);
      console.log(ChainStore);
      console.log(accountLogin);
      this.connected = true;
    });

    let dynamicGlobal = null;
    function updateState(object) {
      dynamicGlobal = ChainStore.getObject("2.1.0");
      console.log("ChainStore object update\n", dynamicGlobal ? dynamicGlobal.toJS():dynamicGlobal);
    }
  }
}
</script>
<style lang="less">
  .mu-input{background:rgba(200,200,200,.4);}
</style>