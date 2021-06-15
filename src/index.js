import p from './logo.png'
let img=document.createElement('img');
img.src=p
document.body.appendChild(img);

require('./index.less')
let str=require('./a.js')
console.log(str)