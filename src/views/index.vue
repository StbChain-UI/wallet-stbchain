<template>
  <div>
    <MyHeader></MyHeader>
    <!-- <mu-alert color="warning" @delete="IsLoginAlert = false" delete v-if="IsLoginAlert" transition="mu-scale-transition">
      <mu-icon left value="warning"></mu-icon>请先登录后操作
    </mu-alert> -->
    <router-view/>
      <keep-alive>
        <div style="position: absolute;width: 100%;bottom: 0;" >
          <MyFooter></MyFooter>
        </div>
    </keep-alive>  
  </div>
</template>
<script>
import MyHeader from '@/components/MyHeader'
import MyFooter from '@/components/MyFooter'
export default {
  name: 'Index',
  data () {
    return {
      msg:'123',
      IsLogin: false,
      IsLoginAlert: true
    }
  },
  components: {
    MyHeader,
    MyFooter
  },
  created(){
      this.IsLoginAlert = !this.IsLogin;
  }
}
</script>
