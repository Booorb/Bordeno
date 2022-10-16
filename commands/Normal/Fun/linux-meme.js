module.exports = ({
    name: "linux-meme",
    code: `
$color[1;RANDOM]
$title[$jsonRequest[https://meme-api.herokuapp.com/gimme/$replaceText[$replaceText[€$message[1]€;€€;linuxmemes];€;];title]]
$image[$jsonRequest[https://meme-api.herokuapp.com/gimme/$replaceText[$replaceText[€$message[1]€;€€;linuxmemes];€;];url]?size=2048]`
})