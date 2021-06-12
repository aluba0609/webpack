let less=require('less')
function loader(source){
    // console.log(source,'less')
    let css='';
    less.render(source,function(err,c){
        css=c.css
    })
    css=css.replace(/\n/g,'\\n')
    return css;
}
module.exports=loader