module.exports.config = { 
  usePrefix: true,
  name: "kill",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "SAKIBIN",
  description: "nothing",
  commandCategory: "group",
  usages: "...",
  cooldowns: 5,
  dependencies: {
      "fs-extra": "",
      "axios": ""
  }
};

module.exports.run = async function({ api, args, Users, event }) {
  const sprefix = args.join("");
  const order = ["minato", "cake", "chocolate", "candy", "milk", "chips", "anime", "fruit"];

  // Function to get a random order
  const getRandomOrder = () => order[Math.floor(Math.random() * order.length)];

  var a = function (a) { api.sendMessage(a, event.threadID); };

  // Use getRandomOrder() in each setTimeout
  a(`${sprefix}pin ${getRandomOrder()} - 30`);
  setTimeout(() => { a(`${sprefix}pin ${getRandomOrder()} - 30`); }, 3000);
  setTimeout(() => { a(`${sprefix}pin ${getRandomOrder()} - 30`); }, 5000);
  setTimeout(() => { a(`${sprefix}pin ${getRandomOrder()} - 30`); }, 7000);
  setTimeout(() => { a(`${sprefix}pin ${getRandomOrder()} - 30`); }, 9000);
  setTimeout(() => { a(`${sprefix}pin ${getRandomOrder()} - 30`); }, 12000);
  setTimeout(() => { a(`${sprefix}pin ${getRandomOrder()} - 30`); }, 15000);
  setTimeout(() => { a(`${sprefix}pin ${getRandomOrder()} - 30`); }, 17000);
  setTimeout(() => { a(`${sprefix}pin ${getRandomOrder()} - 30`); }, 20000);
  setTimeout(() => { a(`${sprefix}pin ${getRandomOrder()} - 30`); }, 23000);
  setTimeout(() => { a(`${sprefix}pin ${getRandomOrder()} - 30`); }, 25000);
  setTimeout(() => { a(`${sprefix}pin ${getRandomOrder()} - 30`); }, 28500);
  setTimeout(() => { a(`${sprefix}pin ${getRandomOrder()} - 30`); }, 31000);
  setTimeout(() => { a(`${sprefix}pin ${getRandomOrder()} - 30`); }, 36000);
  setTimeout(() => { a(`${sprefix}pin ${getRandomOrder()} - 30`); }, 39000);
  setTimeout(() => { a(`${sprefix}pin ${getRandomOrder()} - 30`); }, 40000);
  setTimeout(() => { a(`${sprefix}pin ${getRandomOrder()} - 30`); }, 65000);
  setTimeout(() => { a(`${sprefix}pin ${getRandomOrder()} - 30`); }, 70000);
  setTimeout(() => { a(`${sprefix}pin ${getRandomOrder()} - 30`); }, 75000);
  setTimeout(() => { a(`${sprefix}pin ${getRandomOrder()} - 30`); }, 80000);
  setTimeout(() => { a(`${sprefix}pin ${getRandomOrder()} - 30`); }, 85000);
  setTimeout(() => { a(`${sprefix}pin ${getRandomOrder()} - 30`); }, 90000);
  setTimeout(() => { a(`${sprefix}pin ${getRandomOrder()} - 30`); }, 95000);
  setTimeout(() => { a(`${sprefix}pin ${getRandomOrder()} - 30`); }, 100000);
  setTimeout(() => { a(`${sprefix}pin ${getRandomOrder()} - 30`); }, 105000);
  setTimeout(() => { a(`${sprefix}pin ${getRandomOrder()} - 30`); }, 115000);
};
