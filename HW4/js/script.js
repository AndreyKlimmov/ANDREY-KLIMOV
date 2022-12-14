// Дедлайн: 04.08.2022

// 1) Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
const array1 = ['a', 'b', 'c']
const array2 = [1, 2, 3]
const array3 = array1.concat(array2)
console.log(array3)

// 2) Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3. (через push и через splice)
const array4 = ['a', 'b', 'c']
array4.push(1,2,3)
console.log(array4)

const array5 = ['a', 'b', 'c']
array5.splice(3, 0, 1, 2, 3)
console.log(array5)

// 3) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
const array6 = [1, 2, 3, 4, 5]
array6.splice(1, 2)
console.log(array6)

// 4) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
const array7 = [1, 2, 3, 4, 5]
array7.splice(3, 0, 'a', 'b', 'c')
console.log(array7)

// 5) Дан массив const arr = [1, 2, 3, 4, 5]. Создать новый пустой массив arr1. Обойти массив arr через цикл for, каждый элемент массива arr умножить на 10 и результат положить в массив arr1.
const arr = [1, 2, 3, 4, 5]
const arr1 = []
for (let i = 0; i < arr.length; i++) {
	arr1[i] = arr[i]*10
}
console.log(arr1)

// 6) Вывести числа от 4 до 400 на экран.
for (let i = 4; i < 401; i++) {
	console.log(i)
}

// 7) Вывести числа в последовательности: 4 7 10 13 с помощью цикла.
for (let i = 4; i < 14; i+=3) {
	console.log(i)
}

// 8) Вывести числа 654 653 652 до нуля.
for (let i = 654; i > -1; i--) {
	console.log(i)
}

// 9) Вывести все годы с 1983 до 2017.
for (let i = 1983; i < 2018; i++) {
	console.log(i)
}

// 10) Вывести числа -4 -2 0 2 4 6 ...100.
for (let i = -4; i < 101; i+=2) {
	console.log(i)
}

// 11) Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5) 
let sum = 0
for (let i = 0; i < 101; i++) {
	sum += i
}
console.log(sum)

// 12) Заполните массив следующим образом: в первый элемент запишите 'x',
//  во второй 'xx', в третий 'xxx' и так далее. Длину массива вводить через prompt.

// const arrLen = +prompt("Длина массива:")
// const arrX = []
// for (let i = 0; i < arrLen; i++) {
// 	i === 0 ? arrX[i] = 'x':
// 	arrX[i] = arrX[i-1] + 'x'
// }
// console.log(arrX)

// 13) Заполните массив следующим образом: в первый элемент запишите '1',
//  во второй '22', в третий '333' и так далее. Длину массива вводить через prompt.

// const arrLength = +prompt("Длина массива:")
// const arrNum = []
// for (let i = 0; i < arrLength; i++) {
// 	arrNum[i] = String(i+1).repeat(String(i+1))
// }
// console.log(arrNum)

// 14*) нарисовать матрицу x должны быть по краям, 0 в центре. ( длина и высота матрицы не меньше 10 )
// ['x', 'x', 'x', 'x', 'x' 'x', 'x']
// ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
// ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
// ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
// ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
// ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
// ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
// ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
// ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
// ['x', 'x', 'x', 'x', 'x', 'x','x']

let arrMatrix = []
let i = 0
while (i != 10) {
	i++
	arrMatrix.length = 0
	if (i === 1 || i === 10) {
		for (let n = 0; n < 7; n++) {
			arrMatrix[n] = 'x'
		}
	} else {
		for (let n = 0; n < 10; n++) {
			(n === 0 || n === 9) ? arrMatrix[n] = 'x' : arrMatrix[n] = 0
		}
	}
	console.log(arrMatrix)
}

// 15*) нарисовать матрицу (таблица умножения)
// 0: (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 1: (10) [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// 2: (10) [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
// 3: (10) [4, 8, 12, 16, 20, 24, 28, 32, 36, 40]
// 4: (10) [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
// 5: (10) [6, 12, 18, 24, 30, 36, 42, 48, 54, 60]
// 6: (10) [7, 14, 21, 28, 35, 42, 49, 56, 63, 70]
// 7: (10) [8, 16, 24, 32, 40, 48, 56, 64, 72, 80]
// 8: (10) [9, 18, 27, 36, 45, 54, 63, 72, 81, 90]
// 9: (10) [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

let arrTable = []
let m = 0
while (m != 10) {
	m++
	arrTable.length = 0
	for (let n = 0; n < 10; n++) {
		arrTable[n] = (n + 1) * m
	}
	console.log(arrTable)
}

// 16*)	Написать программу которая будет склонять слово
// 	“товар” в зависимости от количества товаров в корзине.
// 	Например 1 - товар, 4 - товара, 6 - товаров.


// тут сразу вводил/выводил всплывающими окнами, но потом циклом запринтил для проверки...

// let goodsInBasket = +prompt("Число в корзине:")
let goodsInBasket
let lastNumber
let qty
for (let i = -130; i < 1130; i++) {
goodsInBasket = i

isNaN(goodsInBasket) || goodsInBasket < 0 || goodsInBasket === '' ? goodsInBasket = 0 : null
lastNumber = goodsInBasket
if (String(lastNumber).length < 2) {
	lastNumber === 1 ? qty = 'товар' :
	lastNumber > 1 && lastNumber < 5 ? qty = 'товара' : qty = 'товаров'
} else {
	lastNumber = lastNumber % 100
	lastNumber > 10 && lastNumber < 15 || lastNumber <= 0 ? qty = 'товаров' : 
	lastNumber % 10 === 1 ? qty = 'товар' :
	lastNumber % 10 > 1 && lastNumber % 10 < 5 ? qty = 'товара' : qty = 'товаров'
}
console.log(goodsInBasket, qty)
}
// alert(goodsInBasket + " " + qty)
