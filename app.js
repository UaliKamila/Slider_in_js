const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length /*получили все дивы с класа main-slide и length число */

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount-1) * 100}vh` /*1 второй слайд после умолчания*/

upBtn.addEventListener('click', () => {
	changeSlide('up')
})

downBtn.addEventListener('click', () => {
	changeSlide('down')
})


/*переход через клаваиши вверх/вниз*/
document.addEventListener('keydown', event => {
	if (event.key === 'ArrowUp') {
		changeSlide('up')
	} else if (event.key === 'ArrowDown') {
		changeSlide('down')
	}
}) 


function changeSlide(direction) { /*direction полученные параметры после нажатия кнопок*/
	if (direction === 'up') { /*если нажали на вверх*/
		activeSlideIndex++
		if (activeSlideIndex === slidesCount)
		{
			activeSlideIndex = 0 /*если вышли за рамки slidesCount, то=0*/
		}
	} else if (direction === 'down') {
		activeSlideIndex--
		if (activeSlideIndex < 0) { /*если activeSlideIndex -1*/
			activeSlideIndex = slidesCount - 1
		}
	}
	/*Анимация для слайда */
	const height = container.clientHeight
	mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
	sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`

}