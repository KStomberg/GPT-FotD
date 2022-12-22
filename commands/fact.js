const { SlashCommandBuilder } = require('discord.js');
const { Configuration, OpenAIApi } = require('openai');
const { openaiSecretKey } = require('../config.json');
const configuration = new Configuration({
	apiKey: openaiSecretKey,
});
const openai = new OpenAIApi(configuration);

let fact = '';

async function generateFact() {
	const prompt = 'Tell me a fact about an important person in history 113';

	const response = await openai.createCompletion({
		model: 'text-davinci-003',
		prompt: prompt,
		temperature: 0,
		max_tokens: 100,
	});

	console.log(response.data.choices);
	fact = `Here is a random fact <@&1033340899461173320> ${response.data.choices[0].text}`;
	console.log(fact);
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fact')
		.setDescription('Replies with a random fact'),
	async execute(interaction) {
		await generateFact();
		await interaction.reply(fact);
	},
};
