<template>
    <div>
        <!-- 
            v-model
            常见表单项 textarea checkout radio select
            修饰符lazy number trim
         -->
         <p>输入框: {{name}}</p>
         <!-- 
            lazy 修饰符: 使模型绑定的数据只有在失去焦点或者是按下回车时才会更新
            trim 修饰符: 过滤掉内容左右两边的的空格
            number 修饰符: 使输入框中输入的内容自动转换为数字类型
          -->
         <input type="text" v-model.trim="name" />
         <input type="text" v-model.lazy="name" />
         <input type="text" v-model.number="age"/>

         <p>多行文本: {{desc}}</p>
         <textarea v-model="desc"></textarea>
         <!-- 注意:<textarea>{{desc}}</textarea>是不允许的 -->

         <p>复选框: {{checked}}</p>
         <input type="checkbox" v-model="checked">

        <p>多个复选框: {{checkedNames}} </p>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
         <!-- 为id为jack的input准备的label -->
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>

        <p>单选 {{gender}}</p>
        <input type="radio" id="male" value="male" v-model="gender">
        <label for="male">male</label>
        <input type="radio" id="female" value="female" v-model="gender">
        <label for="female">female</label>

        <p>下拉列表选择 {{selected}}</p>
        <select v-model="selected" name="" id="">
            <option disabled value="">请选择</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>

        <p>下来列表选择(多选) {{selectedList}}</p>
        <select v-model="selectedList" multiple>
            <option disabled value="">请选择</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>

    </div>
</template>
<script>
export default {
    data(){
        return {
            name:'双月',
            age: 18,
            desc: '自我介绍',

            checked: true,
            checkedNames: [],

            gender: 'male',

            selected: '',
            selectedList: [],
        }
    }   
}
</script>
<style scoped>

</style>