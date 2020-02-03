import counterEvents from './counterEvents.js';

export default function handlerEvents(elem) {
	const idVal = elem.getAttribute('id');

	switch (idVal) {
		case 'counter':
			elem.onclick = counterEvents;
			break;
		default:
			break;
	}
}
