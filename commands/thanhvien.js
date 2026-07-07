const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {

data: new SlashCommandBuilder()
.setName("thanhvien")
.setDescription("Xem danh sách thành viên"),

async execute(interaction){

const guild = interaction.guild;

await guild.members.fetch();

let members = guild.members.cache
.filter(member => !member.user.bot)
.map((member,index)=>
`${index+1}. ${member.user.tag}`
)
.slice(0,20)
.join("\n");


if(!members){
members="Không có thành viên.";
}


const embed = new EmbedBuilder()
.setTitle("👥 Danh sách thành viên")
.setDescription(members)
.setFooter({
text:`Tổng: ${guild.memberCount} thành viên`
});


await interaction.reply({
embeds:[embed]
});

}

};
