let loaderUtils=require('loader-utils')
function loader(source){
    loaderUtils.interpolateName(this,'[hash].[ext]',{
        content:source
    })
    return style
}
loader.raw=true;
module.exports=loader