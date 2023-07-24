// Импорт пакетов
const { Composer, Scenes, Markup } = require("telegraf");
const fs = require("fs");
// Переменные для реализации логики
let prevMessage = null;
let fromIndex = require("./index");

const firstName = new Composer();

firstName.action("cnt", async (ctx) => {
  try {
    ctx.wizard.state.data = {};

    await ctx.answerCbQuery();
    await ctx.deleteMessage();
    await ctx
      .reply("Введите свое имя:")
      .then((message) => (prevMessage = message.message_id));
    await ctx.wizard.next();
  } catch (e) {
    console.error(e);
  }
});

const lastName = new Composer();

lastName.on("text", async (ctx) => {
  try {
    ctx.wizard.state.data.firstName = ctx.message.text;

    await ctx.deleteMessage();
    await ctx.deleteMessage(prevMessage);
    await ctx
      .reply("Введите свою фамилию:")
      .then((message) => (prevMessage = message.message_id));
    await ctx.wizard.next();
  } catch (e) {
    console.error(e);
  }
});

const nationality = new Composer();

nationality.on("text", async (ctx) => {
  try {
    ctx.wizard.state.data.lastName = ctx.message.text;

    await ctx.deleteMessage();
    await ctx.deleteMessage(prevMessage);
    await ctx
      .reply("Введите свою национальность:")
      .then((message) => (prevMessage = message.message_id));
    await ctx.wizard.next();
  } catch (e) {
    console.error(e);
  }
});

const printResult = new Composer();

async function waitFuncton(ctx, next) {
  await ctx.deleteMessage(prevMessage);
  await ctx
    .reply("Подождите, идет загрузка...")
    .then((message) => (prevMessage = message.message_id));

  next();
}

printResult.on("text", waitFuncton, async (ctx) => {
  try {
    ctx.wizard.state.data.nationality = ctx.message.text;

    const temp = ctx.wizard.state.data;

    await ctx.deleteMessage();

    if (temp.nationality.toLowerCase() === "еврей") {
      await ctx
        .replyWithVideo({
          source: fs.createReadStream("./материалы для бота/jew.mp4"),
        })
        .then(() => fromIndex.whoYouIsNation("jew"));

      await ctx.reply(
        `Приветствую тебя, начинающий вор ${temp.lastName} ${
          temp.firstName
        }. Твоя национальность "${temp.nationality.toLowerCase()}" открывает тебе способность "договориться"!`,
        Markup.inlineKeyboard([
          [Markup.button.callback("Продолжить", "formContinue")],
        ])
      );
    } else {
      await ctx
        .reply(
          `Приветствую тебя, начинающий вор ${temp.lastName} ${
            temp.firstName
          }, Твоя национальность "${temp.nationality.toLowerCase()}", к сожалению, не дает бонусов.`,
          Markup.inlineKeyboard([
            [Markup.button.callback("Продолжить", "formContinue")],
          ])
        )
        .then(() => fromIndex.whoYouIsNation("rest"));
    }

    await ctx.deleteMessage(prevMessage).then(() => (prevMessage = null));

    await ctx.scene.leave();
  } catch (e) {
    console.error(e);
  }
});

const formScene = new Scenes.WizardScene(
  "wizardFormScene",
  firstName,
  lastName,
  nationality,
  printResult
);

module.exports.formScene = formScene;
