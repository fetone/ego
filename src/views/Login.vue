<template>
    <div class="login">
      <el-card class="box-card">
        <div class="form">
          <el-form :model="ruleForm" ref="ruleForm" label-width="60px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="user">
              <el-input v-model="ruleForm.user"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password"  v-model="ruleForm.pass" show-password></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm" :disabled="!ruleForm.user || !ruleForm.pass">登录</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
</template>

<script>
import { validateLogin } from '../api'
import { mapActions } from 'vuex'
import { addCookie } from '../tool/tools'

export default {
  name: 'Login',
  data () {
    return {
      ruleForm: {
        user: '',
        pass: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'setToken'
    ]),
    submitForm () {
      validateLogin({
        username: this.ruleForm.user,
        password: this.ruleForm.pass
      })
        .then((data) => {
          this.setToken(data.token)
          addCookie('token', data.token, 5)
          this.$router.push({
            path: '/'
          })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped lang="scss">
.login{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: url("../assets/images/timg.jpg") no-repeat;
  background-size: cover;
  .box-card{
    width: 500px;
    height: 200px;
    margin: 100px auto;
    background: rgba(255,255,255,0.9);
  }
}
</style>
