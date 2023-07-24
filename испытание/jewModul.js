const { Telegraf, Markup } = require("telegraf");
const forTest = require("../Текст/forTest.js");
let prevMessage = null;

const markupForJewModul = require("./markupForJewModul.js");

// Начало
async function begin(ctx) {
  try {
    await ctx.answerCbQuery();
    await ctx.deleteMessage();
    await ctx.replyWithHTML(
      forTest.textForBegin,
      Markup.inlineKeyboard([[Markup.button.callback("Продолжить", "kolan")]])
    );
  } catch (e) {
    console.error(e);
  }
}

// Коля
async function kolan(ctx, isJew) {
  try {
    await ctx.answerCbQuery();
    await ctx.deleteMessage();
    await ctx
      .replyWithPhoto(
        { source: "./материалы для бота/kolanOne.jpg" },
        { caption: forTest.kolan }
      )
      .then((message) => (prevMessage = message.message_id));

    if (isJew) {
      await ctx.reply("Выберите дейтсвие: ", markupForJewModul.forKolanJew);
    } else {
      await ctx.reply("Выберите действие: ", markupForJewModul.forKolan);
    }
  } catch (e) {
    console.error(e);
  }
}

async function drinkKolan(ctx) {
  try {
    await ctx.answerCbQuery();
    await ctx.deleteMessage(prevMessage);
    await ctx.editMessageText(
      "Вы сдохли от передоза этанолом, Коля еще трезвый!",
      Markup.inlineKeyboard([[Markup.button.callback("Переиграть", "kolan")]])
    );
  } catch (e) {
    console.error(e);
  }
}

async function fightKolan(ctx) {
  try {
    await ctx.answerCbQuery();
    await ctx.deleteMessage();
    await ctx.deleteMessage(prevMessage);

    await ctx
      .replyWithPhoto(
        { source: "./материалы для бота/kolanTwo.jpg" },
        { caption: forTest.kolanFight }
      )
      .then((message) => (prevMessage = message.message_id));
    await ctx.reply(
      "Нажмите для продолжения: ",
      Markup.inlineKeyboard([
        [Markup.button.callback("Продолжить", "kolanEnd")],
      ])
    );
  } catch (e) {
    console.error(e);
  }
}

async function kolaDiplomat(ctx) {
  try {
    await ctx.answerCbQuery();
    await ctx.deleteMessage();
    await ctx.deleteMessage(prevMessage);

    await ctx
      .replyWithPhoto(
        { source: "./материалы для бота/kolanThree.jpg" },
        { caption: forTest.kolanDiplomat }
      )
      .then((message) => (prevMessage = message.message_id));
    await ctx.reply(
      "Нажмите для продолжения: ",
      Markup.inlineKeyboard([
        [Markup.button.callback("Продолжить", "kolanEnd")],
      ])
    );
  } catch (e) {
    console.error(e);
  }
}

// Тоха
async function toha(ctx, isJew) {
  try {
    await ctx.answerCbQuery();

    if (prevMessage) await ctx.deleteMessage(prevMessage);

    await ctx.deleteMessage();

    await ctx
      .replyWithPhoto(
        { source: "./материалы для бота/toha.png" },
        { caption: forTest.toha }
      )
      .then((message) => (prevMessage = message.message_id));

    if (isJew) {
      await ctx.reply("Выберите дейтсвие: ", markupForJewModul.forTohaJew);
    } else {
      await ctx.reply("Выберите дейтсвие: ", markupForJewModul.forToha);
    }
  } catch (e) {
    console.error(e);
  }
}

async function decisionOne(ctx) {
  try {
    await ctx.answerCbQuery();
    await ctx.deleteMessage(prevMessage);
    await ctx
      .editMessageText(
        "Вас съели!",
        Markup.inlineKeyboard([
          [Markup.button.callback("Переиграть", "kolanEnd")],
        ])
      )
      .then(() => (prevMessage = null));
  } catch (e) {
    console.error(e);
  }
}

