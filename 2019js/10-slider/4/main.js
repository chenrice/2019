const parent = document.querySelector('.slider');
const items = parent.querySelectorAll('.item');
let current = 0;
let lastIndex = items.length - 1;

console.log(getComputedStyle(items[1]).width);   

console.log(getComputedStyle(items[current]).transform);

boot();

function boot() {
    show(items[0]);
    setInterval(() => {
        loop();
    }, 1000);
}


function loop() {
    ++current;

    if (current >= items.length) {
        current = 0;
    }

    let prev = getPrev();
    let next = items[current];

    hide(prev);
    show(next);
}



function getPrev() {
    return (current == 0 ? items[lastIndex] : items[current - 1]);
}

function hide(el) {
    if (!el) {
        return;
    }
    
    el.style.opacity = 0;
}

function show(el) {
    if (!el){
        return;
    }
    el.style.opacity = 1;
    el.style.transform = 'translate3d(800, 0, 0)';
}