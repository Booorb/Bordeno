module.exports = {
    name: "bot-info",
    type: "interaction",
    prototype: "slash",
    code: `$interactionReply[;
    {newEmbed:
    {color:RANDOM}
    {description:
    Server Count: **$serverCount**
    Bot's uptime: **$uptime**
    RAM Usage: **$ram**
    CPU Usage: **$cpu**
    }`
    }
    