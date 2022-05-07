
<template>
    <!-- Vue是异步渲染
    data改变之后，DOM不会立刻渲染
    $nextTick会在DOM渲染之后被触发，以获取最新DOM节点 -->
    <div>
        <div id="app">
            <ul ref="ul1">
                <li v-for="(item,index) in list" :key="index">
                    {{item}}
                </li>
            </ul>
            <button @click="addItem">添加一项</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    data(){
        return{
            list: ['a','b','c']
        }
    },
    methods:{
        addItem(){
            this.list.push(`${Date.now()}`);
            this.list.push(`${Date.now()}`);
            this.list.push(`${Date.now()}`);
            // 使用ref获取dom元素
            // const ulElem = this.$refs.ul1; 
            // console.log(ulElem.childNodes.length);

            // data改变时，dom不会立刻变，此时取，取不到最新的
            // 使用nextTick可以获取到最新的dom
            this.$nextTick( ()=>{
                const ulElem = this.$refs.ul1;
                console.log(ulElem.childNodes.length);
            } );

            // 1.异步渲染，$nextTick待DOM渲染完再回调
            // 2.页面渲染时会将data的修改做整合，多次data修改只会渲染一次

        }
    }
}
</script>

<style>

</style>