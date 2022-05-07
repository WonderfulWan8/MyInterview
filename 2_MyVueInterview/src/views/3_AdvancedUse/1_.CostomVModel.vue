<template>
    <div>
        <input type="text"
            :value="text1"
            @input="$emit('change1',$event.target.value)"
        >
        <!-- 
            1.上面的input使用了 :value而不是v-model
            2.上面的change1和model.event要对应起来
            3.text1 属性对应起来
         -->
    </div>    
</template>
<script>
export default {
    model:{
        prop: 'text1',
        event: 'change1'
    },
    props:{
        text1: String,
        default() {
            return ''
        }
    }
}
</script>
<style scoped>

</style>