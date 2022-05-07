<template>

  <div>
   <!-- 父组件通过slot获取子组件的值 -->
   <a :href="url">
       <slot :slotData="website">
           <!-- 默认显示的内容 -->
           {{website.subTitle}}
       </slot>
   </a>
  </div>
</template>

<script>
export default {
    props: ['url'],
    data(){
        return {
            website: {
                url: 'http://wangEditor.com/',
                title: 'wangEditor',
                subTitle: '轻量级富文本编辑器'
            }
        }
    }
}
</script>

<style>

</style>