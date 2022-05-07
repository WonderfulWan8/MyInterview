<template>
  <div>
      <p>state C</p>
  </div>
</template>

<script>
export default {
    mounted(){
        console.log('C mounted');
    },
    destroyed(){
        console.log('C destroyed');
    }
}
</script>