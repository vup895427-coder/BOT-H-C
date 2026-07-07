const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const OpenAI = require("openai");

const ai = new OpenAI({
    apiKey: process.env.AI_KEY
});

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ask")
        .setDescription("Hỏi AI trợ lý học tập")
        .addStringOption(option =>
            option
            .setName("cauhoi")
            .setDescription("Nhập câu hỏi")
            .setRequired(true)
        ),

    async execute(interaction) {

        const cauHoi = interaction.options.getString("cauhoi");

        await interaction.deferReply();

        try {

            const response = await ai.chat.completions.create({
                model: "gpt-4.1-mini",
                messages: [
                    {
                        role: "system",
                        content:
                        "Bạn là trợ lý học tập. Giải thích Toán, Lý, Hóa rõ ràng, từng bước, dễ hiểu."
                    },
                    {
                        role: "user",
                        content: cauHoi
                    }
                ]
            });

            const answer =
            response.choices[0].message.content;

            const embed = new EmbedBuilder()
                .setTitle("🤖 AI Học Tập")
                .setDescription(answer)
                .setFooter({
                    text:"BOT-H-C AI"
                });

            await interaction.editReply({
                embeds:[embed]
            });

        } catch(error){

            console.error(error);

            await interaction.editReply(
                "❌ Không kết nối được AI."
            );
        }
    }
};
