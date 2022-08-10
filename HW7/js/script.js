// Src урла для картинок https://random.imagecdn.app/500/500
// FIGMA TEMPLATE https://www.figma.com/file/jJRtgzfB5JVV073excALFe/Untitled?node-id=0%3A1
// Создать сайт, с карточками NFT.
// 1. За несовпадение по дизайну (апрува на ПР не будет) верстаем с душой.
// 2. В HTML У вас только контейнер, фон и кнопка, карточки идут рендером из JS.
// 3. Клик по кнопке GENERATE NEW NFT, создает новую карточку с рандомной картинкой по 
// урле указанной выше ( img src= урла ), на данном этапе задача стоит только в создании 
// карточек.
// 4. Добавить :hover еффект наведения на карточку, + реализовать удаление карточки из спика.

for (let i = 0; i < 10; i++) {
	let a = document.createElement('div');
	a.className = 'bg';
	a.id = `bg${i+1}`;
	container.appendChild(a);
}

let cardsBlock = document.createElement('div');
cardsBlock.className = 'cards-block';
container.appendChild(cardsBlock);

let cards = []
const generateBtn = document.querySelector('.btn')
generateBtn.addEventListener('click', () => {
	cards.push(generateCard())
	cardRender()
})

function generateCard() {
	return {
		id: getRendomId(),
		name: 'Card Name',
		description: 'card description'
	}
}

function getRendomId() {
	return Math.floor(Math.random() * 10000)
}

function cardRender() {
	let result = ''

	for (let i = 0; i < cards.length; i++) {

		result += `
			<div class="card-wrapper">
				<div class="card">
					<div class="image"></div>
					<div class="name">${cards[i].name}</div>
					<div class="description">${cards[i].description}</div>
				</div>
				<div class="block-remove">
					<img class="trash-icon" src="img/trash.png" onclick="deleteCard(${cards[i].id})" alt="trash icon">
				</div>
			</div>
		`
	}
	cardsBlock.innerHTML = result
}

function deleteCard(cardId) {
	cards = cards.filter(el => el.id !== cardId)
	cardRender()
}

const style = document.createElement('style');
style.innerHTML = `
	.bg {
		position: absolute;
		background: #FFFFFF;
		box-shadow: 12px 32px 80px -20px rgba(0, 0, 0, 0.12);
		border-radius: 32px;
	}
	#bg1 {
		width: 137px;
		height: 137px;
		margin: 68px auto auto 74px;
	}
	#bg2 {
		width: 25px;
		height: 25px;
		margin: 453px auto auto 91px;
	}
	#bg3 {
		width: 51px;
		height: 51px;
		margin: 337px auto auto 238px;
	}
	#bg4 {
		width: 83px;
		height: 83px;
		margin: 68px auto auto 1134px;
	}
	#bg5 {
		width: 63px;
		height: 63px;
		margin: 453px auto auto 1217px;
	}
	#bg6 {
		width: 90px;
		height: 90px;

		margin: 484px auto auto 364px;
	}
	#bg7 {
		width: 90px;
		height: 90px;
		margin: 484px auto auto 895px;
	}
	#bg8 {
		width: 90px;
		height: 90px;
		margin: 23px auto auto 730px;
	}
	#bg9 {
		width: 42px;
		height: 42px;
		margin: 294px auto auto 1134px;
	}
	#bg10 {
		width: 42px;
		height: 42px;
		margin: 47px auto auto 454px;
	}
	.cards-block {
		position: absolute;
		width: 1347px;
		height: 1107px;
		margin-top: 665px;
		padding: 0 0 0 53px;
		background: #000;

		display: flex;
		flex-wrap: wrap;
		justify-content: left;
		align-content: flex-start;
	}
	.card {
		box-sizing: border-box;

		position: relative;
		width: 178px;
		height: 251px;

		background: #3E3E3E;
		border-radius: 12px;

		// margin: 0 43px 34px 0;
		cursor: pointer;
		z-index: 1;
	}
	.card-wrapper {
		// background: green;
		width: 178px;
		height: 274px;
		margin: 0 43px 11px 0;
	}
	.card-wrapper:hover  .block-remove{
		display: block;
		display: flex;
	    justify-content: center;
	    align-items: bottom;

		box-sizing: border-box;

		position: absolute;
		top: 23px;
		width: 174px;
		height: 251px;

		background: #fff;
		border-radius: 9px;

		// margin: 0 43px 34px 2px;
		padding: 0px;
		cursor: pointer;
	}
	.image {
		position: absolute;
		left: 3.77%;
		right: 3.77%;
		top: 2.56%;
		bottom: 19.87%;

		background: url(https://random.imagecdn.app/500/500);
		border-radius: 10px;
	}
	.name {
		position: absolute;
		left: 9.43%;
		right: 46.7%;
		top: 6.41%;
		bottom: 85.9%;

		font-family: 'Space Grotesk', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 19px;
		line-height: 24px;
		letter-spacing: -0.04em;

		color: #FFFFFF;
	}
	.description {
		position: absolute;
		left: 9.43%;
		right: 31.13%;
		top: 86.54%;
		bottom: 6.41%;

		font-family: 'Space Grotesk', sans-serif;
		font-style: normal;
		font-weight: 500;
		font-size: 17px;
		line-height: 22px;
		display: flex;
		align-items: flex-end;
		letter-spacing: -0.04em;

		color: #FFFFFF;
		text-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
	}
	.block-remove {
		display: none;
	}
	.trash-icon {
		position: absolute;
		bottom: 0px;
		width: 23px;
		height: 23px;
	}
`;
document.head.appendChild(style);
