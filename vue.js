/**
 * Created by hlz on 18-3-26.
 */



var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})


var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '页面就在于 ' + new Date().toLocaleString()
    }
})


var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})


var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            {text: '学习javaScript'},
            {text: '学习Vue'},
            {text: '整个项目组'}
        ]
    }
})


var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'hello vue.js'
    },
    methods:{
        reverseMessage:function () {
            this.message = this.message.split('').reverse.join('')
        }
    }
})