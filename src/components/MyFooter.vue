<template>
    <mu-bottom-nav>
        <mu-bottom-nav-item title="市场行情" to="/" value="" icon="trending_up"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="资产管理" to="/assets" value="" icon="account_balance_wallet"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="个人中心" to="/userinfo" value="" icon="account_circle"></mu-bottom-nav-item>
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

