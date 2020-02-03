import handlerEvents from './handlerEvents.js';

export default function counterEvents(e) {
	e.preventDefault();
	if (e.target.dataset.counter != undefined) {
		e.target.value++;
		let key = e.target.getAttribute('id');
		sessionStorage.setItem(key, e.target.value);
	} else if (e.target.dataset.reset != undefined) {
		resetCounter();
	}
}

function resetCounter() {
	let votes = document.querySelectorAll('[data-counter]');

	//clear
	for (let vote of votes) {
		vote.value = 0;
	}

	sessionStorage.clear();
}
