<template>
  <div class="nav">
    <div class="nav-in div-in">
      <div class="logo">EgoShop</div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo nav-menu"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1" @click="selectProduct"><span class="el-icon-search"></span>查询商品</el-menu-item>
        <el-menu-item index="2" @click="selectParams"><span class="el-icon-copy-document"></span>规格参数</el-menu-item>
        <el-menu-item index="3" @click="selectManage"><span class="el-icon-files"></span>内容分类管理</el-menu-item>
      </el-menu>
      <div class="nav-right">
        <span>fetone</span>
        <el-button plain @click="exit">退出</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { delCookie } from '../tool/tools'

export default {
  name: 'Nav',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    ...mapActions([
      'setToken'
    ]),
    selectProduct () {
      this.$router.push({
        path: '/product'
      })
    },
    selectParams () {
      this.$router.push({
        path: '/params'
      })
    },
    selectManage () {
      this.$router.push({
        path: '/manage'
      })
    },
    exit () {
      this.setToken('')
      delCookie('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/css/variable";
.nav{
  width: 100%;
  background: #545c64;
  .nav-in{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    .logo{
      font-size: $font_large;
      font-weight: bolder;
    }
    .nav-menu{
      width: 800px;
      display: flex;
      justify-content: space-between;
      border-bottom: none
    }
    .nav-right{
      span{
        margin-right: 15px;
      }
    }
  }
}
</style>
