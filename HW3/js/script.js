// Дедлайн!!! 01.08.2022

// 1 - Создать переменную каждого типа данных.
    // Undefined (Неопределённый тип)  : typeof instance === "undefined"
let name
    // Boolean (Булев, Логический тип) : typeof instance === "boolean"
const flag = true
    // Number (Число) : typeof instance === "number"
const number0 = 100
    // String (Строка) : typeof instance === "string"
const string = "Anna"
    // BigInt  : typeof instance === "bigint"
const bigInteger = 9007199254740991n
    // Symbol (в ECMAScript 6)  : typeof instance === "symbol"
var myPrivateMethod = Symbol()
    // Null (Null тип ) : typeof instance === "object"
let temp = null
    // Object (Объект) : typeof instance === "object"
var myCar = new Object()


// test
console.log("\ntask 1:", '\n', typeof(name), '\n', typeof(flag), '\n', typeof(number0), '\n', typeof(string), '\n',
    typeof(bigInteger), '\n', typeof(myPrivateMethod), '\n', typeof(temp), '\n', typeof(myCar), '\n')






// 2 - Создать переменную var, let, const. Перезаписать их значения(не для const).
var a = 'word'
let b = 2
const c = true

a = false
b = "sentence"






// 3 - Привести тип каждого типа данных хотя бы 2-3мя способами(Google).

    // Undefined (Неопределённый тип)  : typeof instance === "undefined"
let name3
name3 = "some string"
name5 = +name3
    // Boolean (Булев, Логический тип) : typeof instance === "boolean"
var flag3 = true
flag3 = 0
flag5 = Boolean(flag3)
    // Number (Число) : typeof instance === "number"
const number3 = 100
number4 = String(number3)
number5 = Number(number4)
    // String (Строка) : typeof instance === "string"
let string3 = "Anna"
string3 = 1
string5 = Boolean(string3)
    // BigInt  : typeof instance === "bigint"
let bigInteger3 = 9007199254740991n
bigInteger3 = 0
bigInteger5 = Object(bigInteger3)
    // Symbol (в ECMAScript 6)  : typeof instance === "symbol"
var  myPrivateMethod3  = Symbol()
myPrivateMethod3  = 1
myPrivateMethod5  = myPrivateMethod3/0
    // Null (Null тип ) : typeof instance === "object"
let temp3 = null
temp3 = 0
temp5 = BigInt(temp3)
    // Object (Объект) : typeof instance === "object"
var myCar3 = new Object()
myCar3 = null
myCar5 = Boolean(myCar3)


// test
console.log("\ntask 3:", '\n', name3 + ' ->', typeof(name3), "\n", flag3 + ' ->', typeof(flag3), "\n",
    number4 + ' ->', typeof(number4), "\n", string3 + ' ->', typeof(string3), "\n",
    bigInteger3 + ' ->', typeof(bigInteger3), "\n", myPrivateMethod3 + ' ->', typeof(myPrivateMethod3), "\n",
    temp3 + ' ->', typeof(temp3), "\n", myCar3 + ' ->', typeof(myCar3), '\n')
console.log(name5 + ' ->', typeof(name5), "\n", flag5 + ' ->', typeof(flag5), "\n", number5 + ' ->', typeof(number5), "\n",
    string5 + ' ->', typeof(string5), "\n", bigInteger5 + ' ->', typeof(bigInteger5), "\n",
    myPrivateMethod5 + ' ->', typeof(myPrivateMethod5), "\n", temp5 + ' ->', typeof(temp5), "\n", myCar5 + ' ->', typeof(myCar5), '\n')






// 4 - Сделать сложение: строка с каждым типом данных; числа с каждым типом данных.
console.log("\ntask 4:")

