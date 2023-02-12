/**
   * Create By Dika Ardnt.
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '9d30efca66',
}

// Other
global.owner = ['6283181933754']
global.ownernomer = "6283181933754"
global.premium = ['6283181933754','6281328144300']
global.packname = 'ANYA-BOT'
global.author = '@yusuf.andika24'
global.sessionName = 'zenss'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Done',
    admin: 'khusus admin grup kak',
    botAdmin: 'anya bukan admin:(',
    premime: 'khusus VIP kak:)',
    owner: 'maaf kak ini khusus orang ganteng',
    group: 'khusus grup kak',
    private: 'chat pribadi anya aja:)',
    bot: 'fitur khusus inimah',
    wait: 'proses kak:)',
    endLimit: 'limit lu abis, limit di reset jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 2
}
global.thumb = fs.readFileSync('./image/zens.jpg')
global.vaze = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
