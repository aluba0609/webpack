const { options } = require('less')
const path=require('path')
class p{
    apply(compiler){
        compiler.hooks.emit.tap('emit',function(){
            console.log('emit')
        })
    }
}

module.exports={
    mode:"development",
    entry:{
        index:'./src/index.js'
    },
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.png$/,
                use:{
                    loader:path.resolve(__dirname,'loader','url-loader'),
                    options:{
                        limit:1
                    }
                },
                
            },
            {
                test:/\.less$/,
                use:[
                    path.resolve(__dirname,'loader','style-loader'),
                    path.resolve(__dirname,'loader','css-loader'),
                    path.resolve(__dirname,'loader','less-loader')
                ]
            }
        ]
    },
    plugins:[
        new p()
    ]
}