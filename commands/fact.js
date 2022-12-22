const { SlashCommandBuilder } = require('discord.js');

// A list of interesting facts
const facts = [
    "Did you know that the world's oldest known living tree is a bristlecone pine located in the White Mountains of California? This tree, known as 'Methuselah,' is over 5,000 years old!",
    "The human nose can detect over 1 trillion different scents!",
    "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after just 38 minutes.",
    "The longest word in the English language, according to the Guinness Book of World Records, is pneumonoultramicroscopicsilicovolcanoconiosis, which is a lung disease caused by the inhalation of very fine silicate or quartz dust."
]

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fact')
		.setDescription('Replies with a random fact'),
	async execute(interaction) {
		await interaction.reply(facts[0]);
	},
};