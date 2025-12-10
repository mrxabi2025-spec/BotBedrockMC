const bedrock = require('bedrock-protocol')

const client = bedrock.createClient({
  host: 'dynamic-8.magmanode.com',       // Ganti dengan IP server Bedrock Anda
  port: 25734,             // Port default Bedrock (sesuaikan jika berbeda)
  username: 'SatriaBot', // Nama yang akan muncul di server
  offline: false            // Gunakan true jika server lokal/tidak memerlukan otentikasi Xbox Live
})

client.on('join', () => {
  console.log('Bot berhasil terhubung ke server Bedrock!')
  // Kirim pesan obrolan saat bot masuk
  client.write('text', {
    type: 'chat',
    needs_translation: false,
    source_name: client.username,
    message: 'Halo semua! Saya adalah bot server.'
  })
})

client.on('text', (packet) => {
  // Log pesan obrolan dari pemain lain
  if (packet.source_name !== client.username) {
    console.log(`[${packet.source_name}]: ${packet.message}`)
  }
})

client.on('error', err => console.error(`Terjadi kesalahan: ${err}`))
client.on('end', reason => console.log(`Bot terputus: ${reason}`))
