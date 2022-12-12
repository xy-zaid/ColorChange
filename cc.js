let btn=document.querySelector('.btn');
let body=document.querySelector('body');
let h=document.querySelector('h1');
btn.addEventListener('click',()=>{
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let color=`rgb(${r},${g},${b})`;
    body.style.backgroundColor=color;
    h.innerText=color;
})