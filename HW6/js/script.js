// DeadLine: 11.08.2022

// 1) Задание на классы:
//  1.1) Создать абстрактный класс Human
// 	Обязательные свойства: рост, вес, имя, год рождения(использовать формат Date), пол, наличие инвалидности(boolean).
// 	Обязательные методы: приветствие('Привет, меня зовут ИМЯ_ЧЕЛОВЕКА'), возможность смены имени, изменить инвалидность, получить все данные о человеке.

class Human {
	#name
	#disability
	constructor(weight, hight, name, yearOfBirth, sex, disability) {
		this.weight = weight
		this.hight = hight
		this.#name = name
		this.yearOfBirth = new Date()
		// this.yearOfBirth = yearOfBirth.getFullYear()
		this.sex = sex
		this.#disability = Boolean(disability)
	}

	greet() {
		console.log(`Привет, меня зовут ${this.#name}`)
	}

	set setName(name) {
		this.#name = name
	}

	set setDisability(disability) {
		this.#disability = Boolean(disability)
	}

	get getHumanData() {
		const humanData = {
			'weight': this.weight,
			'hight': this.hight,
			'name': this.#name,
			'yearOfBirth': this.yearOfBirth.getFullYear(),
			'sex': this.sex,
			'disability': this.#disability
		}
		return humanData
	}

}
// console.log(Human)
// const person1yearOfBirth = new Date(98, 1);
const person1yearOfBirth = 1998;

const person1 = new Human(60, 175, 'Anna', person1yearOfBirth, 'female', 0)
console.log(person1.getHumanData)
person1.greet()
person1.setName = 'Elena'
person1.setDisability = 1 
console.log('Person data: ', person1.getHumanData)






//  1.2) Создать два класса(которые должны зависеть от абстракции):
// 	- Фронтенд разработчик
// 	- Строитель

class FrontDev {
	constructor(name, phone, experience, frameworks, projects, country, remote) {
		this.name = name
		this.phone = phone
		this.experience = experience
		this.frameworks = frameworks
		this.projects = projects
		this.country = country
		this.remote = Boolean(remote)
	}

	greet() {
		console.log(`Привет, меня зовут ${this.name}`)
	}

	// set setName(name) {
	// 	this.name = name
	// }
}

class Builder {
	constructor(name, phone, experience, area, projects, country) {
		this.name = name
		this.phone = phone
		this.experience = experience
		this.area = area
		this.projects = projects
		this.country = country
	}

	greet() {
		console.log(`Привет, меня зовут ${this.name}`)
	}
}






//  1.3) Класс Фронтенд разработчик:
// 	Добавить доп. свойства:
// 		- начало карьеры(формат Date),
// 		- предыдущие компании(массив объектов 
// 			{
// 				start: new Date(),
// 				end: new Date(),
// 				salaryPerMonth: number,
// 				position: 'middle' или 'junior' или 'senior',
// 				companyName: 'Oracle',
// 			})
// 	Добавить доп. методы:
// 		- изменить приветствие на 'Привет, меня зовут ИМЯ_ЧЕЛОВЕКА, я Фронтенд разработчик. Работаю с 03.08.2022.(использовать начало карьеры)'.
// 		- добавить метод, который покажет сколько всего заработал за всю карьеру (использовать массив предыдущие компании,
// 		высчитать количество отработанных ПОЛНЫХ месяцев в каждой компании умноженный на salaryPerMonth для получения дохода в одной компании,
// 		в результате должна быть общая сумма со всех компаний(общий доход за всю историю))
// 		- добавить метод, который позволит используя имя компании показать историю моей работы в ней(вывести объект из массива предыдущие компании по ее имени)
// 		- возможность добавить компанию в массив предыдущих компаний по примеру объекта выше

const frontDev1 = new FrontDev()
frontDev1.careerStart = new Date(2015, 0, 2)
frontDev1.prevCompanies = [
	{
		start: frontDev1.careerStart,
		end: new Date(2018, 0, 31),
		salaryPerMonth: 1000,
		position: 'junior',
		companyName: 'Oracle',
	},
	{
		start: new Date(2018, 1, 1),
		end: new Date(),
		salaryPerMonth: 2500,
		position: 'middle',
		companyName: 'Amazon',
	}
]
frontDev1.name = "Ivo"
frontDev1.greet = function() {
	let dd = this.careerStart.getDate()
	if (dd < 10) dd = '0' + dd

	let mm = this.careerStart.getMonth() + 1
	if (mm < 10) mm = '0' + mm

	let yyyy = this.careerStart.getFullYear()

	console.log(`Привет, меня зовут ${this.name}, я Фронтенд разработчик. Работаю с ${dd}.${mm}.${yyyy}`)
}
frontDev1.greet()
// console.log(frontDev1.prevCompanies[0])


