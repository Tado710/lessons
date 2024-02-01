// Строгий режим
"use strict"


//Задача №1
//Отримати в константу елемент <body>
/*const bodyElement = document.body;
console.log(bodyElement);*/
//=======================================
/*Задача №2
Написати функцію, яка додає в <body> список UL
з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)*/
 /*const bodyElement = document.body;
function createList(item = 5) {
	//Добавляем элемент (список ul) - выводим в константу
	const newList = document.createElement('ul');	
	for (let i = 1; i <= item; ++i) {
	//Добавляем элемент li - выводим в константу
	const liElement = document.createElement('li');
	//Добавляем контент внутри каждого li
	liElement.textContent = `Пункт №${i}`;
	liElement.style.cssText = `
	margin-bottom: 10px;
	font-size: 22px;
	font-weight: 600;
	color: blue;`
	//Вставляем созданные li
	newList.append(liElement)
	}
	bodyElement.insertAdjacentElement("afterbegin", newList);
}
createList(5)*/
//=========================================
/*Задача №3
Додати до елементу <body> класс loaded.
Потім перевірити чи є клас loaded у елемента <body>
і, якщо є, додати стиль кольору тесту зелений.*/

/*const bodyElement = document.body;
bodyElement.classList.add('loaded');
if (bodyElement.classList.contains('loaded')) {
	bodyElement.style.color = `green`;
}*/
//=============================
/*Задача №4
Дано в html: три елементи з класом item.
Треба отримати ці елементи в константу, кожному додати
клас active,
та перезаписати контент всередені кожного елемента
на "Елемент №(тут порядковий номер елементу починаючи з 1)"*/

//Получаем в коллекцию элементы с классом item
/*const listItems = document.querySelectorAll('.item');
//Проверяем есть ли элементы и сколько
if (listItems.length) {
	//методом перебора, обрабатываем каждый элемент
	listItems.forEach((listItem, index) => {
		//Добавляем класс active
		listItem.classList.add('active');
		//Перезаписываем контент внутри каждого элемента
		listItem.textContent = `Елемент №${++index}`;
	});
}*/
//=================================
/*Задача №5
Дано в html: текст, далі кнопка з класом button.
Треба прокрутити скрол сторінки до кнопки*/
/*const button = document.querySelector('.button');
function scrollToBlock(element) {
	element.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}
scrollToBlock(button);*/
//===============================	
/*Задача №6
Дано в html: посилання з класом link
Треба додати до посилання дата атрибут зі значенням 100
Поім отримати значення трибуту, та, якщо значення меньше 200
пофарбувати колір тексту посилання в червоний*/
//Обращаемся к объекту с классом link
/*const link = document.querySelector('.link');
//Получаем значение атрибута
let color = link.dataset.color;
//Если значение атрибута менее 200 меняем цвет на красный
if (color < 200) {
	link.style.color = `red`;
}*/