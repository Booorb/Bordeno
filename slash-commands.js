const aoijs = require("aoi.js")
const { token } = require("./config.json");
const { prefix } = require("./config.json");

const bot = new aoijs.AoiClient({
token: token,
prefix: prefix,
intents: ["GUILDS", "GUILD_MESSAGES"]
})

//Events
bot.readyCommand({
    channel: "$randomChannelID",
    code: `
    $createApplicationCommand[global;avatar;Shows your avatar;true]
    $createApplicationCommand[global;ping;Bot replies with pong and current ms;true]
    $createApplicationCommand[global;invite;Bot replies with a invite link for the bot;true]
    $log[$userTag[$clientID] finished creating slash commands!]`
})