<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <button @click="test">test</button>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import store from './store/index'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    test(){
      store.commit('increment');
      console.log(store.state.count);
    }
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
