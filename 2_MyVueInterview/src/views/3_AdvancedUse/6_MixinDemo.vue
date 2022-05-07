<template>
    <div>
        <p>{{name}} {{major}} {{city}}</p>
        <button @click="showName">显示姓名</button>
    </div>
</template>
<script>
import myMixin from './6_mixin'
export default{
    mixins: [myMixin], // 可以添加多个，会自动合并起来
    data(){
        return{
          name:'双越',
          major: 'Web 前端',  
        }
    },
    methods:{

    },
    mounted() {
        console.log('component mounted', this.name);
    }
}
</script>
<style scoped>

</style>