module.exports = {
name: "server-info",
type: "interaction",
prototype: "slash",
code: `$interactionReply[;
{newEmbed:
{color:RANDOM}
{title:Server Info:}
{thumbnail:$serverIcon}
{description:
Server Name: **$serverName**
Member Count: **$membersCount**
Server Emojis: 
** $serverEmojis **
Server Features: 
** $serverFeatures **
}`
}