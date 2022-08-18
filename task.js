// из массива [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
//создать массив [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]
// решение

arr = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
unicArr = [...new Set(arr)].sort((a, b) => a - b);
console.log(unicArr);
newArr = unicArr.map((x) => arr.filter((name) => name === x));
console.log(newArr);
