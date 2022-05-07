<template>
<!-- 使用动态属性、使用驼峰式写法 -->
    <div>
        <p :class="{ black: isBlack, yellow: isYellow }">使用Class</p>
        <p :class="[black, yellow]">使用class （数组）</p>
        <p :class="styleData">使用style</p>
    </div>    
</template>
<script>
export default {
    data(){
        return{
            isBlack: true,
            isYellow: true,

            black: 'black',
            yellow: 'yellow',

            styleData:{
                fontSize: '40px',// 转换为驼峰式
                color: 'red',
                backgroundColor: '#ccc',// 转换为驼峰
            }
        }
    }
}
</script>
<style scoped>
    .black{
        background-color: #999;
    }
    .yellow{
        color: yellow;
    }
</style>