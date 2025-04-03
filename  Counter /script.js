let n=document.querySelector('#num');
let num=Number(n.innerText);

let dec=document.querySelector('#dec');
let reset=document.querySelector('#reset');
let inc=document.querySelector('#inc');
dec.onclick=function(){

        num--;
        n.innerText=num;
};
reset.onclick=function(){
    num=0;
    n.innerText=num;
};
inc.onclick=function(){
    num++;
    n.innerText=num;
};