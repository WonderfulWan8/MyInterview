<template>
    <div>
        <ul>
            <li v-for="item in list " :key="item.id">
                {{item.title}}
                <button @click="deleteItem(item.id)">删除</button>
            </li>
        </ul>
    </div>
</template>
<script>
import event from './event';
export default{
    props: {
        // prop类型 和 默认值
        list: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data(){
        return {

        }
    },
    methods: {
        deleteItem(id){
            this.$emit('delete', id);
        },
        addTitleHandler(title){
            console.log('on add title',title);
        }
    },
    created(){
        console.log('list created');
    },
    mounted() {
        console.log('list mounted');
        // 绑定自定义事件
        event.$on('onAddTitle',this.addTitleHandler);
    },
    beforeUpdate(){
        console.log('list before update');
    },
    updated() {
        console.log('list updated');
    },
    beforeDestroy(){
        event.$off('onAddTitle',this.addTitleHandler);
    }

}

</script>