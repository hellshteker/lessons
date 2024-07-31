"use strict"

    /* Задача №1
    Отримати в константу елемент <body> */
    const bodyElement = document.body;
    //console.log (bodyElement)

    /* Задача №2
    Написати функцію, яка додає в <body> список UL
    з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням) */
    
    //const bodyElement = document.body;

    function addUlList(liValue = 5) {
        let template = `<ul>`;
        for(let i = 1; i <= liValue; i++) {
            template += `<li>Пункт №${i}</li>`
        }
        template += `</ul>`;

        bodyElement.insertAdjacentHTML("afterbegin", template);
    }
    addUlList(5);

    /*     Задача №3
    Додати до елементу <body> класс loaded.
    Потім перевірити чи є клас loaded у елемента <body>
    і, якщо є, додати стиль кольору тесту зедлений. */

    bodyElement.classList.add(`loaded`);
    if (bodyElement.classList.contains(`loaded`)) {
        bodyElement.style.color = `green`;
    }

    /*     Задача №4
    Дано в html: три елементи з класом item.
    Треба отримати ці елементи в константу, кожному додати клас active, 
    та перезаписати контент всередені кожного елемента на 
    Елемент №(тут порядковий номер елементу починаючи з 1)". */

    const itemElements = document.querySelectorAll(`.item`);

    itemElements.forEach((item, index) => {
        item.classList.add(`active`);
        item.insertAdjacentText("afterbegin", `Елемент №${index + 1}`)
    });

    /*     Задача №5
    Дано в html: текст, далі кнопка з класом button.
    Треба прокрутити скрол сторінки до кнопки */

    const button = document.querySelector(`.button`);
    function scrollToButton() {
        button.scrollIntoView({
            block: "center",
            behavior: "smooth"
        });
    }
    scrollToButton()

    /*     Задача №6
    Дано в html: посилання з класом link
    Треба додати до посилання дата атрибут зі значенням 100
    Поім отримати значення трибуту, та, якщо значення меньше 200
    пофарбувати колір тексту посилання в червоний */

    const link = document.querySelector(`.link`);
    const linkAttribute = parseFloat(link.getAttribute(`data-value`));
    if (linkAttribute < 200) {
        link.style.color = `red`;
    }
