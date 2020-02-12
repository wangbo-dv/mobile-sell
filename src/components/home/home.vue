<template>
    <div id="msg">
       <mt-swipe :auto="4000" style="height:200px;width:100%;background-color:red">
            <mt-swipe-item v-for='(img,index) in imgs' :key="index">
            <img :src="img" id="banner-img">
            </mt-swipe-item>
        </mt-swipe>
        <div class="body_list">
            <span v-for="data in dataList" :key="data.id">
                <h1>{{data.title}}</h1>
                <p>{{data.body}}</p>
            </span>
        </div>
        <mt-button type="primary" style="width:100%" @click="handleClick">确定</mt-button>
    </div>
</template>

<script>
    export default{
        name:"home",
        data(){
            return{
                msg:'i am home ', 
                dataList:{},
                imgs:["http://img5.imgtn.bdimg.com/it/u=1554183501,2457714092&fm=26&gp=0.jpg","http://img2.imgtn.bdimg.com/it/u=3180466184,4036046158&fm=26&gp=0.jpg","http://img4.imgtn.bdimg.com/it/u=4047717572,2067067998&fm=26&gp=0.jpg","http://img2.imgtn.bdimg.com/it/u=3041974687,1312568471&fm=26&gp=0.jpg"]
            }
        },
        created(){
            this.$axios.get("posts").
            then(res=>{
                console.log(res.data);
                this.dataList=res.data
            }).
            catch(error=>{

            })
        },
        methods:{
            handleClick(){
                this.$toast('使用mintui插件')
            }
        }
    }
</script>
<style>
#banner-img{
    width:100%;height:200px;
}
.body_list{
    position: absolute;
    overflow: auto;
    height: 100%
}
</style>