<template>
    <div>
        <input type="text" name="" id="" v-model="title">
        <button @click="addItem">add</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            title: '',
        }
    },
    methods: {
        addItem(){
            this.$emit('add',this.title);
        }
    }
}
</script>
<style>

</style>