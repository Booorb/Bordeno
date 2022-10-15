module.exports = ({
name: "user-info",
code: `
$color[1;RANDOM]
$title[1;User Info:]
$thumbnail[$userAvatar[$mentioned[1]
$description[1;
Username: **$userTag[$mentioned[1]]**
Join Date: **$parseDate[$memberJoinedDate[$mentioned[1]]]**
Join Position: **$memberJoinPosition[$mentioned[1]]**
Status: **$getCustomStatus[$mentioned[1]]**
Server Permissions: **$userPerms[$mentioned[1]]**
`
})