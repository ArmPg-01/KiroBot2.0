import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*
// Staff De CrowBot
global.owner = [
   ['5215527305507', 'Creador Arm', true],
   ['5215527305507', 'ᴋɪʀᴏ ʙᴏᴛ Soporte', true],
   ['5215527305507', '', true],
   ['5215527305507', 'Dev', true],
   ['5215527305507', 'Dev', true],
   ['5215527305507', 'Dev ', true],
   ['5215527305507','Dev ', true],
]

global.creadorbot = [
   ['5215527305507', 'Armando', true],
]
  

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = ['5215527305507', '5215527305507', '5215527305507', '5215527305507', '5215527305507', '5215527305507', '5215527305507', '5215527305507', '5215527305507', '5215527305507']

global.prems = ['5215527305507']


//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.libreria = 'Baileys'
global.baileys = 'V 6.7.16' 
global.vs = '2.2.0'
global.nameqr = 'ᴋɪʀᴏ ʙᴏᴛ'
global.namebot = 'ᴋɪʀᴏ ʙᴏᴛ'
global.sessions = 'CrowSession'
global.jadi = 'CrowJadiBot' 
global.yukiJadibts = true // Activado
global.ch = {
ch1: '120363406571452690@newsletter',
ch2: '120363406571452690@newsletter'
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = 'ᴋɪʀᴏ ʙᴏᴛ'
global.botname = 'ᴋɪʀᴏ ʙᴏᴛ'
global.wm = 'ᴋɪʀᴏ ʙᴏᴛ'
global.author = '𝙈𝘼𝘿𝙀 𝘽𝙔 𝘼𝙍𝙈'
global.dev = '@ 𝙋𝙊𝙒𝙀𝙍𝙀𝘿 𝘽𝙔 𝘼𝙍𝙈'
global.espera = '𝐄𝐬𝐩𝐞𝐫𝐚 𝐔𝐧 𝐌𝐨𝐦𝐞𝐧𝐭𝐨, 𝐄𝐬𝐭𝐚𝐦𝐨𝐬 𝐄𝐧𝐯𝐢𝐚𝐧𝐝𝐨 𝐒𝐮 𝐏𝐞𝐝𝐢𝐝𝐨'
global.namebot = '𝙺𝙸𝚁𝙾 𝙱𝙾𝚃'
global.textbot = `𝙺𝙸𝚁𝙾 𝙱𝙾𝚃`
global.vs = '2.2.0'
global.publi = '𝐒𝐢𝐠𝐮𝐞 𝐄𝐥 𝐂𝐚𝐧𝐚𝐥'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.imagen1 = fs.readFileSync('./media/menus/Menu.jpg')
global.imagen2 = fs.readFileSync('./media/menus/Menu2.jpg')
global.imagen3 = fs.readFileSync('./media/menus/Menu3.jpg')
global.welcome = fs.readFileSync('./media/welcome.jpg')
global.adios = fs.readFileSync('./media/adios.jpg')
global.catalogo = fs.readFileSync('./media/catalogo.jpg')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*
global.repobot = 'https://github.com/'
global.grupo = 'https://chat.whatsapp.com/JRPyKHbYquz06Mz90Gs3cb'
global.gteam = 'https://chat.whatsapp.com/JRPyKHbYquz06Mz90Gs3cb'
global.gsupport = 'https://chat.whatsapp.com/JRPyKHbYquz06Mz90Gs3cb'
global.comu = 'https://chat.whatsapp.com/JRPyKHbYquz06Mz90Gs3cb'
global.channel = 'https://whatsapp.com/channel/0029Vb2lJFP4dTnJsvoH0A2Z'
global.insta = 'https://www.instagram.com/'
//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "525527305507-120363400379692425@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment        

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.multiplier = 69 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
