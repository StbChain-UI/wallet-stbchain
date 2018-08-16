<template>
    <div>
        <mu-appbar style="width: 100%;" color="primary">
            <mu-button icon slot="left">
                <mu-icon value="menu"></mu-icon>
            </mu-button>
            <mu-flex class="flex-demo" justify-content="center" fill>{{ msg }}</mu-flex>
            <mu-menu slot="right">
                <mu-button flat> MENU </mu-button>
                <mu-list slot="content">
                    <mu-list-item button>
                        <mu-list-item-content>
                            <mu-list-item-title>注册</mu-list-item-title>
                        </mu-list-item-content>
                    </mu-list-item>
                    <mu-list-item button>
                        <mu-list-item-content>
                            <mu-list-item-title>登录</mu-list-item-title>
                        </mu-list-item-content>
                    </mu-list-item>
                </mu-list>
            </mu-menu>
        </mu-appbar>
    </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'STB-Wallet'
    }
  }
}
</script>
