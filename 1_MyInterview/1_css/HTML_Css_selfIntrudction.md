#HTML
##语义化：
    让人更容易读懂
    让搜索引擎更容易读懂（爬的时候抓h1

##块状元素&内联元素
    display:block/table;（**独占**一行）
        有div h1 h2 table ul ol p等
    display:inline/inline-block;（**顺序**往后，直到浏览器换行）
        有span img input button 等


#CSS
##布局1
###盒模型宽度计算
![节点](css1.png) 

    offsetWidth = (内容宽度+内边距+边框)，无外边距;
                = 122px

如果需要让offsetWidth = 100px，如何做到？
![节点](./css2.png)
  
###margin纵向重叠问题
![节点](./css3.png)

    相邻元素的margin-top和margin-bottom会发生重叠（以大的为主）
    空的内容<p\></p\>也会发生重叠
    此图内容AAA BBB的间距就是15px
###margin负值
    margin-top和margin-left负值，元素向上、向左移动
    margin-right负值，右侧元素左移，自身不受影响
    margin-bottom负值，下方元素上移，自身不受影响 
    左上负自己动，右下负旁边动
##布局2
###BFC理解和应用
block format context：块级格式化上下文
一块独立渲染区域，内部元素的渲染不会影响边界以外的元素

形成BFC的常见条件

    float不是none
    position不是absolute或fixed
    overflow不是visible
    display是flex inline-block等

BFC常见应用：
清除浮动
###float布局的问题，以及clearfix
    技术总结：
        使用float布局
        两侧使用margin负值，以便和中间内容横向重叠
        防止中间内容被两侧覆盖，一个用padding，一个用margin
####实现圣杯布局和双飞翼布局
见文件
####手写clearfix
![节点]( ./css6.png)
    
###flex布局
    常用语法：
        flex-direction，横向纵向
        justify-content，主轴对齐方式，开始对齐，结束对齐
        align-items，
        flex-wrap,
        align-self
####实现三点色子
![节点](./css4.png)

##定位
####absolute和relative分别依据什么定位？
    relative依据自身定位，且对外界元素不会有影响
    absolute依据最近的一层定位元素定位，最近不为static的父元素，absolute、relative、fixed都可以，如果一路都没有，就是body
    fixed固定定位是相对于浏览器窗口的定位，无论页面的上拉下滑，fixed定位元素相对于浏览器窗口的位置不变，一般用来做弹出窗口或者广告定位。
###居中对齐有哪些实现方式？
####水平居中
        inline行内元素:text-align:center;
        block块级元素：margin:auto;
            不定宽度：默认子元素的宽度和父元素一样，这时需要设置子元素为display: inline-block; 或 display: inline;即将其转换成行内块级/行内元素，给父元素设置 text-align: center; 
            利用css3新增属性transform: translateX(-50%);

        absolute定位的元素:left:50 + margin-left 负值
        
####垂直居中 
        inline元素：line-height的值等于height值
        block块级元素：margin:auto;
        absolute元素：top:50% + margin-top 负值(需知道子元素的宽高)
        absolute元素：transform( -50%, -50% )
        absolute元素：top,left,bottom,right = 0 + margin:auto
            不定高度：利用css3新增属性transform: translateY(-50%);
            使用flexbox布局，只需要给待处理的块状元素的父元素添加属性 display: flex; align-items: center;
####水平垂直居中
        block块级元素：
        设置父元素为相对定位，给子元素设置绝对定位，top: 0; right: 0; bottom: 0; left: 0; margin: auto;
        设置父元素为相对定位，给子元素设置绝对定位，left: 50%; top: 50%; margin-left: --元素宽度的一半px; margin-top: --元素高度的一半px;
            不定宽高：
                设置父元素为相对定位，给子元素设置绝对定位，left: 50%; top: 50%; transform: translateX(-50%) translateY(-50%);
                设置父元素为flex定位，justify-content: center; align-items: center;


####line-height如何继承
![节点]( ./css5.png)
子标签继承父标签行高
    写具体数值，如30px，则继承该值
    写比例，如2/1.5，则继承该比例（ 子行高 = 子行高*比例）
    写百分比，如200%，则继承计算出来的值（ 子行高 = 父行高*百分比）
40px

##响应式布局
###rem是什么？
    rem是一个长度单位
        px绝对长度单位，最常用，但在什么页面下都一样
        em相对长度单位，相对于父元素，不常用
        rem（root）相对长度单位，相对于根元素，常用于响应式布局(1rem = 1 html font-size  )
###响应式布局的常见方案？
    media-query，根据不同的屏幕宽度设置根元素font-size
    rem，基于根元素的相对单位
