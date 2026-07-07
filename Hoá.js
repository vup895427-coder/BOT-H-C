const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("hoa")
        .setDescription("Tra cứu kiến thức Hóa học")
        .addStringOption(option =>
            option
                .setName("noidung")
                .setDescription("Nhập chủ đề hóa học")
                .setRequired(true)
        ),

    async execute(interaction) {

        const noidung = interaction.options.getString("noidung");

        const embed = new EmbedBuilder()
            .setTitle("🧪 Trợ lý Hóa Học")
            .addFields(
                {
                    name: "📌 Chủ đề",
                    value: noidung
                },
                {
                    name: "📚 Công thức cơ bản",
                    value:
                    "• Số mol: n = m/M\n" +
                    "• Nồng độ mol: CM = n/V\n" +
                    "• Khối lượng: m = n.M\n" +
                    "• Phương trình: Cân bằng trước khi tính"
                }
            );

        await interaction.reply({
            embeds: [embed]
        });
    }
};
