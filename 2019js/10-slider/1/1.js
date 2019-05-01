const parent = document.querySelector('.slider');
const sliders = parent.querySelectorAll('.item');
let current = 0;
let lastIndex = sliders.length - 1;
console.log(sliders);


boot();

function boot(){
    show(sliders[0]);
    setInterval(() => {
        loop();
    }, 1000);
}




function loop(){
    ++current;
    
    if(current >= sliders.length){
        current = 0;
    }

    console.log(current);

    let prev = current == 0 ?  sliders[lastIndex] : sliders[current -1] ;

    let next = sliders[current];
    
    hide(prev);
    show(next);
}

function hide(el){
    if(!el) return;
    el.style.opacity = 0;    
}

function show(el){
    if(!el) return;
    el.style.opacity = 1;
}