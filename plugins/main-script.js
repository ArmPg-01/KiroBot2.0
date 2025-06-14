import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
try {
let res = await fetch('https://api.github.com/repos/ArmPg-01/KiroBot2.0')

if (!res.ok) throw new Error('Error al obtener datos del repositorio')
let json = await res.json()

let txt = `*乂  S C R I P T  -  M A I N  乂*\n\n`
txt += `✩  *Nombre* : ${json.name}\n`
txt += `✩  *Visitas* : ${json.watchers_count}\n`
txt += `✩  *Peso* : ${(json.size / 1024).toFixed(2)} MB\n`
txt += `✩  *Descripción* : ${json.description}\n`
txt += `✩  *Url* : ${json.html_url}\n`
txt += `✩  *Forks* : ${json.forks_count}\n`
txt += `✩  *Stars* : ${json.stargazers_count}\n\n`
txt += `> *${dev}*`

await conn.sendMessage(m.chat, {text: txt, contextInfo: { forwardingScore: 999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterName: channelRD.name, newsletterJid: channelRD.id, }, externalAdReply: { title: packname, body: dev, thumbnailUrl: 'https://files.catbox.moe/r2y9hd.jpg', sourceUrl: redes, mediaType: 1, renderLargerThumbnail: true }}}, {quoted: fkontak})

} catch {
await conn.reply(m.chat, '⚠️ Ocurrió un error.', m)
await m.react(error)
}}

handler.help = ['script']
handler.tags = ['main']
handler.command = ['script', 'sc']
handler.register = true

export default handler