/**
 * HeapSort Time complexity:
 * Worst: O(n log n)
 * Average: O(n log n)
 */

function swap(i, f, arr = []) {
	const temp = arr[i];
	arr[i] = arr[f];
	arr[f] = temp;
	return arr;
}

function maxHeapify(arr = [], n, i) {

	let largest = i;
	let left = i * 2 + 1;
	let right = i * 2 + 2;

  	if (left < n && arr[left] > arr[largest]) {
    	largest = left;
	}
	if (right < n && arr[right] > arr[largest]) {
		largest = right;
	}

	if (largest !== i) {
		arr = swap(i, largest, arr);
		arr = maxHeapify(arr, n, largest);
	}

	return arr;
}

function heapSort(arr = []) {
	const n = arr.length;
	let i = Math.floor(n / 2 - 1);

	while (i >= 0) {
		arr = maxHeapify(arr, n, i);
		i--;
	}

	let f = n - 1;

	while (f >=0) {
		arr = swap(0, f, arr);
		arr = maxHeapify(arr, f, 0);
		--f;
	}

	return arr;
}

let input = [6, 4, 9, 3, 2, 1, 5, 7, 8];
console.log('Input Array: ', input);
console.log('Result: ', heapSort(input));

console.log('');
console.log('');

input = [6, 3, 2, 8, 0.4, 0.233];
console.log('Input Array: ', input);
console.log('Result: ', heapSort(input));

console.log('');
console.log('');

input = [622, 823, 1323, 632, 732.1, 1, 594, 833];
console.log('Input Array: ', input);
console.log('Result: ', heapSort(input));

console.log('');
console.log('');

input = [93, 32, 45, 23, 78, 82, 43, 18, 1, 5, 7, 8];
console.log('Input Array: ', input);
console.log('Result: ', heapSort(input));