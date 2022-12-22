const { SlashCommandBuilder } = require('discord.js');
const { Configuration, OpenAIApi } = require('openai');
const { openaiSecretKey } = require('../config.json');
const configuration = new Configuration({
	apiKey: openaiSecretKey,
});
const openai = new OpenAIApi(configuration);

let fact = '';

async function generateFact() {
	const prompt = 'Tell me a fact about an important person in history';

	const response = await openai.createCompletion({
		model: 'text-davinci-003',
		prompt: prompt,
		temperature: 0,
		max_tokens: 100,
	});

	console.log(response.data.choices);
	fact = response.data.choices[0].text;
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
