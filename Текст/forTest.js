const textForStart = `<b>Приветствую тебя, фраер,</b>
<b>тебе предстоит пройти испытание дабы ты стал уважаемым человеком!</b>
<b>Данный чат-бот создан для этого.</b>
<b>Перед тем как ты начнешь, знай,</b>
<b>если ты перезагрузишь бота вся информация слетит,</b>
<b>тебе придется заново проходить испытание.</b>
<b>Заполни форму и можешь приступать.</b>
<b>Будь внимателен!</b>`;

const textForBegin = `<b>Мы живем в непростое время, сынок!</b>
<b>Алкоголь дорожает, да и выпить где попало неполучится,</b>
<b>а за дерзко поднятую фитюлю можно приобрести реальный срок.</b>
<b>Так вот, ты все-таки поднял эту фитюлю!</b>
<b>"И что дальше ?" - думаешь ты.</b>
<b>Это тебе не пенсия, где секс, наркотики и рок-н-ролл.</b>
<b>Менты быстро завернули ласты, морда,</b>
<b>асфальт, штаны в говне, а ты еще и пьяный!</b>
<b>Еще мгновение и ты уже подписываешь бумаги,</b>
<b>которые вручает тебе довольный опер, и начинается самое интересное...</b>`;

// const kolan = `<b>Тебя приводят в СИЗО.</b>
// <b>И встречать тебя приходит ни кто-то, а лично сам <i>барон</i>.</b>
// <b>Николай Дёмочка, он же держатель небесного свода,</b>
// <b>он же пол-литра и прочее и прочее.</b>
// <b>Это страшный приступник! Только он может не трезветь</b>
// <b>на протяжении многих суток. Поговаривают, что он сдал</b>
// <b>в ламбард себя, чтобы не выплачивать долги.</b>
// <b>Николай вызвает ставит вас перед выбором либо</b>
// <b>вы перепьете его. либо он снесет вам хлеборезку!</b>`;

const kolan = `Тебя приводят в СИЗО.
И встречать тебя приходит ни кто-то, а лично сам барон.
Николай Дёмочка, он же держатель небесного свода,
он же пол-литра и прочее и прочее.
Это страшный приступник! Только он может не трезветь
на протяжении многих суток. Поговаривают, что он сдал
в ламбард себя, чтобы не выплачивать долги.
Николай ставит вас перед выбором либо
вы перепьете его, либо он снесёт вам хлеборезку!`;

const kolanFight = `Вам везёт! Николай Дёмочка не смог встать.
Ваш авторитет в глазах сокамерников вырос! `;

const kolanDiplomat = `Вам удается договориться с Николаем.
Цена вопроса - несколько ящиков пива.
У вас появился союзник в лице Коли Дёмочки!`;

const toha = `Кто это? Животное? Псих? Деман?
Это Тоха, и он хочет есть!
Взялся хуй знает откуда, посреди ночи`;

const oduvan = `В вашей камере пополнение.
Парень не успел вовремя скинуть фитюлю и теперь он здесь.
Что с ним делать? Решение за вами, поскольку Колю ночью
съел Тоха. Бедняга даже не смог встать со шконки!`;

const kostan = `Сокамерник предлагает вам 
поставить ширкой. Вы задаётесь вопросом:
"откуда на хате ширка? Немного прихуев, вы принимаете решение."`;

const extract = `<b>Всего трое суток ты просидел в СИЗО,</b>
<b>а уже стал другим человеком!</b>
<b>Идя по длинным коридорам, в сопровождении конвоя,</b>
<b>ты видешь вдалеке свет - это воля!</b>`;

const klim = `На выходе тебя встречает 
кореной русский Абу Клим аль-Джабаль (Неподвижная гора).
Он крутит ножечком, произносит согласные буквы,
и как-то странно смотрит на твою золотую цепочку.`;

const printEnd = `
<b>Поздавляю! Вы успешно прошли испытание!</b>
<b>Теперь вам доступен блатной цитатник и </b>
<b>словарь. Если вам угодно перепройти испытание, выберите команду /start</b>`;

module.exports.textForStart = textForStart;
module.exports.textForBegin = textForBegin;
module.exports.kolan = kolan;
module.exports.kolanFight = kolanFight;
module.exports.kolanDiplomat = kolanDiplomat;
module.exports.toha = toha;
module.exports.oduvan = oduvan;
module.exports.kostan = kostan;
module.exports.extract = extract;
module.exports.klim = klim;
module.exports.printEnd = printEnd;
