const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("toan")
        .setDescription("Giải và tra cứu toán học")
        .addStringOption(option =>
            option
                .setName("cauhoi")
                .setDescription("Nhập bài toán")
                .setRequired(true)
        ),

    async execute(interaction) {

        const cauHoi = interaction.options.getString("cauhoi");

        const embed = new EmbedBuilder()
            .setTitle("📘 Trợ lý Toán Học")
            .addFields(
                {
                    name: "❓ Bài toán",
                    value: cauHoi
                },
                {
                    name: "💡 Hướng dẫn",
                    value:
                    "Bot đã nhận bài.\n" +
                    "Hệ thống AI giải chi tiết sẽ thêm ở phần sau."
                }
            );

        await interaction.reply({
            embeds: [embed]
        });
    }
};
