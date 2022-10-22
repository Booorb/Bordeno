module.exports = ({
name: "wallpaper",
type: "interaction",
prototype: "slash",
code: `$interactionReply[;
{newEmbed:
{color:RANDOM}
{image:$jsonRequest[https://meme-api.herokuapp.com/gimme/$replaceText[$replaceText[€$message[1]€;€€;wallpaper];€;];url]?size=2048]`
})