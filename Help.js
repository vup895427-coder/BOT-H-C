const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("Xem danh sách lệnh bot"),

    async execute(interaction) {

        const embed = new EmbedBuilder()
            .setTitle("🤖 BOT HỌC TẬP")
            .setDescription(
                "/toan - Giải toán\n" +
                "/ly - Kiến thức vật lý\n" +
                "/hoa - Kiến thức hóa học"
            );

        await interaction.reply({
            embeds: [embed]
        });
    }
};
