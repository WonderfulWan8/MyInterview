
<template>
  <!-- 基本使用
    作用域插槽
    具名插槽
   -->
  <div>
    <a :href="url">
      <slot> 
          <!-- slot接收外面引用处的子节点 -->
          默认内容，即父组件没设置内容时，这里显示的内容 
      </slot>
    </a>
  </div>
</template>

<script>
export default {
  props: ["url"],
  data() {
    return {};
  },
};
</script>

<style>
</style>