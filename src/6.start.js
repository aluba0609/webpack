let {
    AsyncParallelHook
} = require('tapable')
//异步的钩子（串行）。 并行 需要等待所有的并发的异步时间执行后在执行回调方法 
//同时发送多个请求
//执行方法分为 tap注册 tapAsync
//tspable库中有三种注册方式 tap 同步注册  tapAsync(cb) tapPromise(注册的是promise)
//调用方法 call callAsync promise
class Lesson {
    constructor() {
        this.hooks = {
            arch: new AsyncParallelHook(['name'])
        }
    }
    tap() { //注册监听函数
        this.hooks.arch.tapPromise('node', (name) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log('node', name)
                    resolve()
                }, 1000)
            })

        })
        this.hooks.arch.tapPromise('react', (name) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log('react', name)
                    resolve()
                }, 1000)
            })
        })
    }
    start() {
        this.hooks.arch.promise('jw').then(()=>{
            console.log('end')
        })
    }
}

let l = new Lesson()
l.tap() //注册这两个时间
l.start(); //启动钩子