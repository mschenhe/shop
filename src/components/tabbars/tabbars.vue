<template>
<div id="tabbars">
  <a href="javascript:;" class="weui-btn weui_btn weui-btn_primary" style="width:50%;margin-left:0;" @click="joinCar()">加入购物车</a>
  <a href="javascript:;" class="weui-btn weui_btn weui-btn_defalute" style="width:50%;margin-top:-45px;margin-right:0;background:#ff9966">立即结算</a>
  <div id="mask">123</div>
</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    joinCar() {
      //var timer = null;
      setInterval(function() {
        var _y = document.getElementById("mask").offsetTop;
        _y -= 10;
        console.log(_y);
        document.getElementById("mask").clientTop = _y + "px";
        if (_y === -200) {
          console.log("kkk");
          //clearInterval(timer);
        }
      }, 1000);
      //clearInterval(timer);
      //console.log();
    }
  }
};
</script>
<style>
#tabbars {
  position: fixed;
  bottom: 0;
  z-index: 1000;
  width: 100%;
  height: 50px;
  background: rgba(147, 153, 159, 0.4);
}
#mask {
  width: 100%;
  height: 200px;
  position: absolute;
  top: 50px;
  background: rgba(147, 153, 159, 0.4);
}
</style>