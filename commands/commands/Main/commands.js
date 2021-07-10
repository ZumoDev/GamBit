module.exports = ({
    name: "cmds",
    aliases: ['commands', 'cmdlist'],
    code: `$title[GamBit Commandlist]
$description[GamBit counts with **$commandsCount** commands!

Prefix: \`$getServerVar[Prefix]\`

:tools: **Utility** (17)
\`staff | userinfo | serverinfo | botinfo | avatar | invite | changelog | setprefix | setwelcomechannel | setwelcomemessage | setleavechannel | setleavemessage | afk | vote | ping | versions | setembedcolor\`

:hammer: **Moderation** (18)
\`warn | unwarn | clearwarnings | setmutedrole | mute | unmute | kick | ban | unban | hackban | lock | unlock | hide | show | clear | nuke | lockdown | unlockdown\`

:crossed_swords: **RPG** (13)
\`hunt | mine | explore | dungeon | shop | buy | use | with | dep | inventory | health | daily | heal\`

:shield: **Security** (2)
\`antilinks | antieveryone\`

:musical_note: **Music** (7)
\`play | pause | resume | skip | stop | volume | loop\`

:rofl: **Fun** (4)
\`meme | joke | shorturl | 8ball\`

:question: **Suggestions** NEW (5)
\`setsuggestionchannel | suggest | comment | approve | reject\`

:ticket: **Tickets** (6)
\`new | close | delete | reopen | adduser | removeuser\`

:1234: **Calculator** (5)
\`sum | sub | multi | divide | math\`

**Important Links**
[Invite me!\](https://discord.com/api/oauth2/authorize?client_id=818912169638756385&permissions=8&scope=bot) | [Vote\](https://top.gg/bot/818912169638756385) | [Support Server\](https://discord.gg/SS3JyGJbc7)]
$footer[$username;$authorAvatar]
$addTimestamp
$color[$getServerVar[Color]]
`
})