export default function today() {
	const todayEl = document.getElementById('today');

	todayEl.textContent = new Date();
}
