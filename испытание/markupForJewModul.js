const { Markup } = require("telegraf");

// Для Коляна
const forKolanJew = Markup.inlineKeyboard([
  [Markup.button.callback("Выпить", "drink")],
  [Markup.button.callback("Вступить в драку", "fight")],
  [Markup.button.callback("Договориться", "kolaDiplomat")],
]);

const forKolan = Markup.inlineKeyboard([
  [Markup.button.callback("Выпить", "drink")],
  [Markup.button.callback("Вступить в драку", "fight")],
]);

module.exports.forKolanJew = forKolanJew;
module.exports.forKolan = forKolan;

// Для Тохи
const forTohaJew = Markup.inlineKeyboard([
  [Markup.button.callback("Обосраться", "decisionOne")],
  [Markup.button.callback("Обдристаться", "decisionTwo")],
  [Markup.button.callback("Я не знаю этих людей", "iDontKnow")],
  [Markup.button.callback("Договориться", "tohaDiplomat")],
]);

const forToha = Markup.inlineKeyboard([
  [Markup.button.callback("Обосраться", "decisionOne")],
  [Markup.button.callback("Обдристаться", "decisionTwo")],
  [Markup.button.callback("Я не знаю этих людей", "iDontKnow")],
]);

module.exports.forTohaJew = forTohaJew;
module.exports.forToha = forToha;

// Для Клима
const forKlimJew = Markup.inlineKeyboard([
  [Markup.button.callback("Отдать цепочку", "giveThing")],
  [Markup.button.callback("Не понимаю по-русски", "iDontRus")],
  [Markup.button.callback("Договориться (не поможет)", "klimDiplomat")],
]);

const forKlim = Markup.inlineKeyboard([
  [Markup.button.callback("Отдать цепочку", "giveThing")],
  [Markup.button.callback("Не понимаю по-русски", "iDontRus")],
]);

module.exports.forKlimJew = forKlimJew;
module.exports.forKlim = forKlim;
