<template>
    <!-- 
        循环（列表)渲染
        如何遍历对象？——也可以用v-for
        key的重要性。key不能乱写（如random或者index
        v-for 和 v-if不能一起使用！
            原因：vf 比 vif的计算优先级高一些，渲染模板的时候，
            会先用vf进行循环，循环后再用v-if判断，像这里三次
            就会进行三次重复的判断
            把v-if写在外层，或者写在内层就可以避免
     -->
    <div>
        <p>遍历数组</p>
        <ul>
            <li 
             v-for="(item, index) in listArr"
             :key="item.id">
                {{index}} - {{item.id}} - {{item.title}}
            </li>
        </ul>

        <p>遍历对象</p>
        <ul>
            有顺序的 val,key,index
            <li
             v-for="(value, key, index ) in listObj"
             :key="key"
            >
                {{value}} - {{key}} - {{index}}
           
            <!-- <li
             v-for="(val, key, index) in listObj"
             :key="key"
            >
                {{index}} - {{key}} - {{val}} -->
            
            </li>
        </ul>

    </div>    
</template>
<script>
export default {
    data(){
        return{
            flag: false,
             listArr: [
                { id: 'a', title: '标题1' }, // 数据结构中，最好有 id ，方便使用 key
                { id: 'b', title: '标题2' },
                { id: 'c', title: '标题3' }
            ],
            listObj: {
                a: { title: '标题1' },
                b: { title: '标题2' },
                c: { title: '标题3' },

            }
            
        }
    }
}
</script>
<style scoped>

</style>