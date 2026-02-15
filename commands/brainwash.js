module.exports = {
  name: "brainwash",
  description: "Funny command from GAAJU-MD",
  category: "fun",
  async run({ conn, m, args }) {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const messages = ['Injecting GAAJU.MD.exe into your cerebrum…', 'Replacing brain with potato 🥔...', 'Congratulations, you now think TikTok is educational.', 'Too late. You’re one of us now 😈'];
    for (const msg of messages) {
      await delay(2000);
      await conn.sendMessage(m.chat, { text: msg }, { quoted: m });
    }
  }
};
