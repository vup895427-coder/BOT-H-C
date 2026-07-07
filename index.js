/*****************************************************************
 *                 STUDY BOT ULTRA AI v10
 *            Copyright © 2026 StudyBot Team
 *****************************************************************/

require("dotenv").config();

const {
Client,
GatewayIntentBits,
Collection,
ActivityType,
Partials,
EmbedBuilder,
ActionRowBuilder,
ButtonBuilder,
ButtonStyle
}=require("discord.js");

const fs=require("fs");
const path=require("path");
const os=require("os");
const crypto=require("crypto");
const axios=require("axios");

/* ==========================
 SYSTEM
========================== */

const client=new Client({

intents:[

GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMembers,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.MessageContent,
GatewayIntentBits.GuildVoiceStates,
GatewayIntentBits.GuildPresences,
GatewayIntentBits.GuildMessageReactions

],

partials:[

Partials.Channel,
Partials.Message,
Partials.Reaction,
Partials.User

]

});

/* ==========================
 COLLECTION
========================== */

client.commands=new Collection();

client.slash=new Collection();

client.buttons=new Collection();

client.modals=new Collection();

client.selectMenus=new Collection();

client.cooldowns=new Collection();

client.levels=new Collection();

client.economy=new Collection();

client.quiz=new Collection();

client.notes=new Collection();

client.flashcards=new Collection();

client.homework=new Collection();

client.aiCache=new Collection();

client.voice=new Collection();

client.music=new Collection();

client.logs=new Collection();

client.temp=new Collection();

client.settings=new Collection();

client.database=new Collection();

client.blacklist=new Collection();

client.whitelist=new Collection();

client.plugins=new Collection();

client.api=new Collection();

client.errors=new Collection();

/* ==========================
 BOOT LOG
========================== */

console.clear();

console.log("══════════════════════════════════════");

console.log("STUDY BOT ULTRA AI");

console.log("Version : 10.0.0");

console.log("Loading Kernel...");

console.log("Loading AI Engine...");

console.log("Loading Database...");

console.log("Loading Study System...");

console.log("Loading Formula Library...");

console.log("Loading Physics...");

console.log("Loading Chemistry...");

console.log("Loading Mathematics...");

console.log("Loading English...");

console.log("Loading Biology...");

console.log("Loading History...");

console.log("Loading Geography...");

console.log("Loading Security...");

console.log("Loading Dashboard...");

console.log("Loading Plugins...");

console.log("Loading API...");

console.log("Loading Events...");

console.log("Loading Commands...");

console.log("══════════════════════════════════════");

/* ==========================
 READY
========================== */

client.once("ready",()=>{

console.log(`${client.user.tag} Online`);

const status=[

"📚 Giải mọi bài Toán",
"⚡ Công thức Vật lý",
"🧪 Hóa học",
"🌍 Tiếng Anh",
"📖 Sinh học",
"📜 Lịch sử",
"🗺️ Địa lý",
"🤖 AI Gia sư",
"📝 Quiz",
"🎓 Ôn thi THPT",
"/help"

];

let i=0;

setInterval(()=>{

if(i>=status.length)i=0;

client.user.setActivity(status[i],{

type:ActivityType.Watching

});

i++;

},8000);

});

/* ==========================
 LOGIN
========================== */

client.login(process.env.TOKEN);
