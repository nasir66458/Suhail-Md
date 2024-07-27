hconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_27_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjE1LFxuICAgICAgICA2MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyLFxuICAgICAgICA4MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDksXG4gICAgICAgIDg2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTksXG4gICAgICAgIDExNixcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI5LFxuICAgICAgICAxODksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDExMixcbiAgICAgICAgNjUsXG4gICAgICAgIDI2LFxuICAgICAgICAzLFxuICAgICAgICA4NixcbiAgICAgICAgNTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDM1LFxuICAgICAgICAxNixcbiAgICAgICAgNTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTksXG4gICAgICAgIDM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0LFxuICAgICAgICA5MSxcbiAgICAgICAgNzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA1LFxuICAgICAgICAyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NyxcbiAgICAgICAgMzksXG4gICAgICAgIDEwNixcbiAgICAgICAgMzYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTI5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA1LFxuICAgICAgICA5OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTIyLFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTEwLFxuICAgICAgICA0OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNixcbiAgICAgICAgNjMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1LFxuICAgICAgICA3MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAzNCxcbiAgICAgICAgOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDk4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzksXG4gICAgICAgIDk2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDkzLFxuICBcImFkdlNlY3JldEtleVwiOiBcImZiRW02QkhMdHgyUi94aXMwUmhOWmNXdVNiR0xtbVBVU1pXY0hFY2M5dEk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImk5STZlanc1UnFDU3ZOR3Q5VEJOUFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmZmNDAzNDYtODhhNC00NTE1LWFkZmMtN2FkZWFmZGY3NTYxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NixcbiAgICAgIDk1LFxuICAgICAgMTIsXG4gICAgICA2NSxcbiAgICAgIDY4LFxuICAgICAgMjA4LFxuICAgICAgMjMxLFxuICAgICAgMjMxLFxuICAgICAgOTUsXG4gICAgICAyMzgsXG4gICAgICAyMTQsXG4gICAgICAyMDUsXG4gICAgICAxOTAsXG4gICAgICAxMjYsXG4gICAgICAyMDQsXG4gICAgICA5OCxcbiAgICAgIDIwMSxcbiAgICAgIDE3OSxcbiAgICAgIDExOSxcbiAgICAgIDIyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjAsXG4gICAgICAxMTcsXG4gICAgICAyMCxcbiAgICAgIDI4LFxuICAgICAgMjI2LFxuICAgICAgMTE2LFxuICAgICAgMjI2LFxuICAgICAgMjA5LFxuICAgICAgMjAzLFxuICAgICAgNzEsXG4gICAgICA3OCxcbiAgICAgIDIzLFxuICAgICAgMjIzLFxuICAgICAgMTQ1LFxuICAgICAgMzMsXG4gICAgICAxNTQsXG4gICAgICA1MSxcbiAgICAgIDAsXG4gICAgICAyNDQsXG4gICAgICA2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyRVREU0RaUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTg3OTkyMDQ4OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZG08J2SlvCdkonwnZKC8J2SjvCdko7wnZKC8J2ShSDwnZGB8J2RjvCdkaDwnZGW8J2Rn1wiLFxuICAgIFwibGlkXCI6IFwiMTQ0ODg2NzQ1NTQyODE1OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSm1Kdy9vQkVOcmJsTFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJMazhGWThMM3Q1N0FHOVlpTW1yb0ZHZHp2WWRiNkljbEZoSzEvYVNVUkg0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImVlMGVKRFpsZlV2dnpBUXVQNmhCa2M1OFhvSm9NOG1WcXpPYW9KUGQ2djFEanlGSHJkcmhvTUNHTUlrRG1VNmtOalpMVEJPQUpPSHpLb0J4RllIYURRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInRnaGZXcSt4SktVejJQdFpSUEdQREVPdmRhMldQYnZSenZueVhHNllPam9RVkZ6dit5dVBld04zTDN6RXN3Y2lyT0w4dzlmeUx3Sk1TUjEybmgwcGhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE4Nzk5MjA0ODoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjEwMTIxNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlVV1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSVVXLmpzb24iOiAie1wia2V5RGF0YVwiOlwieHhPWldZWk9PeFFOOHhZaWZ5L0x2dzRING5vbXpzMTMvcWdNSzNYamRidz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1MjUzODY5MDUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjEwMTIyMTE1OFwifSIKfQ==  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
