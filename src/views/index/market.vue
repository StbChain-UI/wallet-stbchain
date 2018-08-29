<template>
  <div class="mkt">
    <mu-list textline="two-line">
      <template v-for="item in list">
        <mu-list-item avatar button>
          <mu-list-item-action>
            <mu-avatar size="22">
              <img src="favicon.ico">
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-content>
            <mu-list-item-title>
              <span>资产：</span>
              <span class="item-name">{{ item.name }}</span>
            </mu-list-item-title>
            <mu-list-item-sub-title>
              单价：{{ item.price }} ￥
            </mu-list-item-sub-title>
            <mu-list-item-sub-title>
              日涨跌：<span :class="item.upNum>=0?'y':'n'">{{ item.upNum }}</span>
            </mu-list-item-sub-title>
          </mu-list-item-content>
          <mu-list-item-action >
            <mu-list-item-after-text>
              <mu-badge content='15 min' color=""></mu-badge>
              </mu-list-item-after-text>
            <mu-checkbox color="yellow700" v-model="item.selects" value="value1" uncheck-icon="star_border" checked-icon="star"></mu-checkbox>
          </mu-list-item-action>
        </mu-list-item>
        <!-- <br/><mu-divider></mu-divider> -->
      </template>
    </mu-list>
  </div>
</template>
<script>
export default {
  name: 'market',
  data () {
    return {
      sort: {
        name: '',
        order: 'asc'
      },
      list: [
        { 
          name:"GDEX.STB",
          price:0.06900,
          upNum:"8.48%",
          selects: true
        }, {
          name:"GDEX.BTC",
          price:0.06900,
          upNum:"6.23%",
          selects: false
        }, {
          name:"GDEX.ETH",
          price:0.06900,
          upNum:"10.26%",
          selects: true
        }, {
          name:"GDEX.EOS",
          price:0.06900,
          upNum:"78.48%",
          selects: false
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.mu-item-action{min-width:32px;}
.mkt .mu-item-sub-title{font-weight:300;font-size:0.8rem;}
</style>