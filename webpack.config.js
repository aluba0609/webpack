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
    devtool:'source-map',
    module:{
        rules:[
            {
                test:/\.png$/,
                use:{
                    loader:path.resolve(__dirname,'loader','url-loader'),
                    options:{
                        limit:10*1024
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
            },
            {
                test:/\.js$/,
                use:{
                    loader:path.resolve(__dirname,'loader','babel-loader'),
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            },
            {
                test:/.\js$/,
                use:{
                    loader:path.resolve(__dirname,'loader','banner-loader'),
                    options:{
                        test:"阿鲁巴",
                        // filename:path.resolve(__dirname,'loader','banner.js')
                    }
                }
            }
        ]
    },
    plugins:[
        new p()
    ]
}