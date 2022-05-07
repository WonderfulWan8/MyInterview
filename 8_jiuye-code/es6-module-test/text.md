require(...)的三个层级


1、系统自带模块 require('http')
const http = require('http');// nodejs自带模块

2、npm包，如require('lodash')
const _ = require('lodash')// 通过npm安装的模块

3、自定义模块，如require('a')
const {sum, test} = require('./utils');//自己手写的模块

前端js = js语法 + web API
nodejs语法 = js语法 + nodejs API
同样的语法，不同的工作
