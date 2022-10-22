module.exports = ({
name: "programming-meme",
type: "interaction",
prototype: "slash",
code: `$interactionReply[;
{newEmbed:
{color:RANDOM}
{title:$jsonRequest[https://meme-api.herokuapp.com/gimme/$replaceText[$replaceText[€$message[1]€;€€;programmingmemes];€;];title]}
{image:$jsonRequest[https://meme-api.herokuapp.com/gimme/$replaceText[$replaceText[€$message[1]€;€€;programmingmemes];€;];url]?size=2048]`
})