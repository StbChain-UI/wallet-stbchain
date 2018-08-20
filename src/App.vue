<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'STB-Wallet'
    }
  },
  beforeCreate(){
    const loading = this.$loading({
      overlayColor: 'hsla(0,100%,100%,1)',
      size: 36,
      text: '正在努力加载...',
      color: 'primary',  //'amber500',
      className: ''
    });
    setTimeout(() => {
      loading.close();
      this.$toast.message({
        message:'请先登录后操作',
        time:2000,
        close:true,
        position: 'top-start',
        icon: 'warning',
        color: 'warning',
        textColor: '#000'
      });
    }, 3000)
  }
}
</script>