async function decisionTwo(ctx) {
  try {
    await ctx.answerCbQuery();
    await ctx.deleteMessage(prevMessage);
    await ctx
      .editMessageText(
        `Вас съели! Подсказка: Тохе нравится, когда его боятся (мясо жёстче!)`,
        Markup.inlineKeyboard([
          [Markup.button.callback("Переиграть", "kolanEnd")],
        ])
      )
      .then(() => (prevMessage = null));
  } catch (e) {
    console.error(e);
  }
}

async function tohaDiplomat(ctx) {
  try {
    await ctx.answerCbQuery();
    await ctx.deleteMessage(prevMessage);
    await ctx
      .editMessageText(
        `Вы не договорились. Вас съели!`,
        Markup.inlineKeyboard([
          [Markup.button.callback("Переиграть", "kolanEnd")],
        ])
      )
      .then(() => (prevMessage = null));
  } catch (e) {
    console.error(e);
  }
}

async function iDontKnow(ctx) {
  try {
    await ctx.answerCbQuery();
    await ctx.editMessageText(
      "Вам повезло! Тоха учуял кровь и прошёл мимо вас!",
      Markup.inlineKeyboard([[Markup.button.callback("Продолжить", "tohaEnd")]])
    );
  } catch (e) {
    console.error(e);
  }
}

// Одуван
async function oduvan(ctx) {
  try {
    await ctx.answerCbQuery();

    if (prevMessage) await ctx.deleteMessage(prevMessage);

    await ctx.deleteMessage();

    await ctx
      .replyWithPhoto(
        { source: "./материалы для бота/oduvan.jpg" },
        { caption: forTest.oduvan }
      )
      .then((message) => (prevMessage = message.message_id));
    await ctx.reply(
      "Выберите дейтсвие: ",
      Markup.inlineKeyboard([
        [Markup.button.callback("Выебать", "decisionOduvanOne")],
        [Markup.button.callback("Гуль", "decisionOduvanTwo")],
      ])
    );
  } catch (e) {
    console.error(e);
  }
}

async function decisionOduvanTwo(ctx) {
  try {
    await ctx.answerCbQuery();
    await ctx.deleteMessage(prevMessage);
    await ctx
      .editMessageText(
        "Вас опустили побеспределу свои же!",
        Markup.inlineKeyboard([
          [Markup.button.callback("Переиграть", "tohaEnd")],
        ])
      )
      .then(() => (prevMessage = null));
  } catch (e) {
    console.error(e);
  }
}

async function decisionOduvanOne(ctx) {
  try {
    await ctx.answerCbQuery();
    await ctx.deleteMessage(prevMessage);
    await ctx
      .editMessageText(
        "Хуй в говне!",
        Markup.inlineKeyboard([
          [Markup.button.callback("Продолжить", "oduvanEnd")],
        ])
      )
      .then(() => (prevMessage = null));
  } catch (e) {
    console.error(e);
  }
}

// Костян
async function kostan(ctx) {
  try {
    await ctx.answerCbQuery();

    if (prevMessage) await ctx.deleteMessage(prevMessage);

    await ctx.deleteMessage();

    await ctx
      .replyWithPhoto(
        { source: "./материалы для бота/kostan.jpg" },
        { caption: forTest.kostan }
      )
      .then((message) => (prevMessage = message.message_id));
    await ctx.reply(
      "Выберите дейтсвие: ",
      Markup.inlineKeyboard([
        [Markup.button.callback("Поставиться", "decisionKostanOne")],
        [Markup.button.callback("Отказаться", "decisionKostanTwo")],
      ])
    );
  } catch (e) {
    console.error(e);
  }
}

async function decisionKostanOne(ctx) {
  try {
    await ctx.answerCbQuery();
    await ctx.deleteMessage(prevMessage);
    await ctx
      .editMessageText(
        "Вы передознулись, вас не успели откачать!",
        Markup.inlineKeyboard([
          [Markup.button.callback("Переиграть", "oduvanEnd")],
        ])
      )
      .then(() => (prevMessage = null));
  } catch (e) {
    console.error(e);
  }
}

