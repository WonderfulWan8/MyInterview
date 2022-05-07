<template>
    <!-- 
        条件渲染
        v-if v-else的用法，可以使用变量，也可以使用===表达式
        v-if 和 v-show的区别
            v-if如果不是选择就不渲染dom
            而 v-show是渲染dom但是改变其display属性
            如果是一次性，或者更新没有那么频繁的选v-if
            如果频繁的切换比如AB 用v-show,修改display性能更好
        v-if 和 v-show的使用场景
     -->
    <div>
        <p v-if="type === 'a'">A</p>
        <p v-else-if="type === 'b'">B</p>
        <p v-else>other</p>

        <p v-show=" type === 'a'">A by v-show</p>
        <p v-show=" type === 'b'">B by v-show</p>

    </div>    
</template>
<script>
export default {
    data(){
        return {
            type: 'a'
        }
    }
}
</script>
<style scoped>

</style>