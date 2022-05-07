<template>
  <div>
    <button @click="changeState('A')">A</button>
    <button @click="changeState('B')">B</button>
    <button @click="changeState('C')">C</button>
    
    <!-- vif时，会操作dom
    当渲染需要消耗很多资源时，可以避免重复渲染，提升性能
    tab切换的时候
     -->
    <keep-alive>
     <KeepAliveStateA v-if="state === 'A'"/>
     <KeepAliveStateB v-if="state === 'B'"/>
     <KeepAliveStateC v-if="state === 'C'"/> 
    </keep-alive>
    

  </div>
</template>

<script>
import KeepAliveStateA from './5_KeepAliveA.vue'
import KeepAliveStateB from './5_KeepAliveB.vue'
import KeepAliveStateC from './5_KeepAliveC.vue'

export default {
    data(){
        return{
            state: 'A'
        }
    },
    methods:{
        changeState(state){
            this.state = state;
        }
    },
    components:{
        KeepAliveStateA,
        KeepAliveStateB,
        KeepAliveStateC,
    }
}
</script>

<style>

</style>