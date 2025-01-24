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


const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Put Your Session ID Here",
// add your Session Id 
 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen

 
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*υℓτιмατє ѕυϐzєяο м∂ ϐοτ νιєωє∂ γουя ѕτατυѕ ❄*",
// set the auto reply massage on status reply  
 
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
 
BOT_NAME: process.env.BOT_NAME || "SUBZERO-MD",
// add bot namw here for menu
 
STICKER_NAME: process.env.STICKER_NAME || "ѕυϐzєяο-м∂-ϐοτ",
// type sticker pack name 

CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    

 
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 

 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 

 OWNER_NUMBER: process.env.OWNER_NUMBER || "263719×××",
// add your bot owner number

 OWNER_NAME: process.env.OWNER_NAME || "Mr Frank OFC",
// add bot owner name

 DESCRIPTION: process.env.DESCRIPTION || "*© Gᴇɴᴇʀᴀᴛᴇᴅ ʙʏ Sᴜʙᴢᴇʀᴏ*",
// add bot owner name    

 ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/v1nC1PP/mrfrankofc.jpg",
// add img for alive msg

 READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs

 AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs

 ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  

 MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 

 ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 

 AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices

 AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 

 AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 

 ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 

 PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod

 AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   

 DEV: process.env.DEV || "263719647303",
//replace with your whatsapp number        

 ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 

 ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", // change it to 'same' if you want to resend deleted message in same chat 

 AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};





/*_____/\\\\\\\\\\\____/\\\________/\\\__/\\\\\\\\\\\\\____/\\\\\\\\\\\\\\\__/\\\\\\\\\\\\\\\____/\\\\\\\\\___________/\\\\\_________________/\\\\____________/\\\\__/\\\\\\\\\\\\____        
 ___/\\\/////////\\\_\/\\\_______\/\\\_\/\\\/////////\\\_\////////////\\\__\/\\\///////////___/\\\///////\\\_______/\\\///\\\______________\/\\\\\\________/\\\\\\_\/\\\////////\\\__       
  __\//\\\______\///__\/\\\_______\/\\\_\/\\\_______\/\\\___________/\\\/___\/\\\_____________\/\\\_____\/\\\_____/\\\/__\///\\\____________\/\\\//\\\____/\\\//\\\_\/\\\______\//\\\_      
   ___\////\\\_________\/\\\_______\/\\\_\/\\\\\\\\\\\\\\__________/\\\/_____\/\\\\\\\\\\\_____\/\\\\\\\\\\\/_____/\\\______\//\\\___________\/\\\\///\\\/\\\/_\/\\\_\/\\\_______\/\\\_     
    ______\////\\\______\/\\\_______\/\\\_\/\\\/////////\\\_______/\\\/_______\/\\\///////______\/\\\//////\\\____\/\\\_______\/\\\___________\/\\\__\///\\\/___\/\\\_\/\\\_______\/\\\_    
     _________\////\\\___\/\\\_______\/\\\_\/\\\_______\/\\\_____/\\\/_________\/\\\_____________\/\\\____\//\\\___\//\\\______/\\\____________\/\\\____\///_____\/\\\_\/\\\_______\/\\\_   
      __/\\\______\//\\\__\//\\\______/\\\__\/\\\_______\/\\\___/\\\/___________\/\\\_____________\/\\\_____\//\\\___\///\\\__/\\\______________\/\\\_____________\/\\\_\/\\\_______/\\\__  
       _\///\\\\\\\\\\\/____\///\\\\\\\\\/___\/\\\\\\\\\\\\\/___/\\\\\\\\\\\\\\\_\/\\\\\\\\\\\\\\\_\/\\\______\//\\\____\///\\\\\/_______________\/\\\_____________\/\\\_\/\\\\\\\\\\\\/___ 
        ___\///////////________\/////////_____\/////////////____\///////////////__\///////////////__\///________\///_______\/////_________________\///______________\///__\////////////_____


⭐ 𝐂𝐑𝐄𝐀𝐓𝐎𝐑        ➜ DARRELL MUCHERI
⭐ 𝐑𝐄𝐋𝐄𝐀𝐒𝐄 𝐃𝐀𝐓𝐄   ➜ 15 DEC 2024 (12.01 AM)
⭐ 𝐋𝐀𝐍𝐆𝐔𝐀𝐆𝐄       ➜ JAVASCRIPT & NODEJS
⭐ 𝐂𝐎𝐍𝐓𝐀𝐂𝐓        ➜ +263719647303


*/
