const parent = document.querySelector('.slider');
const items = document.querySelectorAll('.item');
let lastIndex = items.length - 1;
let current = 0;
let config = {
    mode: 'slide',
    interval: 1000,
}

boot({
    mode: 'slide',
    interval: 1000,
});

function boot(custom) {
    config = Object.assign({}, config, custom);

    console.log(config);
    first();
    setInterval(() => {
        increment();
        if (config.mode === 'slide') {
            slide();
        } else {
            hideAll();
            fade();
        }

    }, 1000);
}

function first(){
    items[0].style.zIndex = 3;
}


function slide() {

    let prev = getPrev();
    let nowCurrent = getNowCurrent();
    let next = getNext();

    prev.style.left = -prev.offsetWidth + 'px';
    nowCurrent.style.left = '0';
    next.style.left = next.offsetWidth + 'px';

    prev.style.zIndex = 0;
    nowCurrent.style.zIndex = 2;
}

function fade() {
    let prev = getPrev();
    let nowCurrent = getNowCurrent();
    // let next = getNext();

    prev.style.opacity = 0;
    nowCurrent.style.opacity = 1;
    // next.style.left = next.offsetWidth + 'px';

}

function hideAll() {
    items.forEach(element => {
        element.style.opacity = 0;
    });
}

function increment() {
    if (current < lastIndex) {
        current++;
    } else {
        current = 0;
    }
}


function getPrev() {
    return (current > 0 ? items[current - 1] : items[lastIndex]);
}


function getNowCurrent() {
    return items[current];
}


function getNext() {
    return (current < lastIndex ? items[current + 1] : items[0]);
}