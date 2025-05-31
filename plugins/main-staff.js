let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `🚩 *EQUIPO DE AYUDANTES*
🤖 *Bot:* ${global.botname}
🪐 *Versión:* ${global.vs}

• Armando
🎩 *Rol:* Owner
💛 *Número:* Wa.me/5215527305507
`
await conn.sendFile(m.chat, 'https://cdnmega.vercel.app/media/c4hhgZgD@fGOHhRAM1CD-3_cpAQk-Q86yQnQLGHYKZ1M0P_heI9s', 'staff.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🎩 STAFF OFICIAL🌟`,
body: dev,
mediaType: 1,
sourceUrl: redes,
thumbnailUrl: icons }}
}, { mentions: m.sender })
m.react(emoji)

}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = false
handler.tags = ['main', 'crow']
handler.estrellas = 1;

export default handler