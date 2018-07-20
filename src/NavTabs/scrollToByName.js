/* eslint-disable */
import $ from 'jquery'

export function scrollToByName(name, delay = 750) {
    const input =  document.getElementsByName(name)[0]
	console.dir(document.getElementsByName(name));
	console.dir(name);
    const scrollValue = $(input).offset().top
    $('html, body').animate({scrollTop: scrollValue}, delay);
}
export function scrollToById(id, delay = 750) {
	const input =  document.getElementById(id)
	const scrollValue = $(input).offset().top
	$('html, body').animate({scrollTop: scrollValue}, delay);
}

export function scrollToByPos(pos, delay = 750) {
    $('html, body').animate({scrollTop: pos}, delay);
}
