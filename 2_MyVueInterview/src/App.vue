<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <TplDemo/>
    ==========================
    <watchDemo/>
    ==========================
    <ClassDemo/>
    ==========================
    <ConditionDemo/>
    ==========================
    <ListDemo/>
    ==========================
    <EventDemo/>
    ==========================
    <FormDemo/>
    ==========================
    <ComponentDemo/> 
    ==========================
    <myComponentDemo/>
    -->
    <AdvancedUse/>
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TplDemo from './views/1_basicUse/1_TplDemo.vue'
import watchDemo from './views/1_basicUse/3_watchDemo.vue'
import ClassDemo from './views/1_basicUse/4_ClassDemo.vue'
import ConditionDemo from './views/1_basicUse/5_ConditionDemo.vue'
import ListDemo from './views/1_basicUse/6_listDemo.vue'
import EventDemo from './views/1_basicUse/7_EventDemo.vue'
import FormDemo from './views/1_basicUse/8_FormDemo.vue'

import ComponentDemo from './views/2_componentsUse/index.vue'
import myComponentDemo from './views/2_componentsUse/Mycomtest/myindex.vue'

import AdvancedUse from './views/3_AdvancedUse/index.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // TplDemo,
    // watchDemo,
    // ClassDemo,
    // ConditionDemo,
    // ListDemo,
    // EventDemo,
    // FormDemo,

    // ComponentDemo,
    // myComponentDemo,
    
    AdvancedUse,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
