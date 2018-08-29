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
    }, 3000)
  }
}
</script>
