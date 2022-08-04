// Deadline: 08.08.2022

// 1) Написать функцию которая первым принимает значение, которым заполнять массив,
//  а вторым - сколько элементов должно быть в массиве.
//  Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

function arrayFill(arrValue, arrLength) {
	return Array(arrLength).fill(arrValue)
}
const array = arrayFill('hi', 3)
console.log(array)

// 2) Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет,
// что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

function isNumberInRange(num) {
	return (num > 0 && num < 10)
}
console.log(isNumberInRange(10.8))

// 3) Сделайте функцию isEven() (even - это четный), которая параметром принимает
// целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

function isEven(num) {
	return (num % 2 == 0)
}
console.log(isEven(8))

// 4) Дан массив с целыми числами. Создайте из него новый массив,
// где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

const array1 = [1, -2, 3, -4, 5, 6, 7, 8, 9, 10]
const arrayEven = []
let j = 0 
for (let i = 0; i < array1.length; i++) {
	isEven(array1[i]) ? (arrayEven[j] = array1[i], j++) : null
}
console.log(arrayEven)

// 5) Создайте функцию, которая получает два параметра – число и степень числа.
// Используя ** внутри функции, возведите число в степень и выведите с помощью console.log.

function exponent(num, exp) {
	return num**exp
}
console.log(exponent(2, 4))

// 6) Функция принимает параметр - возраст пользователя.
// Если число больше 16 – то выводим «добро пожаловать», если меньше – “вы еще молоды”.

// function ageCheck(age) {
// 	return 
// }
// alert(ageCheck(+prompt("Your age:")))

// 7) Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал параметр в функцию.
//  В таком случае выведите сообщение – “Введите возраст”.
//   Реализуйте два вида проверки наличия аргумента – проверка на undefined и оператор ||.

// function ageCheck(age) {
// 	return age === '' || age === undefined  || +age <= 0  || isNaN(age) ? "Введите возраст" :
// 	age > 16 ? "добро пожаловать" : "вы еще молоды"
// }
// alert(ageCheck(prompt("Your age:")))

// 8) Дана строка. Сделайте заглавным первый символ каждого слова этой строки.
// Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку,
// делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.

function ucfirst(str) {
	if (!str) return str
	str = str.split(" ")
	let arr = []
	let j = 0
	str.forEach(function(item, i, str) {
		item != "" ? (arr[j] = item[0].toUpperCase() + item.slice(1), j++) : null
	})
	return arr.join(" ")
}
console.log(ucfirst(' заглавным первый символ каждого слова '))

// 9) Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'. ( с помощью функции, которая принимает строку)

function stringFormat(str) {
	str = str.split("_")
	let arr = []
	str.forEach(function(item, i, str) {
		i === 0 ? arr[i] = item : arr[i] = item[0].toUpperCase() + item.slice(1)
	})
	return arr.join('')
}
console.log(stringFormat('var_text_hello'))

// 10) Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
// Функция первым параметром должна принимать текст элемента, а вторым - массив,
// в котором делается поиск. Функция должна возвращать true или false.

function inArray(text, arr) {
	arr.forEach(function(item, i, arr) {
		item === text ? a = true : a = false
	})
	return a
}
console.log(inArray('test', ['word', 'test']))
