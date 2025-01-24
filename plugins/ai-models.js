
/*

$$$$$$\            $$\                                               
$$  __$$\           $$ |                                              
$$ /  \__|$$\   $$\ $$$$$$$\  $$$$$$$$\  $$$$$$\   $$$$$$\   $$$$$$\  
\$$$$$$\  $$ |  $$ |$$  __$$\ \____$$  |$$  __$$\ $$  __$$\ $$  __$$\ 
 \____$$\ $$ |  $$ |$$ |  $$ |  $$$$ _/ $$$$$$$$ |$$ |  \__|$$ /  $$ |
$$\   $$ |$$ |  $$ |$$ |  $$ | $$  _/   $$   ____|$$ |      $$ |  $$ |
\$$$$$$  |\$$$$$$  |$$$$$$$  |$$$$$$$$\ \$$$$$$$\ $$ |      \$$$$$$  |
 \______/  \______/ \_______/ \________| \_______|\__|       \______/

Project Name : SubZero MD
Creator      : Darrell Mucheri ( Mr Frank OFC )
Repo         : https//github.com/mrfrank-ofc/SUBZERO-MD
Support      : wa.me/18062212660
*/





























































































































































































//======SUBZERO AI  MODELS
// COPY WITH CREDITS 
// https://mrfrank-ofc/SUBZERO


const config = require('../config');
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');

cmd({
  pattern: "ai",
  alias: ["chatgpt","gpt"],
  react: "🤖",
  desc: "AI chat.",
  category: "main",
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!q) return reply("Please ask a question or provide input for the AI.");

    const data = await fetchJson(`https://api.davidcyriltech.my.id/ai/gpt4omini?text=${q}`);
    console.log(data);

    if (!data.message) return reply("No response from the AI.");

    return reply(` \`🤖 SUBZERO AI RESPONSE:\` \n\n${data.message}`);
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});

//==========SUBZERO MISTRA

cmd({
  pattern: "mistraai",
  alias: ["mistra", "mitra"],
  react: "🪄",
  desc: "AI chat.",
  category: "main",
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!q) return reply("Please ask a question or provide input for the AI.");

    const data = await fetchJson(`https://pikabotzapi.vercel.app/ai/mistral/?apikey=anya-md&message=${q}`);
    console.log(data);

    if (!data.message) return reply("No response from the AI.");

    return reply(` \`🤖 SUBZERO MISTRA AI:\` \n\n${data.message}`);
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});

//====SUBZERO GPT 3

cmd({
  pattern: "gpt3",
  alias: ["gptturbo", "chatgpt3"],
  react: "😇",
  desc: "AI chat.",
  category: "main",
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!q) return reply("Please ask a question or provide input for the AI.");

    const data = await fetchJson(`https://api.davidcyriltech.my.id/ai/gpt3?text=${q}`);
    console.log(data);

    if (!data.message) return reply("No response from the AI.");

    return reply(` \`🤖 SUBZERO CHATGPT 3:\` \n\n${data.message}`);
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});

//==========SUBZERO GPT 4

cmd({
  pattern: "gpt4",
  alias: ["ai4", "chatgpt4"],
  react: "🪄",
  desc: "AI chat.",
  category: "main",
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!q) return reply("Please ask a question or provide input for the AI.");

    const data = await fetchJson(`https://api.davidcyriltech.my.id/ai/gpt4omini?text=${q}`);
    console.log(data);

    if (!data.message) return reply("No response from the AI.");

    return reply(` \`🤖 SUBZERO CHATGPT 4:\` \n\n${data.message}`);
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});

//==========SUHZERO LLAMA
cmd({
  pattern: "llama3",
  alias: ["llama", "llama2"],
  react: "✅",
  desc: "AI chat.",
  category: "main",
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!q) return reply("Please ask a question or provide input for the AI.");

    const data = await fetchJson(`https://api.davidcyriltech.my.id/ai/llama3?text=${q}`);
    console.log(data);

    if (!data.message) return reply("No response from the AI.");

    return reply(` \`🤖 SUBZERO LLAM AI:\` \n\n${data.message}`);
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});

//==========SUBZERO META AI

