const aoijs = require("aoi.js")
const { token } = require("./config.json");
const { prefix } = require("./config.json");

const bot = new aoijs.AoiClient({
token: token,
prefix: prefix,
intents: ["GUILDS", "GUILD_MESSAGES"]
})

bot.status({
  text: "doas help",
  type: "PLAYING",
  time: 12
})

const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd, './commands/');

//Events
bot.onMessage()
bot.onInteractionCreate()

bot.guildJoinCommand({
    channel: "$randomChannelID",
    code: `
    $createApplicationCommand[global;avatar;Shows your avatar;true]
    $createApplicationCommand[global;ping;Bot replies with pong and current ms;true]
    $createApplicationCommand[global;invite;Bot replies with a invite link for the bot;true]
    $createApplicationCommand[global;bot-info;Bot replies with infos about the bot;true]
    $createApplicationCommand[global;server-info;Bot replies with infos about the server;true]
    $createApplicationCommand[global;user-info;Bot replies with infos about the mentioned user;true]
    $createApplicationCommand[global;help;Bot replies with all bot commands;true]#
    $log[$userTag[$clientID] finished creating slash commands!]`
})

//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[$userTag[$clientID] is ready!]`
})
