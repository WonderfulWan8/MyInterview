<template>
  <div>
      <FormDemo v-if="fromVisible"  />
      <button @click="form">isShow</button>
  </div>
</template>

<script>
// import FormDemo from '../1_basicUse/8_FormDemo.vue'
export default {
    data(){
        return {
            fromVisible: false,
        }
    },
    components:{
        FormDemo: () => import( '../1_basicUse/8_FormDemo.vue')
    },
    methods: {
        form(){
            this.fromVisible = !this.fromVisible
        }
    }
}
</script>

<style>

</style>