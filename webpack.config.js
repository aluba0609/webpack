const path=require('path')


module.exports={
    mode:"development",
    entry:{
        index:'./src/index.js'
    },
    output:{
        filename:'[bundle].js',
        path:path.resolve(__dirname,'dist')
    },
    // module:{
    //     rules:[
    //         {
    //             test:/\.js$/,
    //             use:{
    //                 loader:'babel-loader',
    //                 preset:[
    //                     '@babel/preset.env'
    //                 ]
    //             }
    //         }
    //     ]
    // }
}