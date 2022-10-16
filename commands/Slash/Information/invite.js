module.exports = {
    name: "invite",
    type: "interaction",
    prototype: "slash",
    code: `$interactionReply[;
{newEmbed:
{color:RANDOM}
{title:Click the link below to invite the bot!}
{description:[**Invite Link**](https://discord.com/oauth2/authorize?client_id=1028734340642906284&scope=bot&permissions=517745401025 'click')}
`
}