let loaderUtils=require('loader-utils');
function loader(source){
    console.log('source:',source,'++++++')
        let str=`let style=document.createElement('style');
            style.innerHTML=${JSON.stringify(source)};
            document.head.appendChild(style);`
    return str;
    }
loader.pitch=function(remainingRequest){
    console.log('remainingRequest',remainingRequest,'-----------')
    //D:\项目\vue\git\webpack\loader\css-loader.js!D:\项目\vue\git\webpack\loader\less-loader.js!D:\项目\vue\git\webpack\src\index.less
    let str=`let style=document.createElement('style');
    style.innerHTML=require(${loaderUtils.stringifyRequest(this,'!!'+remainingRequest)});
    document.head.appendChild(style)`
    return str;
    }
module.exports=loader