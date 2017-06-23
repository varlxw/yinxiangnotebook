<template>
  <div id="app">
    <div class="main">
      <header></header>
      <div class="content">
        <div class="logo-wapper">
          <div class="logo"></div>
          <h1>{{toggleName}}</h1>
        </div>
        <div class="view">
          <router-view></router-view>
        </div>
        <div class="route">
          <div class="txt">{{toggleTxt}}</div>
            <router-link @click.native="toggle" v-show="show" to="/create">创建用户</router-link>
            <router-link @click.native="toggle" v-show="!show" to="/land">登陆</router-link>
        </div>
      </div>
      <footer>服务条款 &nbsp|&nbsp 隐私政策 &nbsp|&nbsp  版权所有2017Evernote Corporation。保留所有权利。</footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      show: true,
      toggleName: '登陆'
    }
  },
  methods: {
    toggle() {
      this.show = !this.show
    }
  },
  computed: {
    toggleTxt() {
      if (this.show) {
        this.toggleName = '登陆'
        return '没有帐号？'
      } else {
        this.toggleName = '创建帐户'
        return '已经拥有帐户？'
      }
    }
  }
}
</script>

<style>
.main {
  background-color: #F3F3F3;
  color: #6a6a6a;
}
.main header {
  border-top: 4px solid #2DBE60;
}
.content .logo-wapper {
  margin-bottom: 26px;
}
.content .logo-wapper .logo {
  width: 68px;
  height: 68px;
  margin: 68px auto 18px;
  background: url(assets/2017-06-21_203027.png);
}
.content .logo-wapper h1 {
  text-align: center;
  font-size: 32px;
  line-height: 36px;
  font-style: normal;
  font-family: caecilia, Times, serif;
}
.content .route {
  height: 87px;
/*  border-top: 1px solid #aaa;
  border-bottom: 1px solid #aaa;*/
    text-align: center;
    margin-bottom: 120px;
}
.content .route .txt {
  color: #999;
  text-align: center;
  font-size: 12px;
  line-height: 13px;
  margin-top: 22px;
  padding-left: 3px;
}
.content .route a{
  display: inline-block;
/*  width: 32px;*/
  height: 18px;
  color: #2DBE60;
  margin-top: 12px;
  line-height: 18px;
  font-size: 16px;
}
.content .view {
  width: 386px;
/*  height: 245px;*/
  background-color: #fff;
  border: 1px solid #dedede;
  margin: 0 auto 28px;
}
.main footer {
  margin: 10px;
  text-align: center;
  line-height: 17px;
  color:#aaa;
  font-size: 11px;
}
</style>
