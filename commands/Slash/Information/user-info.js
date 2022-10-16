module.exports = {
    name: "user-info",
    type: "interaction",
    prototype: "slash",
    code: `$interactionReply[;
    {newEmbed:
    {color:RANDOM}
    {title:User Info:}
    {thumbnail:$userAvatar}
    {description:
    Username: **$userTag**
    Join Date: **$parseDate[$memberJoinedDate]**
    Join Position: **$memberJoinPosition**
    Status: **$getCustomStatus**
    Server Permissions: **$userPerms**
    }`
}
