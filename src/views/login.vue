<template>
    <div>
      <mu-container class="loginBox">
        <mu-form :model="UserInfo" class="mu-demo-form">
          <mu-form-item label="用户名" prop="username" fullWidth labelFloat>
            <mu-text-field v-model="UserInfo.username" prop="username"></mu-text-field>
          </mu-form-item>
          <mu-form-item label="密码" prop="password" fullWidth labelFloat>
            <mu-text-field type="password" v-model="UserInfo.password" prop="password"></mu-text-field>
          </mu-form-item>
          <mu-form-item class="btnBox">
            <mu-button color="primary" @click="login">登录</mu-button>
            <mu-button color="primary" >注册</mu-button>
          </mu-form-item>
        </mu-form>
      </mu-container>
    </div>
</template>
<script>
import accountLogin from "bitsharesjs/es/chain/src/AccountLogin.js";
export default {
  name: 'Login',
  data () {
    return {
      msg: '登录页面',
      size: 80,
      UserInfo:{
        username:"",
        password:""
      }
    }
  },
  methods: {
    login(){
      console.log(accountLogin);
      console.log(accountLogin.setRoles("active"));
      accountLogin.addSubscription(()=>{ console.log(111) });
      let info = accountLogin.generateKeys(this.UserInfo.username,this.UserInfo.password,"active",null);
      console.log(info);
    }
  }
}
</script>
