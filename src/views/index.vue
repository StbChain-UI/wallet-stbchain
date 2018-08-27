<template>
  <div>
    <MyHeader></MyHeader>
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
      loading:true
    }
  },
  components: {
    MyHeader,
    MyFooter
  }
}
</script>
