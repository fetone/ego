<template>
<div class="add-product">
  <el-button round @click="outerVisible = true">添加商品</el-button>

  <el-dialog title="添加商品" :visible.sync="outerVisible"  center :fullscreen="true">
    <el-dialog
      width="40%"
      title="内层 Dialog"
      :visible.sync="innerVisible"
      append-to-body>
    </el-dialog>
    <div slot="footer" class="dialog-footer">
      <div class="form-info">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="选择类目">
            <el-button type="primary" @click="innerVisible = true" class="open-tree">打开内层 Dialog</el-button>
          </el-form-item>
          <el-form-item label="商品标题">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="商品卖点">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item label="商品价格">
            <el-input v-model="form.price"></el-input>
          </el-form-item>
          <el-form-item label="库存数量">
            <el-input v-model="form.num"></el-input>
          </el-form-item>
          <el-form-item label="条形码">
            <el-input v-model="form.barCode"></el-input>
          </el-form-item>
          <el-form-item label="选择类目">
            <el-button type="primary" class="open-tree">上传图片</el-button>
          </el-form-item>
          <el-form-item label="商品描述">
          </el-form-item>
        </el-form>
      </div>
      <el-button @click="outerVisible = false">取 消</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      outerVisible: false,
      innerVisible: false,
      form: {
        name: '',
        desc: '',
        price: '',
        num: '',
        barCode: ''
      }
    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
.add-product{
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  .form-info{
    width: 500px;
    margin: 0 auto;
    .open-tree{
      float: left;
    }
  }
}
</style>
