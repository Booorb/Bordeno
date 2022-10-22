module.exports = ({
    name: "wallpaper",
    code: `
$color[1;RANDOM]
$image[$jsonRequest[https://meme-api.herokuapp.com/gimme/$replaceText[$replaceText[€$message[1]€;€€;wallpapers];€;];url]?size=2048]`
})