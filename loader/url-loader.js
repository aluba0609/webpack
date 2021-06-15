const loaderUtils=require('loader-utils')
const path=require('path')
function loader(source){
    let {limit}=loaderUtils.getOptions(this)
	//source.length  需要打包的图片的大小 source.toString('base64')
    const extname=path.extname(this.resourcePath).slice(1)
    if(source.length<limit){
        const base64=source.toString('base64')
        return `module.exports="data:image/${extname};base64,${base64}"`
    }else{
        
    	return require('./file-loader').call(this,source);
    }
}
loader.raw=true;
module.exports=loader;