const someWord = "some string "
let sum = someWord + undefined
console.log(sum + ' ->', typeof(sum))
sum = someWord + true
console.log(sum + ' ->', typeof(sum))
sum = someWord + 22
console.log(sum + ' ->', typeof(sum))
sum = someWord + "again"
console.log(sum + ' ->', typeof(sum))
sum = someWord + 9007199254740991n
console.log(sum + ' ->', typeof(sum))
const d = Symbol()
// sum = someWord + d
// console.log(sum + ' ->', typeof(sum))
sum = someWord + null
console.log(sum + ' ->', typeof(sum))
sum = someWord + Object(someWord)
console.log(sum + ' ->', typeof(sum))


const someNumber = 111
sum = someNumber + undefined
console.log(sum + ' ->', typeof(sum))
sum = someNumber + true
console.log(sum + ' ->', typeof(sum))
sum = someNumber + 22
console.log(sum + ' ->', typeof(sum))
sum = someNumber + " again"
console.log(sum + ' ->', typeof(sum))
// sum = someNumber + 9007199254740991n
// console.log(sum + ' ->', typeof(sum))
// sum = someNumber + d
// console.log(sum + ' ->', typeof(sum))
sum = someNumber + null
console.log(sum + ' ->', typeof(sum))
sum = someNumber + Object(someNumber)
console.log(sum + ' ->', typeof(sum))






// 5 - Слелать отнимание: строка с каждым типом данных; числа с каждым типом данных.
console.log("\ntask 5:")

const stringWord = "100"
sum = stringWord - undefined
console.log("String - types:", "\n", sum + ' ->', typeof(sum))
sum = stringWord - true
console.log(sum + ' ->', typeof(sum))
sum = stringWord - 22
console.log(sum + ' ->', typeof(sum))
sum = stringWord - "again"
console.log(sum + ' ->', typeof(sum))
// sum = stringWord - 9007199254740991n
// console.log(sum + ' ->', typeof(sum))
// sum = stringWord - d
// console.log(sum + ' ->', typeof(sum))
sum = stringWord - null
console.log(sum + ' ->', typeof(sum))
sum = stringWord - Object(stringWord)
console.log(sum + ' ->', typeof(sum))


const someNumber1 = 111
sum = someNumber1 - undefined
console.log("Number - types:", "\n", sum + ' ->', typeof(sum))
sum = someNumber1 - true
console.log(sum + ' ->', typeof(sum))
sum = someNumber1 - 22
console.log(sum + ' ->', typeof(sum))
sum = someNumber1 - " again"
console.log(sum + ' ->', typeof(sum))
// sum = someNumber1 - 9007199254740991n
// console.log(sum + ' ->', typeof(sum))
// sum = someNumber1 - d
// console.log(sum + ' ->', typeof(sum))
sum = someNumber1 - null
console.log(sum + ' ->', typeof(sum))
sum = someNumber1 - Object(someNumber1)
console.log(sum + ' ->', typeof(sum))






// 6 - Задача (Условный оператор)
//  Пользователь вводит логин и пароль.
//  Если логин и пароль совпадают с указанными ниже, (для проверки login: 'kykold' password: '1234asdQQ')
//  то выводится «Добро пожаловать». Если не совпадают –
//  то «Ошибка входа».

// const login = 'kykold'
// const password = '1234asdQQ'
// let userLogin = prompt("Your login:")
// let userPassword = prompt("Your password:")
// if (userLogin === login && userPassword === password) {
//     alert("Добро пожаловать")
// } else {alert("Ошибка входа")}






// 7 - Задача (Условный оператор)
//  Пользователь вводит год рождения. Программа показывает количество
//  лет и если лет больше или равно 16, то пишет – «добро пожаловать»,
//  если нет – «вход воспрещен».

// let userBirthYear = prompt("Your year of birth:")
// let currentYear = new Date().getFullYear()
// let age = currentYear - Number(userBirthYear)
// let messagePrint = 0
// if (age >= 16) {
//     messagePrint = "добро пожаловать"
// } else {messagePrint = "вход воспрещен"}
// alert("Your age: " + age + "\n" + messagePrint)






// 8 - Задача (Условный оператор)
//  Создайте программу, которая выводит надбавку за стаж.
//  Пользователь вводит стаж работы, а программа пишет ему надбавку.
 
