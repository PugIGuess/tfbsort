dataSetVersion = "2021-05-09"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "I Hate My Friends", key: "hatemyfriends" },
      { name: "My Grandma vs. Pneumonia", key: "mgvp" },
      { name: "Self-Titled (The Front Bottoms)", key: "tfb" },
      { name: "Talon of the Hawk",key: "toth" },
      { name: "Back on Top", key: "bot" },
      { name: "Going Grey", key: "gg" },
      { name: "In Sickness and In Flames", key: "insickness" },
      { name: "You Are Who You Hang Out With", key: "whoyouhangoutwith" },
      { name: "Brother's Can't Be Friends", key: "brothers" },
      { name: "Rose", key: "rose" },
      { name: "Liberty and Prosperity", key: "libertyandprosperity" },
      { name: "Needy When I'm Needy", key: "needy" },
      { name: "Ann", key: "ann" },
      { name: "Theresa", key: "theresa" },
      
    ]
  },
  
  
];

dataSet[dataSetVersion].characterData = [
  {
    name: "You Wouldn't Be Laughing",
    img: "a/EX0Klga",
    opts: {
      series: ["hatemyfriends"],
    }
  },
  {
    name: "Lipstick Covered Magnet",
    img: "CzcIMxF.png",
    opts: {
      series: ["hatemyfriends"],
    }
  },
];
