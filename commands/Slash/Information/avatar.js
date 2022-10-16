module.exports = {
	name: "avatar",
	type: "interaction",
	prototype: "slash",
	code: `$interactionReply[;{newEmbed:
		{image:https://$get[URL]}
		{color:RANDOM}
    };{actionRow:
      {button:PNG:5:https\\://$replaceText[$get[URL];gif;png]:no}
	  {button:GIF:$if[$checkContains[$get[URL];.gif]==true;link;secondary]:https\\:$if[$checkContains[$get[URL];.gif]==true;//$get[URL];secret]:$if[$checkContains[$get[URL];.gif]==true;no;yes]}
    }]
	$let[URL;$splitText[2]]
	$textSplit[$userAvatar[$get[ID]];//]
	$let[ID;$if[$interactionData[options.data[0].value]==undefined;$interactionData[author.id];$interactionData[options.data[0].value]]]
	`
};