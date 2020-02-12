<template>
  <div id="app">
  <!--顶部导航区域-->
    <mt-header title="首页">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  <!--路由组件的出口-->
  <keep-alive>
  <router-view/>
  </keep-alive>

  <!--底部导航栏-->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/home.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="cart">
        <img slot="icon" src="./assets/star.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img slot="icon" src="./assets/mine.png">
        我的
      </mt-tab-item>
      
    </mt-tabbar>

   </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      selected:''
    }
  },
  watch:{
    selected:function(newV,oldV){
      console.log(newV,oldV)
      this.$router.push({name:this.selected})
    }
  }
}
</script>

<style>
*{
  padding:0;
  margin:0;
  overflow:hidden;
}
</style>
