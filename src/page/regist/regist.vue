<template>
    <div id="regist">
<div class="weui-cells__title"></div>
    <div class="weui-cells weui-cells_form">
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">账户</label></div>
            <div class="weui-cell__bd weui-cell_primary">
                <input type="tel" class="weui-input" placeholder="手机号码" v-model="num"/>
                </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">密码</label></div>
            <div class="weui-cell__bd weui-cell_primary">
                <input type="password" class="weui-input" placeholder="不少于6位" v-model="pasd"/>
                </div>
        </div>
        <div class="weui-cell" style="width:50%">
            <div class="weui-cell__hd"><label class="weui-label">验证码</label></div>
            <div class="weui-cell__bd weui-cell_primary">
                <input type="number" class="weui-input" v-model="yan" placeholder="123">
                </div>
        </div>
        <div style="width:30%;position:absolute;margin-top:-35px;right:0;background:pink" @click="getYan()">{{yanNum}}</div>
    </div>
    <button class="weui-btn weui_btn weui-btn_primary" @click="regist()">注册</button>
    </div>
</template>
<script>
import $ from "jquery";
//import weui from 'jquery-weui';
import axios from "axios";
import api from "../../../../mock.js";
export default {
  data() {
    return {
      num: "",
      pasd: "",
      yan: "",
      token: "123",
      yanNum: 123
    };
  },
  created() {
    this.getYan();
    //console.log(Math.floor(Math.random()*1000+1));
  },
  methods: {
    getYan() {
      this.yanNum = Math.floor(Math.random() * 1000 + 1);
      console.log(this.yanNum);
    },
    regist() {
      /*if(this.num.length!=11){
            $.toast('手机号码不正确',2000,'warning');
        }*/
      /*if(this.num.length > 0 && this.pasd.length > 0 ){

        }*/
      //console.log(this.num + "," + this.pasd + "," + this.yan);
      if (this.yanNum === parseInt(this.yan)) {
        axios
          .post("http://regist.com", {
            num: "123",
            pasd: "123"
          })
          .then(res => {
            console.log(res);
            alert("注册成功!");
            this.$router.push({ name: "login" });
          });
      } else {
        alert("验证码错误");
        this.getYan();
      }
    }
  }
};
</script>
<style>
#regist {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