// let userWorkExperience = prompt("Your work experience:")
// if (userWorkExperience >= 30) {
//     alert("Your premium: " + "15%")
// } else if (userWorkExperience >= 20) {
//     alert("Your premium: " + "10%")
// } else if (userWorkExperience >= 10) {
//     alert("Your premium: " + "5%")
// } else {alert("Your premium: " + "1%")}






// 9 - Задача (Условный оператор и свитч кейс)
//  Пользователь вводит число, показывает день недели в зависимости от числа (1 = 'Monday', 2 = 'Tuesday', и так далее)
//  9.1 Решить на иф елсах
//  9.2 Решить на свитч кейсе
//  9.3 Решить на тернарном операторе

// let weekDay = +prompt("Enter day of the week:")

// if (weekDay === 1) {alert('Monday')}
// if (weekDay === 2) {alert('Tuesday')}
// if (weekDay === 3) {alert('Wednesday')}
// if (weekDay === 4) {alert('Thursday')}
// if (weekDay === 5) {alert('Friday')}
// if (weekDay === 6) {alert('Saturday')}
// if (weekDay === 7) {alert('Sunday')}


// switch (weekDay) {
//     case 1:
//         alert('Monday')
//         break
//     case 2:
//         alert('Tuesday')
//         break
//     case 3:
//         alert('Wednesday')
//         break
//     case 4:
//         alert('Thursday')
//         break
//     case 5:
//         alert('Friday')
//         break
//     case 6:
//         alert('Saturday')
//         break
//     case 7:
//         alert('Sunday')
//         break
// }


// weekDay === 1 ? alert('Monday') :
// weekDay === 2 ? alert('Tuesday') :
// weekDay === 3 ? alert('Wednesday') :
// weekDay === 4 ? alert('Thursday') :
// weekDay === 5 ? alert('Friday') :
// weekDay === 6 ? alert('Saturday') :
// weekDay === 7 ? alert('Sunday') : null






// 10 - Задача (Условный оператор)
//  Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
//  1, если значение больше нуля,
//  -1, если значение меньше нуля,
//  0, если значение равно нулю.

// let userInput = prompt("Number:")
// if (Number(userInput) > 0) {
//     alert(1)
// } else if (Number(userInput) < 0) {
//     alert(-1)
// } else if (Number(userInput) === 0) {
//     alert(0)
// }






// 11 - Задача (Тернарный оператор)
// Перепишите if..else с использованием нескольких операторов '?'.

let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// login === 'Сотрудник' ? message = 'Привет' :
// login === 'Директор' ? message = 'Здравствуйте' :
// login === '' ? message = 'Нет логина' : message = ''






// 12 - Задача (Условный оператор)
//  В первом подъезде квартиры с 1 по 20. Во втором с 21 по 48. В третьем с 49 по 90.
//  Пользователь вводит номер квартиры. Программа должна указать в каком подъезде находится данная квартира.

// let userApartNum = prompt("Your apartment number:")
// if (userApartNum >= 1 && userApartNum <= 20) {
//     alert("Your porch: #1")
// } else if (userApartNum >= 21 && userApartNum <= 48) {
//     alert("Your porch: #2")
// } else if (userApartNum >= 49 && userApartNum <= 90) {
//     alert("Your porch: #3")
// }






// 13 - Задача (Условный оператор)
// Напишите if..else, соответствующий следующему switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

// let browser = prompt("browser")
// if (browser === 'Edge') {
//     alert( "You've got the Edge!" )
// } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//     alert( 'Okay we support these browsers too' )
// } else alert( 'We hope that this page looks ok!' )






// 14 - Задача (свитч кейс)
// Переписать условия "if" на "switch"
// важность: 4
// Перепишите код с использованием одной конструкции switch:

// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

// const number = +prompt('Введите число между 0 и 3', '')

// switch (number) {
//     case 0:
//         alert('Вы ввели число 0')
//         break
//     case 1:
//         alert('Вы ввели число 1')
//         break
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3')
//         break
//     default:
// }



