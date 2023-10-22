const menu = document.querySelector('.menu');
const multiplier = document.querySelector('.multiplier');
const burger = document.querySelector('.burger');
const burger2 = document.querySelector('.burger2');


burger.addEventListener('click',()=>{
    multiplier.classList.toggle('none')
    menu.classList.toggle('block')
    menu.classList.toggle('none')
    
    })


burger.addEventListener('click',()=>{
    burger2.classList.toggle('none')
    
    })

