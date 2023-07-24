// Импорт пакетов
const { Telegraf, Markup, session, Scenes } = require("telegraf");
require("dotenv").config();
// Импорт сцен
let formScene = require("./form");
const jewModul = require("./испытание/jewModul");
// Создание бота
const bot = new Telegraf(process.env.TOKEN);
// Создание переменных для логики проекта
let isJew = false;
let prevMessage = null;
// Текст
const forTest = require("./Текст/forTest");
// Infinity block
const infinityBlockPhrase = require("./Для infinity block/printPhrase");
const infinityBlockWords = require("./Для infinity block/printWord");

//Блок управления сценами##################
const stage = new Scenes.Stage([formScene.formScene]);
bot.use(session());
bot.use(stage.middleware());
//#########################################
bot.start(async (ctx) => {
  try {
    await ctx
      .reply("Начало работы", Markup.removeKeyboard())
      .then(() => (isJew = false))
      .then(() => (nationals = []));
    await ctx.replyWithHTML(
      forTest.textForStart,
      Markup.inlineKeyboard([[Markup.button.callback("Продолжить", "cnt")]])
    );
    await ctx.scene.enter("wizardFormScene");
  } catch (e) {
    console.error(e);
  }
});

let national = null;

function whoYouIsNation(str) {
  national = str;
}

bot.action("formContinue", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.deleteMessage();
    await ctx.replyWithHTML(
      "https://clever-pothos-4d189f.netlify.app/видос/videoBefore.mp4"
    );
    await ctx.reply("Прежде чем преступать к испытанию, просмотрите ролик.");

    if (national === "jew") {
      await ctx
        .reply(
          "Нажмите для продолжения",
          Markup.inlineKeyboard([
            [Markup.button.callback("Продолжить как еврей", "testJew")],
          ])
        )
        .then(() => (isJew = true));
    } else {
      await ctx.reply(
        "Нажмите для продолжения",
        Markup.inlineKeyboard([
          [
            Markup.button.callback(
              "Продолжить как простой смертный",
              "testJew"
            ),
          ],
        ])
      );
    }
  } catch (e) {
    console.error(e);
  }
});

// Блок испытания
bot.action("testJew", async (ctx) => jewModul.begin(ctx));
// Николай
bot.action("kolan", async (ctx) => jewModul.kolan(ctx, isJew));
bot.action("drink", async (ctx) => jewModul.drinkKolan(ctx));
bot.action("fight", async (ctx) => jewModul.fightKolan(ctx));
bot.action("kolaDiplomat", async (ctx) => jewModul.kolaDiplomat(ctx));

// Тоха
bot.action("kolanEnd", async (ctx) => jewModul.toha(ctx, isJew));
bot.action("decisionOne", async (ctx) => jewModul.decisionOne(ctx));
bot.action("decisionTwo", async (ctx) => jewModul.decisionTwo(ctx));
bot.action("tohaDiplomat", async (ctx) => jewModul.tohaDiplomat(ctx));
bot.action("iDontKnow", async (ctx) => jewModul.iDontKnow(ctx));

// Одуван
bot.action("tohaEnd", async (ctx) => jewModul.oduvan(ctx));
bot.action("decisionOduvanOne", async (ctx) => jewModul.decisionOduvanOne(ctx));
bot.action("decisionOduvanTwo", async (ctx) => jewModul.decisionOduvanTwo(ctx));

// Костян
bot.action("oduvanEnd", async (ctx) => jewModul.kostan(ctx));
bot.action("decisionKostanOne", async (ctx) => jewModul.decisionKostanOne(ctx));
bot.action("decisionKostanTwo", async (ctx) => jewModul.decisionKostanTwo(ctx));

// Выписка
bot.action("kostanEnd", async (ctx) => jewModul.extract(ctx));

// Клим
bot.action("extractEnd", async (ctx) => jewModul.klim(ctx, isJew));
bot.action("giveThing", async (ctx) => jewModul.klimGiveThing(ctx));
bot.action("klimDiplomat", async (ctx) => jewModul.klimDiplomat(ctx));
bot.action("klimDiplomat", async (ctx) => jewModul.klimDiplomat(ctx));
bot.action("iDontRus", async (ctx) => jewModul.iDontRus(ctx));

// Infinity block
bot.action("printEnd", async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.deleteMessage();
  await ctx.replyWithHTML(
    forTest.printEnd,
    Markup.keyboard([["Спиздануть пиздатую фразу"], ["Узнать новое слово"]])
      .oneTime(false)
      .resize()
  );
});

bot.hears("Спиздануть пиздатую фразу", async (ctx) =>
  infinityBlockPhrase.printPhrase(ctx)
);

bot.hears("Узнать новое слово", async (ctx) =>
  infinityBlockWords.printWord(ctx)
);

module.exports.whoYouIsNation = whoYouIsNation;

bot.launch();
