<template>
    <!-- 
        事件
        event参数，自定义参数
        事件修饰符，按键修饰符
        【观察】事件被绑定到哪里
     -->
    <div>
        <p>{{num}}</p>
        <button @click="increment1">+1</button>
        <button @click="increment2(2, $event)">+2</button>
        <!-- 事件修饰符 -->
        <!-- 阻止单击事件继续传播 -->
        <a v-on:click.stop="doThis"></a>
        <!-- 提交事件不再重载页面 -->
        <form v-on:submit.prevent="obSubmit" action=""></form>
        <!-- 修饰符可以串联 -->
        <a v-on:click.stop.prevent="doThat" href=""></a>
        <!-- 只有修饰符 -->
        <form v-on:submit.prevent action=""></form>
        <!-- 添加事件监听器时使用事件捕获模式 -->
        <!-- 即内部元素触发的事件先在此处理,然后才交由内部与乃是进行处理 -->
        <div v-on:click.capture="doThis"></div>
        <!-- 只有当 event.target是当前元素是自身是触发处理函数 -->
        <!-- 既然事件不是从内部元素触发的 -->
        <div v-on:click.self="doThat"></div>
        <!-- 即使Alt或shift被同一按下时也会触发 -->
        <button @click.ctrl="onClick">A</button>
        <!-- 有且只有Ctrl被按下的时候才触发 -->
        <button @click.ctrl.exact="onCtrlClick">A</button>
        <!-- 明天任何系统修饰符被按下的时候才触发 -->
        <button @click.exact="onClick">A</button>
    </div>    
</template>
<script>
export default {
    data(){
        return{
            num:0,
        }
    },
    methods: {
        increment1(event){
           console.log('event', event, event.__proto__.constructor); // 是原生的 event 对象 
           console.log(event.target);// 挂载的地方
           console.log(event.currentTarget);// 被什么触发的
           this.num++;
           // 1. event 是原生的
           // 2. 事件被挂载到当前元素
           // 和 DOM 事件一样
        },
        increment2(val, event){
            console.log(event.target);
            this.num = this.num + val
        },
        loadHandler(){

        },
        doThis(){

        },
        doThat(){
            
        }
    },
    mounted() {
        window.addEventListener('load', this.loadHandler);
    },
    beforeDestroy(){
        window.removeEventListener('load',this.loadHandler);
    }
}
</script>
<style scoped>

</style>