const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("baitap")
        .setDescription("Tạo bài tập ngẫu nhiên")
        .addStringOption(option =>
            option
            .setName("mon")
            .setDescription("toan / ly / hoa")
            .setRequired(true)
        ),

    async execute(interaction){

        const mon = interaction.options.getString("mon").toLowerCase();

        let bai = "";

        if(mon === "toan"){
            bai =
            "📘 Bài Toán:\n" +
            "Giải phương trình: x² - 7x + 12 = 0\n\n" +
            "Đáp án: x = 3 hoặc x = 4";
        }

        else if(mon === "ly"){
            bai =
            "⚡ Bài Vật Lý:\n" +
            "Một xe đi 120km trong 3 giờ.\n" +
            "Tính vận tốc.\n\n" +
            "Đáp án: v = 40 km/h";
        }

        else if(mon === "hoa"){
            bai =
            "🧪 Bài Hóa:\n" +
            "Tính số mol của 18g H₂O.\n\n" +
            "Đáp án: n = 1 mol";
        }

        else{
            bai = "❌ Chọn: toan, ly hoặc hoa";
        }

        const embed = new EmbedBuilder()
        .setTitle("🎯 Bài Tập Ngẫu Nhiên")
        .setDescription(bai);

        await interaction.reply({
            embeds:[embed]
        });
    }
};
