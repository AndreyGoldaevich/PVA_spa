const me = {
	siteName: 'Red Links',
	avatar: '/avatar.jpeg',
	description:
		'<p>Привет, я Андрей специалист на рынке Frontend разработки, да я учусь каждый день, и не стесняюсь этого, ' +
		'и уже сейчас я многое умею. Я отлично знаю HTML5, CSS3, SASS, Gulp, JS, Vue, Node JS</p>' +
		'<p>Я активно прокачиваю свои скилы в вэб разработке с уклоном на frontend часть.</p>' +
		'<p>Да в некоторых областях я не могу назвать себя профи, но у меня полно желания довести себя до этого состояния.</p>' +
		'<p>В данный момент я готов выполнять работы, связанные с версткой и разработкой, я активно изучаю JS, Vue.js и ' +
		'рассчитываю в ближайшие полгода вырасти до полноценного Middle Frontend Developer. Итак, будем знакомы. 😊</p>'
}

export default function handler(req, res) {
	res.status(200).json(me)
}
