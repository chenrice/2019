const parent = document.querySelector('.slider');
const items = parent.querySelectorAll('.item');
let lastIndex = items.length - 1;
let current = 0;
let config = {
    mode:'slide',
    interval:1500,
}

boot({
    mode:'fade',
});

function boot(custom) {
    config = Object.assign({},config,custom);

    firstSlide();
    
    setInterval(() => {
        increment();
        if(config.mode == 'slide'){
            slide();
        } else {
            hideAll();
            fade();
        }
        
        // console.log(current + '我是"current"');
        console.log(lastIndex + '我是"prive"');

    }, 1000);
}

function slide() {    
    slideX();
    slideZ();    
}

function firstSlide(){
    items[0].style.left = '0';
    items[0].style.zIndex = 5;
}

function slideZ() {

    let prev = getPrev();
    let nowCurrent = getNowCurrent();
    let next = getNext();

    prev.style.left = -prev.offsetWidth + 'px';
    nowCurrent.style.left = '0';
    next.style.left = next.offsetWidth + 'px';
}

function slideX() {
    let prev = getPrev();
    let nowCurrent = getNowCurrent();
    let next = getNext();

    prev.style.zIndex = 0;
    nowCurrent.style.zIndex = 2;
    next.style.zIndex = 0;
}


function hideAll(){
    items.forEach(element => {
        element.style.opacity = 0;    
    });
}

function fade(){
    let prev = getPrev();
    let nowCurrent = getNowCurrent();
    let next = getNext();

    prev.style.opacity = 0;
    nowCurrent.style.opacity = 1;
    next.style.opacity = 0;
}

function increment() {
    current < lastIndex ? current++ : current = 0;
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


