export function capitalize(text: string) {
	return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export function debounce<T extends unknown[]>(callback: Callback<T>, wait: number): Callback<T> {
	let timer: ReturnType<typeof setTimeout> | undefined;

	return function (...args: T) {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			callback(...args);
		}, wait);
	};
}
