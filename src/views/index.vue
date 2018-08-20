<template>
  <div>
    <MyHeader></MyHeader>
      <router-view/>
      <div style="position: absolute;width: 100%;bottom: 0;" >
        <MyFooter></MyFooter>
      </div>
  </div>
</template>
<script>
import MyHeader from '@/components/MyHeader'
import MyFooter from '@/components/MyFooter'
export default {
  name: 'index',
  data () {
    return {
      msg:'123'
    }
  },
  components: {
    MyHeader,
    MyFooter
  }
}
</script>
