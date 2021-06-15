let loaderUtils=require('loader-utils')
let a=require('schema')
function loader(source){
    let options=loaderUtils.getOptions(this);
    console.log(this.resourcePath)
    let cb=this.async();
    transform(source,{...options,sourceMap:true,filename:this.resourcePath},(err,result)=>{
        cb(err,result.code,result.map)
    })
}
module.exports=loader