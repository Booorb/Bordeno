module.exports = {
name: "avatar",
type: "interaction",
prototype: "slash",
code: `$interactionReply[;
{newEmbed:
{color:RANDOM}
{image:$authorAvatar}
`
}
