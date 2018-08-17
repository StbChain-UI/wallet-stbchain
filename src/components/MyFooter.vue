<template>
    <mu-bottom-nav>
        <mu-bottom-nav-item title="Recents" icon="restore"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="Favorites" icon="favorite"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="Nearby" icon="location_on"></mu-bottom-nav-item>
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
