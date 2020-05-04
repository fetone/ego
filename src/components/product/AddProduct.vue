<template>
<div class="add-product">
  <el-button round @click="outerVisible = true">添加商品</el-button>

  <el-dialog title="添加商品" :visible.sync="outerVisible"  center :fullscreen="true">
    <el-dialog
      width="40%"
      title="请选择"
      :visible.sync="innerVisible"
      append-to-body
      center
    >
      <el-tree
        :props="props"
        :load="loadNode"
        lazy
        @node-click="handleNodeClick">
      </el-tree>
    </el-dialog>
    <div slot="footer" class="dialog-footer">
      <div class="form-info">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="选择类目">
            <el-button type="primary" @click="innerVisible = true" class="open-tree">选择</el-button>
            <span class="open-tree">{{productName}}</span>
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
          <el-form-item label="上传图片">
<!--            <el-button type="primary" class="open-tree">上传图片</el-button>-->
            <UploadImg></UploadImg>
          </el-form-item>
          <el-form-item label="商品描述">
            <vue-ueditor-wrap v-model="msg" :config="myConfig"></vue-ueditor-wrap>
          </el-form-item>
        </el-form>
      </div>
      <el-button @click="outerVisible = false">取 消</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script>
import { getCatalog, getCurrentCategory } from '../../api'
import UploadImg from './UploadImg'
export default {
  name: 'AddProduct',
  data () {
    return {
      outerVisible: false,
      innerVisible: false,
      // 表单的双向绑定数据
      form: {
        name: '',
        desc: '',
        price: '',
        num: '',
        barCode: ''
      },
      // ueditor绑定的数据
      msg: '',
      // ueditor的配置
      myConfig: {
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 初始容器高度
        initialFrameHeight: 300,
        // 初始容器宽度
        initialFrameWidth: '100%',
        // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
        serverUrl: 'http://35.201.165.105:8000/controller.php',
        // UEditor 资源文件的存放路径，如果你使用的是 vue-cli 生成的项目，通常不需要设置该选项，vue-ueditor-wrap 会自动处理常见的情况，如果需要特殊配置，参考下方的常见问题2
        UEDITOR_HOME_URL: '/UEditor/'
      },
      // 树形控件属性
      props: {
        label: 'name',
        children: 'zones'
      },
      // 树形控件返回数据
      productName: ''
    }
  },
  methods: {
    // 树形控件数据上传
    loadNode (node, resolve) {
      // 第一级数据
      if (node.level === 0) {
        getCatalog()
          .then((data) => {
            return resolve(data.data.categoryList)
          })
      }
      // 第二级数据
      if (node.level === 1) {
        getCurrentCategory({ id: node.data.id })
          .then((data) => {
            return resolve(data.data.currentCategory.subCategoryList)
          })
      }
      // 之后的
      if (node.level > 1) return resolve([])
    },

    // 类目点击返回点击的对象
    handleNodeClick (data) {
      this.productName = data.name
    }
  },
  components: {
    UploadImg
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
    width: 800px;
    margin: 0 auto;
    .open-tree{
      float: left;
      margin-right: 20px;
    }
  }
}
</style>
