<template>
<div id="listPic">
    <div id="showPic" v-for="(item,index) in picData" :key="index">
    <img :src="item">    
    </div>
</div>
</template>
<script>
import api from "../../../../mock.js";
import axios from "axios";
export default {
  data() {
    return {
      picData: []
    };
  },
  created() {
    axios.get("http://test.com").then(res => {
      console.log(res.data.user);
      //console.log(JSON.stringify(res,null,1));
      this.picData = res.data.user.pic;
      console.log(this.picData);
    });
  },
  methods:{
      showPics(){
          var img = document.getElementById("showPic").getElementsByTagName("img");
          var num = 0;
          var len = img.length;
          setInterval(function(){
              img[num].style.display = "none";
              num=++num==len?0:num;
              img[num].style.display="inline-block";
          },3000);
      }
  }
};
</script>
<style>
#listPic {
  position: absolute;
  left: 20%;
  right:5px;
  top: 30%;
  width: 80%;
  height:120px;
}
#showPic{
    margin-left:-85%;;
}
#listPic img {
position:absolute;
  width: 100%;
  height: 120px;
}
</style>