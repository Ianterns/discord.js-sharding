const { Sharder } = require('discord.js');

const config = require("./config.json");

const manager = new Sharder('./index.js', { token: config.token, autoSpawn: true, respawn: true }); 

// auto respawn

manager.spawn(1000);

// put amount of shards ^