cmd({
  pattern: "metaai",
  alias: ["meta", "whatsappai"],
  react: "🔄",
  desc: "AI chat.",
  category: "main",
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!q) return reply("Please ask a question or provide input for the AI.");

    const data = await fetchJson(`https://api.davidcyriltech.my.id/ai/metaai?text=${q}`);
    console.log(data);

    if (!data.message) return reply("No response from the AI.");

    return reply(` \`🤖 SUBZERO META AI:\` \n\n${data.message}`);
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});

//==========SUBZERO GPT 4o

cmd({
  pattern: "gpt4o",
  alias: ["ai4", "chatgpt4"],
  react: "🟢",
  desc: "AI chat.",
  category: "main",
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!q) return reply("Please ask a question or provide input for the AI.");

    const data = await fetchJson(`https://api.davidcyriltech.my.id/ai/gpt4omini?text=${q}`);
    console.log(data);

    if (!data.message) return reply("No response from the AI.");

    return reply(` \`🤖 SUBZERO CHATGPT 4o:\` \n\n${data.message}`);
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});

//==========SUBZERO GEMINI
cmd({
  pattern: "gemini",
  alias: ["bard", "googleai"],
  react: "🪄",
  desc: "AI chat.",
  category: "main",
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!q) return reply("Please ask a question or provide input for the AI.");

    const data = await fetchJson(`https://api.dreaded.site/api/gemini2?text=${q}`);
    console.log(data);

    if (!data.message) return reply("No response from the AI.");

    return reply(` \`🤖 SUBZERO GOOGLE AI:\` \n\n${data.message}`);
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});


 
//==========SUBZERO CLAUDE
cmd({
  pattern: "claudeai",
  alias: ["claude", "cloud"],
  react: "⏳",
  desc: "AI chat.",
  category: "main",
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!q) return reply("Please ask a question or provide input for the AI.");

    const data = await fetchJson(`https://api.davidcyriltech.my.id/ai/claude?text=${q}`);
    console.log(data);

    if (!data.message) return reply("No response from the AI.");

    return reply(` \`🤖 SUBZERO CLAUDE AI:\` \n\n${data.message}`);
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});


//==========SUBZERO AI
cmd({
  pattern: "subzero",
  alias: ["subzeroai", "deeai"],
  react: "⏳",
  desc: "AI chat.",
  category: "main",
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!q) return reply("Please ask a question or provide input for the AI.");

    const data = await fetchJson(`https://api.davidcyriltech.my.id/ai/wizardlm?text=${q}`);
    console.log(data);

    if (!data.message) return reply("No response from the AI.");

    return reply(` \`🤖 SUBZERO AI:\` \n\n${data.message}`);
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});

//==========SUBZERO LORI

cmd({
  pattern: "lori",
  alias: ["mrsfrank", "zim"],
  react: "⏳",
  desc: "AI chat.",
  category: "main",
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!q) return reply("Please ask a question or provide input for the AI.");

    const data = await fetchJson(`https://api.davidcyriltech.my.id/ai/lori?text=${q}`);
    console.log(data);

    if (!data.message) return reply("No response from the AI.");

    return reply(` \`🤖 SUBZERO LORI AI:\` \n\n${data.message}`);
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});


 //=========SUHZERO LUDO AI
cmd({
pattern: "ludoai",
alias: ["ludo", "ludi"],
react: "🤖",
desc: "AI chat.",
category: "main",
filename: __filename
}, async (conn, mek, m, {
from,
quoted,
body,
isCmd,
command,
args,
q,
isGroup,
sender,
senderNumber,
botNumber2,
botNumber,
pushname,
isMe,
isOwner,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmins,
isAdmins,
reply
}) => {
try {
if (!q) return reply("Please ask a question or provide input for the AI.");

// Send processing message
await reply("Please wait... Processing your request ");

const data = await fetchJson(`https://api.davidcyriltech.my.id/ai/gpt4omini?text=${q}`);
console.log(data);
if (!data.message) return reply("No response from the AI.");
return reply(`\`\`\`SUBZERO GOOGLE AI:\`\`\` \n\n${data.message}`);

} catch (error) {
console.error(error);
reply(`An error occurred: ${error.message}`);
}
});

