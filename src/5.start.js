let {AsyncParallelHook}=require('tapable')
//异步的钩子（串行）。 并行 需要等待所有的并发的异步时间执行后在执行回调方法 
//同时发送多个请求
//执行方法分为 tap注册 tapAsync
class Lesson{
    constructor(){
        this.index=0;
        this.hooks={
            arch:new AsyncParallelHook(['name'])
        }
    }
    tap(){//注册监听函数
        this.hooks.arch.tapAsync('node',(name,cb)=>{
            setTimeout(()=>{
                console.log('node',name)
                cb()
            },1000)
        })
        this.hooks.arch.tapAsync('react',(name,cb)=>{
            setTimeout(()=>{
                console.log('react',name)
                cb()
            },1000)
        })
    }
    start(){
        this.hooks.arch.callAsync('jw',function(){
            console.log('end')
        });
    }
}

let l=new Lesson()
l.tap()//注册这两个时间
l.start();//启动狗子