var pageHeight = document.querySelector("#myCarousel");
window.addEventListener("DOMContentLoaded", function () {
    pageHeight.setAttribute("data-boxheight", Math.round(window.innerHeight));
})
//BS5輪播測試
const myCarouselElement = document.querySelector('#myCarousel');
const carousel = new bootstrap.Carousel(myCarouselElement, {
    wrap: false //停止循環
});
let CarousellistCount = myCarouselElement.querySelectorAll('.carousel-item');
const dotCurrent = document.getElementById("dotCurrent");
const dotCount = document.getElementById("dotCount");
dotCount.textContent = CarousellistCount.length;
myCarousel.addEventListener('slid.bs.carousel', function () {
    CarousellistCount.forEach(function (item, val) {
        if (item.classList.contains('active')) {
            myCarouselElement.setAttribute('data-active', val + 1);
        }
    });
    dotCurrent.textContent = myCarouselElement.getAttribute('data-active');
})

//加入滾輪事件
function MouseWheel(e) {
    e = e || window.event;
    if (e.wheelDelta <= 0 || e.detail > 0) {
        // console.log('down');
        carousel.next();
    } else {
        // console.log('up');
        carousel.prev();
    }
}

if ('onmousewheel' in window) {
    window.onmousewheel = MouseWheel;
} else if ('onmousewheel' in document) {
    document.onmousewheel = MouseWheel;
} else if ('addEventListener' in window) {
    window.addEventListener("mousewheel", MouseWheel, false);
    window.addEventListener("DOMMouseScroll", MouseWheel, false);
}

//加入鍵盤事件
function KeyboardEvent(e) {
    e = e || window.event;
    key = e.keyCode;
    switch (key) {
        case 37://上
            // console.log("←");
            carousel.prev();
            break;
        case 38://上
            // console.log("↑");
            carousel.prev();
            break;
        case 39://上
            // console.log("→");
            carousel.next();
            break;
        case 40://上
            // console.log("↓");
            carousel.next();
            break;
    }
};
document.addEventListener("keydown", KeyboardEvent, false);

//增加上下滑動事件
myCarouselElement.addEventListener('touchstart', function (event) {
    swipeStartX = event.touches[0].clientY;
    document.body.classList.add('carousel-state');//避免滑動時觸發後方滑動
});

myCarouselElement.addEventListener('touchend', function (event) {
    swipeEndX = event.changedTouches[0].clientY;
    if (swipeStartX - swipeEndX > 50) {
        carousel.next();
    } else if (swipeStartX - swipeEndX < -50) {
        carousel.prev();
    }
    document.body.classList.remove('carousel-state');
});