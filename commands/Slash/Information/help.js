module.exports = ({
    name: "help",
    type: "interaction",
    prototype: "slash",
    code: `$interactionReply[;
    {newEmbed:
    {color:RANDOM}
    {title:Bot Commands}
    {description:
    __**Information commands**__:
    **doas avatar**: Bot replies with your Avatar
    **doas ping**: Bot replies with pong and current ms
    **doas invite**: Bot replies with a invite link for the bot
    **doas bot-info**: Infos about the bot
    **doas user-info**: Infos about the mentioned user
    
    __**Fun commands**__:
    **doas gnu/linux**: Bot replies with Gnu/Linux Copypasta
    **doas gnu/linux-uwu**: Bot replies with Gnu/Linux uwu Copypasta
    **doas meme**: Bot replies with random meme from r/dankmemes
    **doas linux-meme**: Bot replies with Linux Meme from r/linuxmemes
    **doas programming-meme**: Bot replies with random programming meme form r/programmingmemes
    **doas wallpaper**: Bot replies with random wallpaper form r/wallpapers
    ]
    $addButton[1;Support Server;link;https://discord.gg/hAsfJ4c8Cg;no]
    $addButton[1;Invite Bot;link;https://discord.com/oauth2/authorize?client_id=1028734340642906284&scope=bot&permissions=517745401025;no}
    `
})
