let loaderUtils=require('loader-utils')
let {validate}=require('schema-utils')
let fs=require("fs");
function loader(source){
    let options=loaderUtils.getOptions(this);
    let cb=this.async();
    let schema={
        type:"object",
        properties:{
            test:{
                type:'string'
            },
            filename:{
                type:'string'
            }
        }
    }
    validate(schema,options,'banner-loader')
    if(options.filename&&options.filename.length){
        fs.readFile(options.filename,'utf8',function(err,data){
            cb(err,`/*${data}*/${source}`)
        })
    }else{
        cb(null,`/*${options.test}*/${source}`)
    }
}
module.exports=loader