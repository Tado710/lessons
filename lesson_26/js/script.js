// Строгий режим
"use strict"

/*Задача №1
Дано в html: три елементи з класом item.
При кліку на кожен з елментів додати клас active,
при повторному кліку прибрати клас */

document.addEventListener("click", documentAction)
function documentAction(e) {	
	const targetElement = e.target
	if (targetElement.closest('.list-item')) {			
		const item = targetElement.closest('.list-item')	
		item.classList.toggle('active')
	}	
}
//=======================================
/*Задача №2
Дано в css/scss: body прозорий
При повному завантаженню сторінки додати клас до body який прибирає прозорість.*/

const body = document.body;
window.addEventListener("load", pageLoaded);
function pageLoaded() {	
	body.classList.add('dense');	
}
//==============================================
/*Задача №3
Дано в html: header main footer
Пи наведенні курсору на header змінювати колір фону у footer.
Коли курсор йде з header повертати початковий фон для footer.*/

const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
header.addEventListener("mouseenter", () => {
	footer.classList.add('footer-bg')
})
header.addEventListener("mouseleave", () => {
	footer.classList.remove('footer-bg')
})
//=======================================
/*Задача №4
Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка 
збільшується на одиницю: 1 2 3 ... і т.д.Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата 
атрибутах елемента item.
Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.*/

let options = {
	root: null,
	rootMargin: "0px 0px 0px 0px",
	threshold: 1,
}
function counter(entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			const item = entry.target;
			const start = parseInt(itemElement.dataset.start);
			const end = parseInt(itemElement.dataset.end);
			const delay = parseInt(itemElement.dataset.delay);
			observer.unobserve(itemElement);
			let counter = start;
			const timer = setInterval(() => {
				item.textContent = counter;
				counter++;
				if (counter > end) {
					clearInterval(timer);
				}
			}, delay);
			//console.log('я тебе бачу');
		} else {
			//console.log('я тебе не бачу');
		}
	});
}
let observer = new IntersectionObserver(counter, options);
const itemElement = document.querySelector('.item');
observer.observe(itemElement);

