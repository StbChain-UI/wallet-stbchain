<template>
    <mu-bottom-nav>
        <mu-bottom-nav-item title="市场行情" to="/Market" value="Market" icon="trending_up"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="资产管理" to="/assets" value="assets" icon="account_balance_wallet"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="个人中心" to="/userinfo" value="userinfo" icon="account_circle"></mu-bottom-nav-item>
    </mu-bottom-nav>
</template>
<script>
export default {
  name: 'MyFooter',
  data () {
    return {
      msg: '页脚'
    }
  }
}
</script>
<style lang="less">
.mu-bottom-nav{
  .mu-bottom-item-active,.router-link-active{color:#f8b62b;}
}
</style>

