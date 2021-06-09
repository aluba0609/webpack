class AsyncSeriesHook{//钩子是同步的
    constructor(args){//args=>['name']
        this.tasks=[]
    }
    tapPromise(name,task){
        this.tasks.push(task)
    }
    promise(...args){
        let [first,...others]=this.tasks;
        return others.reduce((p,n)=>{// redux源码一样
            return p.then(()=>n(...args))
        },first(...args))
        
    }
}
let hook = new AsyncSeriesHook(['name'])
hook.tapPromise('react',function(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('react', name)
            resolve()
        }, 1000)
    })
})
hook.tapPromise('node',function(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('node', name)
            resolve()
        }, 1000)
    })

})
hook.promise('jw').then(()=>{
    console.log('end')
})