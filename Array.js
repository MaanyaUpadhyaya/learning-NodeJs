function learnArray(){

const myArray = ['Wind', 'Rain', 'Fire']
console.log(`Length of array: ${myArray.length}`);

//iterating
const numbers = [1, 2, 3, 4, 5];
console.log(`iterating ${numbers}`);
const length = numbers.length;
for (let i = 0; i < length; i++) {
  numbers[i] *= 2;
}

//shortening an array
const number = [1, 2, 3, 4, 5, 6, 7, 8];
if (number.length > 6) {
  number.length = 6;
}
console.log(`shortening of an array:${number}`); 
console.log(`length of array after shortening:${number.length}`); 

//iterator
const array1 = ['a', 'b', 'c'];
const iterator1 = array1[Symbol.iterator]();

for (const value of iterator1) {
  console.log(`iterarted values are:${value}`);
}

//alternative iteration
const arr = ['a', 'b', 'c', 'd', 'e'];
const eArr = arr[Symbol.iterator]();
console.log(`alternatively iterated values are:${eArr.next().value}`); 
console.log(`alternatively iterated values are:${eArr.next().value}`); 
console.log(`alternatively iterated values are:${eArr.next().value}`); 
console.log(`alternatively iterated values are:${eArr.next().value}`); 
console.log(`alternatively iterated values are:${eArr.next().value}`); 

//at
const arrays=[1,2,3,4,5,6,7,8,9];
let index = 3;
console.log(`element@index:${index}:${arrays.at(index)}`);
index = -2;
console.log(`element@index:${index}:${arrays.at(index)}`);


//last value return in an array
const cart = ['apple', 'banana', 'pear'];
function returnLast(arr) {
  return arr.at(-1);
}
const item1 = returnLast(cart);
console.log(`last value in the array:${item1}`); 
cart.push('orange');
const item2 = returnLast(cart);
console.log(`last value in the array after push:${item2}`);

//*comparing method
const colors = ['red', 'green', 'blue','brown','black'];
const lengthWay = colors[colors.length-2];
console.log(`the colour at the given position is:${lengthWay}`);
const sliceWay = colors.slice(-3, -2);
console.log(`the colour at the given slice values are:${sliceWay[0]}`);
const atWay = colors.at(-2);
console.log(atWay); 

//concat
const num1 = [[1]];
const num2 = [2, [3]];
const numb = num1.concat(num2);
console.log(`the array obtained after concating:${numb}`);
num1[0].push(4);
console.log(`the array obtained after concating and pushing:${num1}`);

//copying within
const arrays1 = ['a', 'b', 'c', 'd', 'e'];
console.log(`the array obtained after copying within:${arrays1.copyWithin(0, 3 ,4)}`);
console.log(`the array obtained after copying within:${arrays1.copyWithin(1, 3)}`);

//entries
const arra1 = ['a', 'b', 'c','d','e'];
const iterators1 = arra1.entries();
console.log(`the iterated values are as follows:`);
console.log(iterators1.next().value);
console.log(iterators1.next().value);
console.log(iterators1.next().value);
console.log(iterators1.next().value);

//every method
const isSubset = (array1, array2) => array2.every((element) => array1.includes(element));
console.log(`elements of the array2 is a subset of array1:${isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])}`); 
console.log(`elements of the array2 is a subset of array1:${isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])}`); 

//fill method
const a = new Array(3);
for (let i=0; i<a.length; i++) {
  a[i] = new Array(4).fill(1); 
}
a[0][0] = 10;
a[1][0] = 00;
console.log(`the array obtained after filling is :`);
console.log(a[0][0]); 
console.log(a[1][0]); 
console.log(a[2][0]); 

//Modifying each word
let words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
const modifiedWords = words.filter((word, index, arr) => {
  arr[index+1] +=' extra'
  return word.length < 6
})
console.log(`the modified array is :${modifiedWords}`);


// Appending new words
words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
const appendedWords = words.filter((word, index, arr) => {
  arr[index]=`new ${word}`;
  return word.length < 6
})
console.log(`the appended words are as follows:${appendedWords}`);
console.log(`words:${words}`);

// Deleting words
words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
const deleteWords = words.filter((word, index, arr) => {
  arr.pop()
  return word.length < 6
})
console.log(`the deleted words are:${deleteWords}`);

//prime numbers
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(`the prime numbers in the given range are:${array.filter(isPrime)}`);

// filter id
let a5 = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
]
let invalidEntries = 0
function filterByID(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true
  }
  invalidEntries++
  return false;
}
let arrByID = a5.filter(filterByID)
console.log('Filtered Array\n', arrByID);
console.log('Number of Invalid Entries = ', invalidEntries);


//searching an array
let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
function filterItems(arr, query) {
  return arr.filter(function(el) {
    return el.toLowerCase().includes(query.toLowerCase());
  })
}console.log(`the words with pattern ap are:${filterItems(fruits, 'ap')}`);  
console.log(`the words with the pattern an are:${filterItems(fruits, 'an')} `);

//find index
const fr1 = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
const ind = fruits.findIndex((fr1) => fr1=== "blueberries");
console.log(index); 
console.log(fruits[index]); 



