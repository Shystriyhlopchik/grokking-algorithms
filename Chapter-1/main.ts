console.log("Бинарный поиск.");
const my_list = [1, 3, 5, 7, 9];

function binarySearch<T>(list: T[], item: T): number | null {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];

    if (item < guess) {
      high = mid - 1;
    } else if (item > guess) {
      low = mid + 1;
    } else return mid;
  }

  return null;
}

console.log(`Индекс искомой: ${binarySearch(my_list, 1)}`);
