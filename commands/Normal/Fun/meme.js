module.exports = ({
    name: "meme",
    code: `
$color[1;RANDOM]
$title[$jsonRequest[https://meme-api.herokuapp.com/gimme/$replaceText[$replaceText[€$message[1]€;€€;dankmemes];€;];title]]
$image[$jsonRequest[https://meme-api.herokuapp.com/gimme/$replaceText[$replaceText[€$message[1]€;€€;dankmemes];€;];url]?size=2048]`
})