async function decisionKostanTwo(ctx) {
  try {
    await ctx.answerCbQuery();
    await ctx.deleteMessage(prevMessage);
    await ctx
      .editMessageText(
        `"Ты че, ебнутый что-ли?" - реакция вашего сокамерника.`,
        Markup.inlineKeyboard([
          [Markup.button.callback("Продолжить", "kostanEnd")],
        ])
      )
      .then(() => (prevMessage = null));
  } catch (e) {
    console.error(e);
  }
}

// Выписка
async function extract(ctx) {
  try {
    await ctx.answerCbQuery();
    await ctx.deleteMessage();
    await ctx.replyWithHTML(
      forTest.extract,
      Markup.inlineKeyboard([
        [Markup.button.callback("Продолжить", "extractEnd")],
      ])
    );
  } catch (e) {
    console.error(e);
  }
}

async function klim(ctx, isJew) {
  try {
    await ctx.answerCbQuery();
    await ctx.deleteMessage();
    await ctx
      .replyWithPhoto(
        { source: "./материалы для бота/klim.png" },
        { caption: forTest.klim }
      )
      .then((message) => (prevMessage = message.message_id));
    if (isJew) {
      await ctx.reply("Выберите дейтсвие: ", markupForJewModul.forKlimJew);
    } else {
      await ctx.reply("Выберите дейтсвие: ", markupForJewModul.forKlim);
    }
  } catch (e) {
    console.error(e);
  }
}

async function klimGiveThing(ctx) {
  try {
    await ctx.answerCbQuery();
    await ctx.deleteMessage(prevMessage);
    await ctx
      .editMessageText(
        "Вам расквасили ебушатник!",
        Markup.inlineKeyboard([
          [Markup.button.callback("Переиграть", "extractEnd")],
        ])
      )
      .then(() => (prevMessage = null));
  } catch (e) {
    console.error(e);
  }
}

async function klimDiplomat(ctx) {
  try {
    await ctx.answerCbQuery();
    await ctx.deleteMessage(prevMessage);
    await ctx
      .editMessageText(
        "Вам все равно расквасили ебушатник, только чуть-чуть поменьше!",
        Markup.inlineKeyboard([
          [Markup.button.callback("Переиграть", "extractEnd")],
        ])
      )
      .then(() => (prevMessage = null));
  } catch (e) {
    console.error(e);
  }
}

async function iDontRus(ctx) {
  try {
    await ctx.answerCbQuery();
    await ctx.deleteMessage(prevMessage);
    await ctx
      .editMessageText(
        "Вас приняли за своего, поздравляю, у вас появился новый союзик!",
        Markup.inlineKeyboard([
          [Markup.button.callback("Продолжить", "printEnd")],
        ])
      )
      .then(() => (prevMessage = null));
  } catch (e) {
    console.error(e);
  }
}

module.exports.begin = begin;
// Коля
module.exports.kolan = kolan;
module.exports.drinkKolan = drinkKolan;
module.exports.fightKolan = fightKolan;
module.exports.kolaDiplomat = kolaDiplomat;
// Тоха
module.exports.toha = toha;
module.exports.decisionOne = decisionOne;
module.exports.decisionTwo = decisionTwo;
module.exports.tohaDiplomat = tohaDiplomat;
module.exports.iDontKnow = iDontKnow;
// Одуван
module.exports.oduvan = oduvan;
module.exports.decisionOduvanTwo = decisionOduvanTwo;
module.exports.decisionOduvanOne = decisionOduvanOne;
// Костян
module.exports.kostan = kostan;
module.exports.decisionKostanOne = decisionKostanOne;
module.exports.decisionKostanTwo = decisionKostanTwo;
// Выписка
module.exports.extract = extract;
// Клим
module.exports.klim = klim;
module.exports.klimGiveThing = klimGiveThing;
module.exports.klimDiplomat = klimDiplomat;
module.exports.iDontRus = iDontRus;
