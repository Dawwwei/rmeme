# Random Meme Generator
Returns the URL of a random meme image (made for a discord bot)
##### Example:
```js
const rmeme = require('rmeme');
console.log(rmeme.generate()); // ==> URL (No promise)
```
##### Discord Bot Example:
```js
const { SlashCommandBuilder } = require('discord.js');
const rmeme = require('rmeme');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('meme')
        .setDescription('Replies with a random meme'),
    async execute(interaction) {
        try {
            const memeURL = rmeme.generate();
            await interaction.reply({ content: 'Here is a random meme', files: [memeURL] });
        } catch (error) {
            console.log(error);
        }
    },
};
```