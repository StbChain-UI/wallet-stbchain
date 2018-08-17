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
import Index from '@/views/index'
export default {
  name: 'App',
  data () {
    return {
      msg: 'STB-Wallet'
    }
  },
  components: {
    MyHeader,
    MyFooter,
    Index
  }
}
</script>
