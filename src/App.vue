<template>
    <div id="app">
      <mu-container>
        <MyHeader></MyHeader>
        <router-view/>
        <MyFooter></MyFooter>
      </mu-container>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import MyFooter from '@/components/MyFooter'
export default {
  name: 'App',
  data () {
    return {
      msg: 'STB-Wallet'
    }
  },
  components: {
    MyHeader,
    MyFooter
  }
}
</script>
