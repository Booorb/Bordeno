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
    $createApplicationCommand[$guildID;avatar;Shows your avatar;true]
    $createApplicationCommand[$guildID;ping;Bot replies with pong and current ms;true]
    $createApplicationCommand[$guildID;invite;Bot replies with a invite link for the bot;true]
    $createApplicationCommand[$guildID;bot-info;Bot replies with infos about the bot;true]
    $createApplicationCommand[$guildID;server-info;Bot replies with infos about the server;true]
    $createApplicationCommand[$guildID;user-info;Bot replies with infos about the mentioned user;true]
    $createApplicationCommand[$guildID;help;Bot replies with all bot commands;true]
    $createApplicationCommand[$guildID;gnuslashlinux;Bot replies with gnu/linux copy pasta;true]
    $createApplicationCommand[$guildID;gnuslashlinux-uwu;Bot replies with gnu/linux uwu copy pasta;true]
    $createApplicationCommand[$guildID;linux-meme;Bot replies with random linux meme from r/linuxmemes;true]
    $createApplicationCommand[$guildID;meme;Bot replies with random meme from r/dankmemes;true]
    $createApplicationCommand[$guildID;programming-meme;Bot replies with random programming meme form r/programmingmemes;true]
    $createApplicationCommand[$guildID;wallpaper;Bot replies with random wallpaper form r/wallpapers;true]
    $log[$userTag[$clientID] finished creating slash commands!]`
})

//Ready Event
bot.readyCommand({
  channel: "",
  code: `$log[$userTag[$clientID] is ready!]`
})
