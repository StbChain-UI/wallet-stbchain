<template>
  <mu-paper :z-depth="1">
    <mu-list textline="two-line">
      <mu-list-item avatar :ripple="false" button>
        <mu-list-item-content>
          <mu-list-item-title>
            资产：gdex.STB : bitCNY	
          </mu-list-item-title>
          <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">
            单价：0.06900
          </mu-list-item-sub-title>
          <mu-list-item-sub-title>
            日涨跌：8.48%
          </mu-list-item-sub-title>
        </mu-list-item-content>
        <mu-list-item-action >
          <mu-list-item-after-text>15 min</mu-list-item-after-text>
          <mu-checkbox color="yellow700" v-model="selects" value="value1" uncheck-icon="star_border" checked-icon="star"></mu-checkbox>
        </mu-list-item-action>
    </mu-list-item>
    <mu-divider></mu-divider>
    </mu-list>
  </mu-paper>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      selects: 0,
      sort: {
        name: '',
        order: 'asc'
      },
      columns: [
          { title: '资产', name: 'name', width: 230, align: 'center', sortable: true },
          { title: '单价', name: 'price', width: 230, align: 'center', sortable: true },
          { title: '日涨跌%', name: 'fat', width: 230, align: 'center', sortable: true },
          { title: '成交量', name: 'tranNum', width: 230, align: 'center', sortable: true },
          { title: '隐藏', name: 'hideclo', width: 230, align: 'center', sortable: true },
      ],
    }
  }
}
</script>