console.log(`the prime numbers in the given numbers are :${[4, 6, 8, 12].findLast(isPrime)}`);
console.log(`the prime numbers in the given numbers are :${[4, 5, 7, 8, 9, 11, 12].findLast(isPrime)}`); 

//find last index
const fru = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
const ind1 = fruits.findLastIndex((fru) => fru=== "blueberries");
console.log(`the index of the given fruit is :${ind1}`); 
console.log(`the fruit in the last index is:${fru[ind1]}`); 

//flat method
const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
const a2 = arr4.flat(Infinity);
console.log(`the flattened array is :${a2}`);

//flatmap
const a21 = [1, 2, 3, 4];
const b21 = a21.flatMap((x) => [x, x * 2]);
console.log(`the final output is:${b21}`);

//foreach
const arraySparse = [1, 3,, 7];
let numCallbackRuns = 0;
arraySparse.forEach((element) => {
  console.log(`the elements in the array are:${ element }`);
  numCallbackRuns++;
});
console.log(`the number of times of call backs:${ numCallbackRuns }`);

//from method
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
range(0, 4, 1);
console.log(`the elements in the array are:${range(0,4,1)}`);
range(1, 10, 2);
console.log(`the elements in the array are:${range(1,10,2)}`);

//includes
const ar1 = [1, 2, 3];
console.log(`the element is included in the array:${(ar1.includes(2))}`);
const pets = ['cat', 'dog', 'bat'];
console.log(`the element is included in the array:${pets.includes('cat')}`);
console.log(`the element is included in the array:${pets.includes('at')}`);

//occurance using index of
const indices = [];
const aq = ['a', 'b', 'a', 'c', 'a', 'd'];
const element = 'a';
let idx = aq.indexOf(element);
while (idx !== -1) {
  indices.push(idx);
  idx = aq.indexOf(element, idx + 1);
}
console.log(`the occurance of the given element is in the following index:${indices}`);

//join
const elements = ['Fire', 'Air', 'Water'];
console.log(`after joining:${elements.join()}`);
console.log(`after joining:${elements.join('')}`);
console.log(`after joining:${elements.join('-')}`);

//keys
const arr1 = ['a', 'b', 'c'];
const iterator = arr1.keys();

for (const key of iterator) {
  console.log(`the key values are as follows:${key}`);
}

//pop
const myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
const popped = myFish.pop();
console.log(`the array after popping is :${myFish}`); 
console.log(`the popped element is :${popped}`);

//push
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
console.log(`the count after push is :${count}`);
console.log(`the array after pushing:${animals}`);
animals.push('chickens', 'cats', 'dogs');
console.log(`the array after pushing is :${animals}`);

//reverse
const items = [1, 2, 3];
console.log(items); 
items.reverse();
console.log(items); 

//shift
const mFish = ['angel', 'clown', 'mandarin', 'surgeon'];
console.log('mFish before:', JSON.stringify(mFish));
const shifted = mFish.shift();
console.log('mFish after:', mFish);
console.log('Removed this element:', shifted);

//some
const ar= [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(`the array has even numbers:${ar.some(even)}`);

//sort
const item= [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];
 item.sort(function (a, b) {
  return a.value > b.value?9:-9;
});
console.log(`the sorted array is :${JSON.stringify(item)}`);


//splice method
let Fish = ['angel', 'clown', 'drum', 'sturgeon']
let removed = Fish.splice(2, 1, 'trumpet')
console.log(`the array after splicing is :${Fish}`);
console.log(`the removed element is :${removed}`);

//tolocalstring
const arra = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = arra.toLocaleString('en', { timeZone: 'UTC' });
console.log(`the local string formes is :${localeString}`);

//to string
const a3 = [];
a3.join = 1; 
console.log(`the string obtained is :${a3.toString()}`); 
console.log(`the string obtained after joining is:${Array.prototype.toString.call({ join: () => 1 })}`);

//unshift
let a4 = [4, 5, 6]
a4.unshift(1, 2, 3)
console.log(`the array after unshifting:${a4}`);
a4 = [4, 5, 6] 
a4.unshift(1);
a4.unshift(2);
a4.unshift(3);
console.log(`the array after unshifting is :${a4}`);

//mapping
const map = Array.prototype.map;
const charCodes = map.call('Hello World', (x) => x.charCodeAt(0));
console.log(`the mapped array is :${charCodes}`);

//reduce
const getMax = (a, b) => Math.max(a, b);
const arc = [1, 100].reduce(getMax, 50); 
console.log(`the max value is :${arc}`);

//map and reduce 
const m1 = Array.prototype.map;
const pr1 = map.call([2,3,4,5,6,7,8,9,10,11,12,13,14,15], (x) => isPrime(x));
console.log(`the mapped array is :${pr1}`);
const maxval = (a, b) => Math.max(a, b);
const max1 = [pr1].reduce(maxval, 15); 
console.log(`the max value is :${max1}`);
}
//find last
function isPrime(element) {
  if (element % 2 === 0 || element < 2) {
    return false;
  }
  for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
    if (element % factor === 0) {
      return false;
    }
  }
  return true;
}
module.exports={isPrime,learnArray};








