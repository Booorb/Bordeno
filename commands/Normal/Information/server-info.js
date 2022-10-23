module.exports = ({
name: "server-info",
code: `
$color[1;RANDOM]
$title[1;Server Info:]
$thumbnail[$serverIcon]
$description[1;
Server Name: **$serverName**
Member Count: **$membersCount**
Channel Count: **$channelCount**
Server Emojis: 
** $serverEmojis **
Server Features: 
** $serverFeatures **
`
})