frontDev1.countIncome = function() {
	function monthDiff(d1, d2) {
	    var months;
	    months = (d2.getFullYear() - d1.getFullYear()) * 12;
	    months -= d1.getMonth() + 1;
	    months += d2.getMonth();
	    return months <= 0 ? 0 : months;
	}
	let sum = 0
	if (this.prevCompanies) {
		this.prevCompanies.forEach((el) => {
		sum += monthDiff(el['start'], el['end']) * el['salaryPerMonth']
	})
		console.log(`Your total income: ${sum} $`)
		// this.prevCompanies[0]['start'] = 'zon'
	} else {
		console.log('No experience, your total income: 0 $')
	}
}
frontDev1.countIncome()
// console.log(frontDev1.prevCompanies[1]['companyName'])


frontDev1.searchByCompany = function(companyName) {
	this.prevCompanies.forEach((el) => {
		if (el['companyName'] === companyName) console.log(el)
	})
}
frontDev1.searchByCompany('Amazon')

frontDev1.addCompany = function(companyName) {
	const companyFieldKeys = ['start', 'end', 'salaryPerMonth', 'position', 'companyName']
	const obj = companyFieldKeys.reduce((obj, key) => {
		// console.log(key, typeof (key))
		key === 'companyName' ? obj[key] = companyName :
		key === 'start' || key === 'end' ? obj[key] = new Date(0) :
    	obj[key] = 0;
    	return obj;
	},
	  {}
	);
	this.prevCompanies.push(obj)
// console.log(obj);
}
frontDev1.addCompany('Rozetka')

// console.log(frontDev1.prevCompanies);






//  1.4) Класс Строитель:
// 	Добавить доп. свойства:
// 		- локация строительного объекта(строка)
// 		- набор инструментов (массив строк ['кирка', 'топор'])
// 		- скорость выполнения работы на один квадратный метр (количество минут - number)
// 	Добавить доп. методы:
// 		- метод построить дом (принимает в себя количество квадратных метров) - должен показать сколько дней займет постройка дома текущим мастером
// 		если меньше одного дня - показать количество часов
// 		если больше одного дня - показать количество дней и часов
// 		если больше недели - показать количество недель дней и часов
// 		если больше месяца - показать количество месяцев недель дней и часов
// 		если больше года - показать количество лет месяцев недель дней и часов

const builder1 = new Builder()
builder1.objLocation = ''
builder1.toolSet = ['screwdriver', 'hummer', 'knife', 'wrench', 'pliers', 'marker', 'ruler']
builder1.speedOfMeter = 122

builder1.buildHouse = function(sqrMeters) {
	let minutes = sqrMeters * this.speedOfMeter
	let hours = Math.floor(minutes / 60)
	let days = Math.floor(hours / 24)
	let weeks = Math.floor(days / 7)
	let months = Math.floor(weeks / 4)
	let years = Math.floor(months / 12)

	if (hours) minutes = minutes - hours * 60
	if (days) hours = hours - days * 24
	if (weeks) days = days - weeks * 7
	if (months) weeks = weeks - months * 4
	if (years) months = months - years * 12

	let duration = (years ? years > 1 ? years + ' years ' : years + ' year ' : '') +
		(months ? months > 1 ? months + ' months ' : months + ' month ' : '') +
		(weeks ? weeks > 1 ? weeks + ' weeks ' : weeks + ' week ' : '') +
		(days ? days > 1 ? days + ' days ' : days + ' day ' : '') +
		(hours ? hours > 1 ? hours + ' hours ' : hours + ' hour ' : '') +
		(minutes ? minutes > 1 ? minutes + ' minutes' : minutes + ' minute' : '')
	return `Building of the house will take: ${duration ? duration : 'please point in minutes'}`
}
console.log(builder1.buildHouse(4000))
