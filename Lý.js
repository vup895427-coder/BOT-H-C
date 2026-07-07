const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ly")
        .setDescription("Tra cứu kiến thức Vật lý")
        .addStringOption(option =>
            option
                .setName("noidung")
                .setDescription("Nhập chủ đề vật lý")
                .setRequired(true)
        ),

    async execute(interaction) {

        const noidung = interaction.options.getString("noidung");

        const embed = new EmbedBuilder()
            .setTitle("⚡ Trợ lý Vật Lý")
            .addFields(
                {
                    name: "📌 Chủ đề",
                    value: noidung
                },
                {
                    name: "📚 Công thức mẫu",
                    value:
                    "• Vận tốc: v = s/t\n" +
                    "• Lực: F = m.a\n" +
                    "• Công: A = F.s\n" +
                    "• Công suất: P = A/t"
                }
            );

        await interaction.reply({
            embeds: [embed]
        });
    }
};
