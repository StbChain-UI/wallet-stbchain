<template>
    <mu-bottom-nav>
        <mu-bottom-nav-item title="市场行情" to="/Market" value="Market" icon="trending_up" color="blue500"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="资产管理" to="/assets" value="assets" icon="account_balance_wallet" color="blue500"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="个人中心" to="/userinfo" value="userinfo" icon="account_circle" color="blue500"></mu-bottom-nav-item>
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

