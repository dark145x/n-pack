const axios = require('axios');
const baseApiUrl = async () => {
  const base = await axios.get(`https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`);
  return base.data.api;
}; 
module.exports = {
  config: {
  name: "bing",
  version: "1.0",
  credits: "dipto",
  hasPermssion: 1,
  usePrefix: true,
  prefix: true,
  description: "Generate images by Dalle-3 AI",
  commandCategory: "ai",
  category: "download",
  usages:
    "[text] \nJamon [A 17/18/19 years old boy/girl watching football match on tv and written Sakibin and 69 on the back of his Dress , 4k]",
  cooldowns: 5,
}, 
  run: async({ api, event, args }) => {
    const prompt = (event.messageReply?.body.split("dalle")[1] || args.join(" ")).trim();
    if (!prompt) return api.sendMessage("❌| Wrong Format. ✅ | Use: 17/18 years old boy/girl watching football match on TV with 'Dipto' and '69' written on the back of their dress, 4k", event.threadID, event.messageID);
    try {
       //const cookies = "cookies here (_U value)";
const cookies = ["1my4jjY_DuzuqrR_Cjl9FFpuuZjh0itiuuuv-hw7sEXpwubN5tCp092Ale4XL7Yj1W8heHL2G7zcMsBKtnev2YrL5sn9nLxT3x1JDt1AbtVPAvp_rBqZlILF04HQT8TXDK2PJYU8OT2Im02dkgzeKuLeJgyPgyt3Zfk2NjBmingwuUIKvwWI4bGA4iU6SQMx9Qz-HDgsrwiQse0LgzJDhaA"];
const randomCookie = cookies[Math.floor(Math.random() * cookies.length)];
      const wait = api.sendMessage("Wait koro baby 😽", event.threadID);
      const response = await axios.get(`${await baseApiUrl()}/dalle?prompt=${prompt}&key=dipto008&cookies=${randomCookie}`);
const imageUrls = response.data.imgUrls || [];
      if (!imageUrls.length) return api.sendMessage("Empty response or no images generated.", event.threadID, event.messageID);
      const images = await Promise.all(imageUrls.map(url => axios.get(url, { responseType: 'stream' }).then(res => res.data)));
    api.unsendMessage(wait.messageID);
   api.sendMessage({ body: `✅ | Here's Your Generated Photo 😘`, attachment: images }, event.threadID, event.messageID);
    } catch (error) {
      console.error(error);
      api.sendMessage(`Generation failed!\nError: ${error.message}`, event.threadID, event.messageID);
    }
  }
}