
<template>
  <div class="create">
        <el-input type="email" v-model="createEml" placeholder="你的邮箱地址"  auto-complete="off"></el-input>
        <div class="emlTxt">{{createEmlTxt}}</div>
        <el-input v-model="createPsw" type="password"  placeholder="设置密码" class="psw" auto-complete="off"></el-input>
        <div class="pswTxt">{{createPswTxt}}</div>
        <div class="text">点击创建帐户，表示同意服务条款和隐私条款</div>
        <el-button @click="create" class="but" type="primary">创建用户</el-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        createEmlTxt: '',
        createPswTxt: '',
        createEml: '',
        createPsw: ''
      }
    },
    methods: {
      create() {
        if (this.createEml === '' || this.createPsw === '') {
          return false
        }
        this.$ajax.get('/api/create', {
          params: {
            name: this.createEml,
            password: this.createPsw
          }
        }).then(function(response) {
          let data = response.data.data
          if (data) {
            alert('创建成功')
          } else {
            // console.log(response.data.data)
          }
        })
        .catch(function(err) {
          console.log(err)
        })
      }
    }
  }
</script>

<style>
.create {
  margin: 32px;
}
.create input {
  border-radius: 7px;
}
.create input:focus {
  box-shadow: 0 0 1px 2px #7aa7cf;
  border: none;
}
.create .psw {
    margin-top: 15px;
}
.create .el-input__inner {
  font-size: 16px;
  height: 40px;
  border: 1px solid #cacaca;
}
.create .text {
  color: #747474;
  line-height: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 12px;
}
.create .but {
  width: 100%;
  height: 46px;
  background-color: #2DBE60;
  color: #fff;
  font-size: 16px;
  border: none;
}
.land .emlTxt, .land .pswTxt {
  font-size: 13px;
  color: #B92258;
  background-color: #FFD1D1;
  line-height: 25px;
  padding-left: 15px;
}
</style>
