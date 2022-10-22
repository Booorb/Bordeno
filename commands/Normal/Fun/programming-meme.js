module.exports = ({
    name: "programming-meme",
    code: `
$color[1;RANDOM]
$title[$jsonRequest[https://meme-api.herokuapp.com/gimme/$replaceText[$replaceText[€$message[1]€;€€;programmingmemes];€;];title]]
$image[$jsonRequest[https://meme-api.herokuapp.com/gimme/$replaceText[$replaceText[€$message[1]€;€€;programmingmemes];€;];url]?size=2048]`
})