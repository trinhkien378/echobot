const { Client, RichPresence } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();
const bot = new Client({ checkUpdate: false });


const textmain = "";
const textthree = "";
const textfour = "";
const type = "STREAMING";
const pictureGede = [
"https://cdn.discordapp.com/attachments/1248667954774544486/1248871674544128000/206f2fbf09d649ac3b931b5878e67dbf.gif?ex=6669db22&is=666889a2&hm=0dae937eb8589595b7fd1fe5d3f3390fa8c78942e1187fae9738e1b78fb10ad6&",
"https://cdn.discordapp.com/attachments/1248667954774544486/1248871676339421184/103e5baa781358c694c9735d5d314925.gif?ex=6669db22&is=666889a2&hm=3bd27a114c16c7919a62dfb9eda977925c082d3d991d656f4507e259770baac1&",
"https://cdn.discordapp.com/attachments/1248667954774544486/1248871677408968724/6b13d3d588b38782940c3c81c7a3afe6.gif?ex=6669db22&is=666889a2&hm=ebeedaf2e205d185da4500bbf64005025b925042552a5463f849fafcca63219d&",
                         ];
const smallpictureGede = [
"https://cdn.discordapp.com/attachments/1248667954774544486/1249687946140057640/d8f7a94025439b35208cb5a0921986fc.png?ex=666a3058&is=6668ded8&hm=ccaf519d5f67f2ded0f15b6d22dd252f01c83821f67ba7042e4de3b7ded67602&",
"https://cdn.discordapp.com/attachments/1248667954774544486/1249687947083780178/8d5ddcba602e7d9fabdacf8230eca2d8.png?ex=666a3058&is=6668ded8&hm=716f389a5c4ebcbe7913cc6e0d1ba5aae3881c3b17da86788d5b38f307ed3bef&",
  "https://cdn.discordapp.com/attachments/1248667954774544486/1249687946706026600/a658ebb888d8947167841a41c0820364.png?ex=666a3058&is=6668ded8&hm=1334b2f9744c921d5da06c484a98d7dad27372f98afeecb37cabb9f87b3085c9&",
                    ];
let linkButtonone = "";

const xxxx = ['☆★☆★☆★☆','정말 안타깝네요','Vacole - Parys','사랑의','$#&%^&*_@','The moon','Parys - Yêu kiều','GUNG0CAY - PHÚT ĐẮM ĐUỐI'];

const randomTexts = [
  'WORKAHOLIC$',
  '사랑의 ',
  'PARYS|🌙',
  '당신이 싫어요',
 'khanhvyy🚬',
'The moon૭˚₊·',
'Parys - Yêu kiều',
'𝐖𝐱𝐫𝐝𝐢𝐞૭˚₊·',
'☁Ꮺ ꒰ 𝐗𝐢𝐧𝐲𝐚 ꒱🖋️૭˚₊·'
];
const randomtext3 = [];

const randomtext4 = [];

const randomtext5 = [];   

const randomLinks = [
  "https://www.facebook.com/wqpr.07","https://www.youtube.com/watch?v=NbI7R6G53rs","https://www.instagram.com/wqpr.07/"
];


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function getTimestampsForDay(year, month, day) {
  const date = new Date(Date.UTC(year, month, day));
  date.setHours(date.getHours() + 7);
  date.setUTCHours(0, 0, 0, 0);
  const timestampMidnight = date.getTime();
  date.setUTCHours(23, 59, 59, 999);
  const timestampEndOfDay = date.getTime();

  return {
    timestampMidnight,
    timestampEndOfDay
  };
}



app.all('/', (req, res) => {
  res.send("NOW GO TO uptimerobot.com AND PASTE THIS URL");
});

app.listen(8080, () => {
  console.log("Server is ready!!");
});

bot.on('debug', (a) => {
  if (a.startsWith("Hit a 429")) process.kill(1);
});

bot.on('ready', async () => {
  setInterval(() => {
    const date = new Date();
    const datee = date.getDate();
    const hours = (date.getHours() + 7) % 24;
    const minutes = date.getMinutes();
    const months = date.getMonth();
    const year = date.getFullYear();
    const timestamps = getTimestampsForDay(year, months, datee);
    function addZero(number) {
  return number < 10 ? "0" + number : number;
}

  function getRandomNumber() {
    return Math.random() * (30 - 20) + 20;
  }
  function getWRandomNumber() {
    return Math.random() * (5 - 3) + 3;
  }
  function roundToDecimal(number) {
    return Math.round(number * 10) / 10;
  }

  const randomNumber = getRandomNumber();
  const roundedNumber = roundToDecimal(randomNumber);
  const roundwNumber = roundToDecimal(getWRandomNumber());
    const month = addZero(months+1);
    const dates = addZero(datee)
    const resultthree = `〈 ${addZero(hours)}:${addZero(minutes)} 〉ღ〈 ${dates}/${month}/${year} 〉`


    // Randomize the link and text for the button
    randomXX = getRandomElement(xxxx);
    rdpictureGede = getRandomElement(pictureGede);
    rdsmallpictureGede = getRandomElement(smallpictureGede);
    const randomButtonText = getRandomElement(randomTexts);
    const randomButtonText5 = getRandomElement(randomtext5);
    linkButtonone = getRandomElement(randomLinks);
    const pr = new RichPresence()  
      .setName(`khanhvyy`)
      .setURL('https://www.youtube.com/watch?v=UoHI3uL3XQ0')
      .setType(`${type}`.toUpperCase())
      .setApplicationId("1227633544474529934")
      .setAssetsLargeImage(`${rdpictureGede}`)
      .setAssetsSmallImage(`${rdsmallpictureGede}`)
      .setAssetsLargeText(`🌡${roundedNumber} °C - 🍃 ${roundwNumber} m/s`)
      .setAssetsSmallText(`ping: ${bot.ws.ping}ms`)
      .setState(`: ${randomXX}`)
      .setDetails(`${resultthree}`)
      .setStartTimestamp(timestamps.timestampMidnight)
      .setEndTimestamp(timestamps.timestampEndOfDay)
      .addButton(`${randomButtonText}`, `${linkButtonone}`)
     bot.user.setActivity(pr.toJSON());
  }, getRandomInt(1000, 3000));
  console.log(`${bot.user.tag} Status is showed up !!`);
});

bot.login(['TOKEN']);
