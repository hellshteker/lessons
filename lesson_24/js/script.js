"use strict"

/* Задача №1
Дано в html: три елементи з класом item.
При кліку на кожен з елментів додати клас active,
при повторному кліку прибрати клас  */

document.addEventListener("click", documentAction);
function documentAction(e) {
    const elementTarget = e.target;
    if (e.type === "click") {
        if (elementTarget.closest(".item")) {
            const currentElement = elementTarget.closest(".item");
            currentElement.classList.toggle("active");
        }
    }
}

/* Задача №2
Дано в css/scss: body прозорий
При повному завантаженню сторінки додати клас до body який прибирає прозорість. */

/* window.addEventListener("load", pageLoaded)
function pageLoaded() {
    const bodyElement = document.body;
    bodyElement.classList.add("loaded")
} */
window.addEventListener("load", pageLoaded)
function pageLoaded() {
    const dz2Element = document.querySelector(`.dz2`);
    dz2Element.classList.add("loaded")
}

/* Задача №3
Дано в html: header main footer
Пи наведенні курсору на header змінювати колір фону у footer.
Коли курсор йде з header повертати початковий фон для footer. */

const headerElement = document.querySelector(`header`);
const footerElement = document.querySelector(`footer`);

headerElement.addEventListener("mouseenter", footerBackGround);
headerElement.addEventListener("mouseleave", footerBackGround);

function footerBackGround(e) {
    if (headerElement && footerElement) {
        if (e.type === "mouseenter") {
            footerElement.style.backgroundColor = "#99ad4e";
        } else if (e.type === "mouseleave") {
            footerElement.style.backgroundColor = "";
        }
    }
}

/* Задача №4
Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно. */

    const options = {
        root: null,
        rooMargin: "0px 0px 0px 0px",
        threshold: 1,
    };

    const callback = (entries) => {
        entries.forEach(entry => {
            const currentElement = entry.target;
            if (entry.isIntersecting && !(currentElement.classList.contains(`started`))) {
                const timerElement = document.querySelector(`.item-timer`);
                const timerDelay = timerElement.getAttribute('data-delay');
                const timerRepits = timerElement.getAttribute('data-repits');
                timerElement.innerHTML = 1;
                let i = 2;
                let timer = setInterval(() => {
                    timerElement.innerHTML = i;
                    i >= timerRepits ? clearInterval(timer) : null;
                    ++i;
                }, timerDelay);

                currentElement.classList.add('started')
            }
        })
    };

    const observer = new IntersectionObserver(callback, options);

    const animElements = document.querySelectorAll(`[class*="-timer"]`)
    animElements.forEach(animElement => {
        observer.observe(animElement)
    });