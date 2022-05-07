<template>
<!-- 
    插值、表达式
    指令、动态属性
    v-html： 会有XSS风险，会覆盖子组件
 -->
    <div>
        <p>文本插值{{message}}</p>
        <p> JS表达式{{flag? 'yes' : 'no'}}(只能是表达式，不能是js语句) </p>
        <p :id="dynamicId">动态属性 id</p>

        <hr/>

        <p v-html="rawHtml">
            <span>有xss风险</span>
            <span>【注意】使用 v-html 之后，将会覆盖子元素</span>
        </p>
    </div>
</template>

<script>
export default{
    data(){
        return {
            message: 'hello vue',
            flag: true,
            rawHtml: '指令 - 原始 html <b>加粗</b> <i>斜体</i>',
            dynamicId: `id-${Date.now()}`
        }
    }
}

</script>