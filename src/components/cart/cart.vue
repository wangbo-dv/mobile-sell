<template>
<div id="body">
    <div class="cart_div">
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <img v-lazy="item">
            </li>
        </ul>
    </div>
    </div>
</template>

<script>
export default{
    name:'cart',
    data(){
        return{
            list:['http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg','http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg',
            'http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg','http://fuss10.elemecdn.com/b/df/b630636b444346e38cef6c59f6457jpeg.jpeg']
        }
    }
}
</script>
<style >
.cart_div{
    position: absolute;
    overflow: auto;
    height: 100%
}
</style>