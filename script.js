/*=======================================
    menubar script
=========================================*/
const nav = document.querySelector('ul.navigation');
const openMenu = document.querySelector('#openMenu');
const shadow = document.querySelector('.shadow');

openMenu.addEventListener('click', showNav);
shadow.addEventListener('click', showNav);

function showNav() {
    nav.classList.toggle('showMenu');
    shadow.classList.toggle('showShadow');
    if (openMenu.classList.contains('fa-bars')) {
        openMenu.classList.replace('fa-bars', 'fa-xmark');
    } else {
        openMenu.classList.replace('fa-xmark', 'fa-bars');
    }
}

const li = document.querySelectorAll('nav ul li a');

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('click', function() {
        let iclasslist, dropdown;

        li[i].classList.add('color');
        // remove color from unselected element
        for (let n = 0; n < li.length; n++) {
            if (i === n) continue;
            li[n].classList.remove('color');
        }

        iclasslist = li[i].querySelector('i').classList;
        dropdown = li[i].nextElementSibling;
        dropdown.classList.toggle('showDrop');
        iclasslist.toggle('rotate');
    });
}

/*=======================================
    sticky nav script
=========================================*/

window.onscroll = stickyNav;

const header = document.querySelector('header');

function stickyNav() {
    if (window.scrollY > 50) {
        header.classList.add('stickyNav');
    } else {
        header.classList.remove('stickyNav');
    }
}

/*=======================================
    slider script
=========================================*/

const sliderImg = document.querySelector('section.about div.slider img');
const sliderContainer = document.querySelector('section.about div.slider');
let n = 1;

function slider() {
    let imgWidth = sliderImg.clientWidth;
    if (n === 10) {
        n = 1;
        sliderContainer.style.transition = '0s';
    } else {
        sliderContainer.style.transition = '0.5s';
    }
    n++;
    sliderContainer.style.transform = 'translateX(' + imgWidth * -n + 'px' + ')';
}

setInterval(slider, 5000);

const testSlide = document.querySelector('#test-slide');
const item = document.querySelector('.testimonial-item');
const dot = document.querySelectorAll('.dot-item');

for (let i = 0; i < dot.length; i++) {
    dot[i].addEventListener('click', function() { testSlider(i) });
}

function testSlider(n) {
    const itemWidth = item.clientWidth;
    let len = dot.length;
    testSlide.style.transform = 'translate(' + itemWidth * -n + 'px' + ')';
    dot[n].style.backgroundColor = 'gray';

    for (let i = 0; i < len; i++) {
        if (i === n) continue;
        dot[i].style.backgroundColor = 'white';
    }
}

let x = 0;

function autoSlide() {
    x++;
    if (x === 5) {
        x = 0;
        testSlide.style.transition = '0s';
    } else {
        testSlide.style.transition = '0.5s';
    }
    testSlider(x);
}

setInterval(autoSlide, 5000);

/*=======================================
    accordion script
=========================================*/

const accordion = document.querySelectorAll('.accordion');
const accordionContent = document.querySelectorAll('.accordion-content');
for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() { showAccordion(i) });
}

function showAccordion(n) {
    let acc = accordionContent[n];
    let iclasslist = accordion[n].querySelectorAll('i')[1].classList;
    let button = document.querySelectorAll('.accordion button');
    for (let i = 0; i < accordionContent.length; i++) {
        iclasslist.toggle('rotate');
        if (acc.style.maxHeight) {
            acc.style.maxHeight = null;
            button[n].style.color = '';
        } else {
            acc.style.maxHeight = acc.scrollHeight + 'px';
            button[n].style.color = '#0EA2BD';
        }
        if (i === n) continue;
        accordionContent[i].style.maxHeight = null;
        button[i].style.color = '';
        accordion[i].querySelectorAll('i')[1].classList.remove('rotate');
    }
}

/*=======================================
    portfolio filter nav script
=========================================*/

// add showImg class name in selected element
const filterDiv = document.getElementsByClassName('filterDiv');

function filterSelection(c) {
    let i;
    for (i = 0; i < filterDiv.length; i++) {
        if (filterDiv[i].classList.contains(c)) {
            filterDiv[i].classList.add('showImg');
        } else {
            filterDiv[i].classList.remove('showImg');
        }
    }
}
filterSelection('all');

// click element

const elem = document.querySelectorAll('.portfolio-nav ul li a');
const portArr = ['all', 'app', 'product', 'branding', 'books'];

for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener('click', function() {
        let classList = elem[i].classList;
        filterSelection(portArr[i]);
        classList.add('active');
        // remove unselected elements
        for (let x = 0; x < elem.length; x++) {
            if (x === i) continue;
            elem[x].classList.remove('active');
        }
    });
}