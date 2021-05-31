export function debounce(fn, ms = 1000) {
	let timer;

	return function (...args) {
		clearTimeout(timer);
		timer = setTimeout(() => fn.apply(this, args), ms)
	}
}