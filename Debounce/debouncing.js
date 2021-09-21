let count = 0;

const debounce = (func, delay) => {
    let timer;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(() => {
            func();
        }, delay);
    }
}

let scrollCount = () => {
    console.log(count++);
}

scrollCount = debounce(scrollCount, 500);

window.addEventListener('scroll', scrollCount);