<template>
    <div>
        <MyInput @add="add"/>
        <MyList :list="list" @delete="delete2"/>
    </div>
</template>
<script>
import MyInput from './myInput.vue'
import MyList from './myList.vue'
export default {
    data(){
        return {
            list:[
                {
                    id:'id-1',
                    title: '标题1'
                },
                {
                    id:'id-2',
                    title: '标题2'
                }
            ]
        }
    },
    methods:{
        add(title){
           console.log(title); 
           this.list.push(
               {
                   id: `id-${Date.now()}`,
                   title: title
               }
           );
        },
        delete2(id){
            // this.list.forEach( (item)=> item.id != id );
            this.list = this.list.filter( item => item.id !== id)
        }
    },
    components:{
        MyInput,
        MyList
    }
}
</script>
<style>

</style>