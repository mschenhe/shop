<template>
<div id="header">
<a href="javascript:;" class="weui-btn weui_btn_mini weui-btn_primary" id="login">登录</a>
<router-link to="regist" href="javascript:;" class="weui-btn weui_btn_mini weui-btn_default" id="register" >注册</router-link>
</div>
</template>
<script>
export default{
    data(){
        return{

        }
    },
    methods:{
      regist(){
        
      }
    }
}
</script>
<style>
#header #login {
  display: block;
  position: absolute;
  height: 30px;
  font-size: 14px;
  top: 5px;
  right: 100px;
}
#header #register {
  display: block;
  position: absolute;
  height: 30px;
  font-size: 14px;
  top: -10px;
  right: 20px;
}
</style>