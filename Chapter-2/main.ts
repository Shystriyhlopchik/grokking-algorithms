function selectionSort<T>(array: T[]): T[] {
  function findSmallest<T>(arr: T[]): number {
    let smallestIndex = 0;
    return arr.reduce((_: number, item: T, index: number, array: T[]) => {
      if (array[smallestIndex] > item) {
        smallestIndex = index;
      }
      return smallestIndex;
    }, 0);
  }

  const sortedArray: T[] = [];
  const length = array.length;

  for (let i: number = 0; i < length; i++) {
    const smallestIndex: number = findSmallest(array);
    sortedArray.push(...array.splice(smallestIndex, 1));
  }

  return sortedArray;
}

console.log(selectionSort([5, 3, 6, 2, 10]));
