<template>
<!-- 
    watch如何深度监听？ 
    watch监听引用类型，拿不到oldVal
 -->
    <div>
        <input v-model="name"/>
        <input v-model="info.city"/>   
    </div> 
</template>
<script>
export default {
    data(){
        return{
            name: '双越',
            info: {
                city: '北京'
            }
        }
    },
    watch: {
        name(oldVal, val){
            console.log('watch name',oldVal, val);// 值类型，可以正常拿到val和oldVal
        },
        info: {
            handler(oldVal, val){
                console.log( 'watch info ', oldVal, val );
                // 引用类型，拿不到oldval，因为指针相同，此时已经指向了新的val
            },
            deep: true// 深度监听
        }
    }
    
}
</script>
<style scoped>

</style>