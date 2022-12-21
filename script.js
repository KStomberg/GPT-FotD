const Discord = require('discord.js');
const client = new Discord.Client();
const random = require('random');

// Replace TOKEN with your bot's token
client.login('TOKEN');

client.on('ready', () => {
    console.log(`${client.user.tag} has connected to Discord!`);
});

// A list of interesting facts
const facts = [
    "Did you know that the world's oldest known living tree is a bristlecone pine located in the White Mountains of California? This tree, known as 'Methuselah,' is over 5,000 years old!",
    "The human nose can detect over 1 trillion different scents!",
    "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after just 38 minutes.",
    "The longest word in the English language, according to the Guinness Book of World Records, is pneumonoultramicroscopicsilicovolcanoconiosis, which is a lung disease caused by the inhalation of very fine silicate or quartz dust."
]

// A command that posts an interesting fact to a designated channel
client.on('message', message => {
    if (message.content === '!fact') {
        // Choose a random fact from the list
        const fact = random.choice(facts);
        // Replace CHANNEL_NAME with the name of the channel you want to post the fact to
        const channel = client.channels.find(channel => channel.name === 'CHANNEL_NAME');
        channel.send(fact);
    }
});
