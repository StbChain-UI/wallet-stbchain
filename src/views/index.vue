<template>
  <mu-paper :z-depth="1">
    <mu-data-table :columns="columns" :sort.sync="sort" @sort-change="handleSortChange" :data="list">
      <template slot-scope="scope">
        <td>{{scope.row.name}}</td>
        <td class="is-right">{{scope.row.calories}}</td>
        <td class="is-right">{{scope.row.fat}}</td>
        <td class="is-right">{{scope.row.carbs}}</td>
      </template>
    </mu-data-table>
  </mu-paper>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
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
