module.exports.config = { 
    usePrefix: true,
    name: "tag",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "sakibin",
    description: "Mention users whose names start with the given keyword.",
    commandCategory: "utility",
    usages: "[keyword]",
    cooldowns: 5
};

module.exports.run = async function({ api, event, args, Users }) {
    const keyword = args[0]?.toLowerCase(); // Get the keyword from the arguments
    if (!keyword) {
        return api.sendMessage("Please provide a keyword to search for.", event.threadID);
    }

    const { threadID } = event;
    const threadInfo = await api.getThreadInfo(threadID); // Get all members in the thread

    const participants = threadInfo.participantIDs; // IDs of all participants in the group
    const mentions = [];
    const matchedNames = [];

    for (let userID of participants) {
        try {
            const userName = await Users.getNameUser(userID); // Fetch the user's name
            if (userName?.toLowerCase().startsWith(keyword)) { // Check if name starts with keyword
                mentions.push({ tag: userName, id: userID }); // Add to mentions array
                matchedNames.push(userName); // Add to matched names for summary
            }
        } catch (err) {
            console.log(`Error fetching user name for ID ${userID}:`, err);
        }
    }

    if (mentions.length === 0) {
        return api.sendMessage(`No users found with names starting with "${keyword}".`, threadID);
    }

    const messageBody = `${matchedNames.join(", ")}`;
    api.sendMessage({ body: messageBody, mentions }, threadID);
};
