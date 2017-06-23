<template>
  <div class="land">
        <el-input @keyup.native="pswhide" v-model="eml" placeholder="用户名或电子邮箱"  auto-complete="off"></el-input>
        <div class="emlTxt">{{emlTxt}}</div>
        <el-input v-model="password" v-show="pswShow" type="password"  placeholder="密码" class="psw" auto-complete="off"></el-input>
        <div class="pswTxt">{{pswTxt}}</div>
          <el-checkbox>30 天内记住我</el-checkbox>
        <el-button v-show="showLand" @click="Continue" class="but" type="primary">继续</el-button>
        <el-button v-show="!showLand" @click="land" class="but" type="primary">登陆</el-button>
        <div class="text">忘记密码？</div>
        <div class="tog">切换到Evernote International</div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        pswShow: false,
        eml: '',
        password: '',
        showLand: true,
        emlTxt: '',
        pswTxt: ''
      }
    },
    methods: {
      Continue() {
        const that = this
        if (this.eml === '') {
          return false
        }
        this.$ajax.get('/api/name', {
          params: {
            name: this.eml
          }
        }).then(function(response) {
          let data = response.data.data
          if (data) {
            that.pswShow = true
            that.showLand = false
            that.emlTxt = ''
          } else {
            that.emlTxt = '用户名或邮箱不存在。'
          }
          // console.log(response.data.data)
        })
        .catch(function(err) {
          console.log(err)
        })
      },
      land() {
        const that = this
        this.$ajax.get('/api/land', {
          params: {
            name: this.eml,
            password: this.password
          }
        }).then(function(response) {
          let data = response.data.data
          if (data) {
            that.pswTxt = ''
            alert('登陆成功')
          } else {
            that.pswTxt = '密码不正确'
            // console.log(response.data.data)
          }
        })
        .catch(function(err) {
          console.log(err)
        })
      },
      pswhide() {
        if (this.eml === '') {
          this.showLand = true
          this.pswShow = false
          this.password = ''
          this.pswTxt = ''
        }
      }
    }
  }
</script>

<style>
.land {
  margin: 32px;
}
.land input {
  border-radius: 7px;
}
.land input:focus {
  box-shadow: 0 0 1px 2px #7aa7cf;
  border: none;
}
.land .el-input__inner {
  font-size: 16px;
  height: 40px;
  border: 1px solid #cacaca;
}
.land .el-checkbox {
  margin-top: 30px;
  margin-bottom: 18px;
}
.land .psw {
    margin-top: 15px;
}
.land .el-button+ .el-button {
  margin-left: 0;
}
.land .el-checkbox__input {
  margin-top: -10px;
}
.land .el-checkbox__input,.is-checked {
  width: 13px;
  height: 13px;
}
.land .el-checkbox__inner::after {
  box-sizing: content-box;
    content: "";
    border: 2px solid #424242;
    border-left: 0;
    border-top: 0;
    height: 7px;
    position: absolute;
    top: -1px;
    left: 3px;
}
.land .el-checkbox .el-checkbox__inner {
  width: 13px;
  height: 13px;
  border-color: #666;
  background-color: #DEDEDE;
}
.land .el-checkbox__inner:hover {
   border-color: #666;
}
.land .el-checkbox__input.is-checked .el-checkbox__inner {
  width: 13px;
  height: 13px;
  background-color: #DEDEDE;
  border-color: #666;
}
.land .checkbox-container label{
  color: #3b3b3b;
}
.land .but {
  width: 100%;
  height: 46px;
  background-color: #2DBE60;
  color: #fff;
  font-size: 16px;
  margin-bottom: 20px;
  border: none;
}
.land .text{
  color: #2DBE64;
  text-align: center;
  font-size: 12px;
  margin-bottom: 15px;
}
.land .tog {
  padding-left: 20px;
  font-size: 12px;
  color: #71BBED;
}
.land .emlTxt, .land .pswTxt {
  font-size: 13px;
  color: #B92258;
  background-color: #FFD1D1;
  line-height: 25px;
  padding-left: 15px;
}

</style>
