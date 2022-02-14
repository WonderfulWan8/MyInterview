
您好，我叫符登威，应聘的岗位是前端开发实习生，我是2022届应届毕业生，就读于湖北民族大学，专业是计算机科学与技术，我之前在智线云科技实习过，期间主要负责AD线条前端页面的版本开发及bug修复，工作中主要用到的技术有 vue element.ui echart 使用git分布式版本控制系统 具有一定的文档输出和api阅读能力 平常闲下来的时候喜欢自己钻研技术

vue 方面的话 对 v-if 和 v-show有过一点研究 就是当我在处理一个视频hover样式的时候 视频界面默认展示的静态封面图，当hover时loading样式展示1s然后开始播放视频，
起因：一开始先使用v-if控制鼠标移入触发的函数，鼠标移入函数是整个div，鼠标原地不动但是该函数执行了两次，
原因：v-if是操作dom，当不符合条件的时候，删除dom，符合的时候新增一个dom，这样的话，就会出现鼠标原地不动但是鼠标移入事件执行两次
处理：把v-if换成v-show，v-show是本来就把dom创建好，但是改变它的display属性，符合的时候display:block，不符合的时候display:none，问题解决

echart图的话，首先获取dom，然后echart.init初始化该dom，画图的dom一定要有高，不然会报错，在饼图那块默认是引导线和图例都使用同一个叫name的变量，使用formatter格式化方法。使用formatter调用自定义的数据，把内容通过处理让变成我们想要的样子。在里面用js的substring(0,indexOf('从此字母开始删除后面的字母'))
然后在用echart图的时候还有一个问题就是动态的更改大小，之前一直用的是window.addEventListener(‘resize‘,...)监听浏览器窗口大小变化来触发饼图重绘，但在有一个柱状图的echart，筛选条件发生变化的时候，仅是数据内容变化，浏览器窗口大小没变化，所以导致内容溢出，然后我去查阅资料，翻了半天找到了一个ResizeObserver api 可以具体监控某个dom的宽高变化根据宽高实现重绘，解决了这个bug

element方面，用过table，notificationm，pagination，loading，dialog，tooltip

git方面，一般开发的时候如果是bug就先从master上切一个hotfix分支，自己改bug，测试，然后本地merge master提merge request，版本开发的话就从developer切一个最新的分支去进行开发

js方面，对原型、原型链有一定了解，会使用es6语法class，了解面向对象编程思想，实例化对象等

深拷贝
ES6 里 的class
js里的原型，原型链