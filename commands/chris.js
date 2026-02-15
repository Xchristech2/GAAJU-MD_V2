// commands/shafi.js
module.exports = {
  name: 'chris',
  alias: ['chris', 'chrisgaaju', 'lordgaaju'],
  description: 'Shows info and tribute about Chris Gaaju 😎',
  category: 'fun',

  lastUsed: {},

  async run({ conn, m }) {
    try {
      const chatId = m.chat;
      const sender = m.sender;

      if (!this.lastUsed[chatId]) this.lastUsed[chatId] = {};
      if (!this.lastUsed[chatId][sender]) this.lastUsed[chatId][sender] = 0;

      this.lastUsed[chatId][sender] += 1;

      if (this.lastUsed[chatId][sender] % 2 === 1) {
        // Odd times: Show image with caption
        await conn.sendMessage(chatId, {
          image: { url: 'https://files.catbox.moe/i7o2wh.png' }, // your image link
          caption: `👑 *Chris Gaaju* 👑\n\n✨ The creator of *GAAJU-MD BOT* ✨\n💖 A visionary coder & bot master 🤖\n🔥 Always innovating, always shining 🌟`
        }, { quoted: m });

      } else {
        // Even times: Show good lines about you
        const messages = [
          `🌟 *Chris Gaaju* 🌟\nA leader in coding & style 💻\nBringing fun & power to WhatsApp 💬🚀`,
          `💖 *chris Gaaju* 💖\nYour friendly developer 😎\nAlways coding with passion & heart ✨`,
          `🔥 *Chris Gaaju* 🔥\nMastermind of bots 👑\nGAAJU-MD is his legacy 🤖`
        ];

        const randomMsg = messages[Math.floor(Math.random() * messages.length)];

        await conn.sendMessage(chatId, {
          text: randomMsg,
          mentions: [sender],
        }, { quoted: m });
      }

    } catch (err) {
      console.error('❌ Shafi command error:', err);
      await conn.sendMessage(m.chat, {
        text: '💔 Oops! Something went wrong while showing Shafi info...',
      }, { quoted: m });
    }
  }
};
