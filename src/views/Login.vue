<template>
  <div id = "login">
      <p class = "loginErrMsg"> {{msg}} </p>
      <div>
          <p>エンジニアログイン画面</p>
          <p>ご利用になる場合は、ログインをお願い致します。</p>
      </div>
      <div>
          <span>ログインID</span>
          <input v-model="loginID">
      </div>
      <div>
          <span>パスワード</span>
          <input v-model="loginPW" type="">
      </div>
      <input class = "loginButton" type="button" @click = "login" value="ログイン">
  </div>
</template>

<script>
export default {
    name:"login",
    data(){
        return{
            msg : ''
        }
    },
    methods: {
        login(){
            this.msg = "・ログインID、またはパスワードが正しくありません。"
            alert(this.loginID + this.loginPW);
            this.$router.push('/worktime');
        }
    }
}
</script>

<style scoped>
    .loginButton{
        padding:0px 15px 0px 15px;
        margin-top: 20px;
    }
    span{
        background-color: rgb(255, 200, 130);
    }
    .loginErrMsg{
        color: red;
        text-align:left ;
    }
    #login{
        text-align: center;
    }
</style>