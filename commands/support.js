module.exports = {
  name: "support",
  alias: ["helpbot", "support", "pathanupport"],
  description: "Get GAAJU MD support links and contact info",
  category: "general",
  async run({ conn, m }) {
    const caption = `🛠️ *GAAJU MD V2 BOT - SUPPORT CENTER* 🛠️



💬 *WhatsApp Support Group:*  
https://chat.whatsapp.com/HhuLiSRKTzdCP4NjCXkt21?mode=ac_t

📲 *Telegram Support:*  
https://t.me/@Official_ChrisGaaju

🧑‍💻 *GitHub Repository:*  
https://github.com/Xchristech2/GAAJU-MD_V2

📞 *Bot Admin:*  
wa.me/2348069675806

📞 *Bot Owner:*  
wa.me/2348069675806

🧠 Use *.menu* to explore commands.
💥 Stay updated and have fun using GAAJU BOT!`;

    await conn.sendMessage(m.chat, {
      text: caption,
      mentions: [m.sender]
    }, { quoted: m });
  }
};
