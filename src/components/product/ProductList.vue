<template>
  <div class="div-in product-list">
    <el-table
      :data="productData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="id"
        width="120">
      </el-table-column>
      <el-table-column
        prop="list_pic_url"
        label="图片"
        width="400"
        :show-overflow-tooltip='true'>
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        width="300">
      </el-table-column>
      <el-table-column
        prop="retail_price"
        label="价格"
        width="100">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getProductList } from '../../api'

export default {
  name: 'ProductList',
  data () {
    return {
      productData: []
    }
  },
  created () {
    const list = []
    getProductList()
      .then((data) => {
        data.data.categoryList.forEach((item) => {
          item.goodsList.forEach((goods) => {
            list.push(goods)
          })
        })
      })
    this.productData = list
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  }
}
</script>

<style scoped lang="scss">
  .product-list{
    margin-top: 10px;
  }
</style>
