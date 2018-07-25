<template>
  <div class="login-wrap">
      <div class="ms-title">后台管理项目</div>
      <div class="ms-login">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
            <el-form-item prop="username">
              <el-input placeholder="username" v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input placeholder="password" v-model="ruleForm.password"></el-input>
            </el-form-item>
            <div class="login-btn">
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </div>
          </el-form>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      ruleForm:{
        username:"admin",
        password:"admin"
      },
      rules:{
        // 规则验证
        username:[
          {required:true,message:"请输入用户名",trigger:'blur'}
        ],
        password:[
          {required:true,message:"请输入密码",trigger:'blur'}
        ]
      }
    }
  },
  methods:{
    // 登录
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          localStorage.setItem('ms_username',this.ruleForm.username,this.ruleForm.password)
          console.log(this.ruleForm.username,"+++",this.ruleForm.password)

          this.$router.push('/dashboard')
          this.$notify({
            title:"成功",
            message:"登录成功",
            type:'success',
            duration:1000
          })
        } else {
          this.$notify.error({
            title:"失败",
            message:"请出入对应的信息",
            duration:1000
          })
          return false
        }
      })
    },
  // 重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 1000px;
}
.login-wrap  {
  background: #324157;
}
.ms-title{
  position: absolute;
  top: 40%;
  width: 100%;
  margin-top: -230px;
  text-align: center;
  font-size: 30px;
  color: white;
}
.ms-login{
  position: absolute;
  left: 50%;
  top: 40%;
  width: 300px;
  height: 160px;
  margin: -150px 0 0 -190px;
  padding: 40px;
  border-radius: 5px;
  background: #ffffff;
}
.login-btn{
  text-align: center;
}
.login-btn button {
  display: inline-block;
  width:100px;
  height: 36px;
}
</style>
