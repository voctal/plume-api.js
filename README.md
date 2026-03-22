<div align="center">
<br />
    <h1>Plume API.js</h1>
    <br />
    <p>
        <a href="https://voctal.dev/discord"><img src="https://img.shields.io/discord/1336303640725553213?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
        <a href="https://www.npmjs.com/package/@voctal/plume-api"><img src="https://img.shields.io/npm/v/@voctal/plume-api.svg?maxAge=3600" alt="npm version" /></a>
        <a href="https://www.npmjs.com/package/@voctal/plume-api"><img src="https://img.shields.io/npm/dt/@voctal/plume-api.svg?maxAge=3600" alt="npm downloads" /></a>
        <a href="https://github.com/voctal/plume-api.js/commits/main"><img alt="Last commit" src="https://img.shields.io/github/last-commit/voctal/plume-api.js?logo=github&logoColor=ffffff" /></a>
    </p>
</div>

# About

`@voctal/plume-api` is a module that allows you to easily use Plume API. See the [module docs](https://docs.voctal.dev/docs/packages/plume-api/stable), and the [API docs](https://plume.voctal.dev/docs) to understand how to use it.

# Installation

```sh
npm install @voctal/plume-api
```

# Links

- [Plume API](https://plume.voctal.dev)
- [Plume API documentation](https://plume.voctal.dev/docs)
- [Module documentation](https://docs.voctal.dev/docs/packages/plume-api/stable)
- [Discord server](https://voctal.dev/discord)
- [GitHub](https://github.com/voctal/plume-api.js)
- [npm](https://npmjs.com/package/@voctal/plume-api)
- [Voctal](https://voctal.dev)

# Examples

If you are developing a Discord bot using `discord.js`, here is how to use Plume API:

```js
const { Client } = require("discord.js");
const { PlumeAPI } = require("@voctal/plume-api");

// Your discord.js client
const client = new Client({
    /* ... */
});

// Attach PlumeAPI to your client
client.plumeAPI = new PlumeAPI();
```

You can now use Plume API anywhere in your bot. <br/>For example, in a slash command:

```js
async execute(interaction) {
    const client = interaction.client;

    // Query the API
    const joke = await client.plumeAPI.joke();

    // Show the response
    await interaction.reply(
        `Question: ${joke.question}`
        + `\nAnswer: ||${joke.answer}||`
    );
}
```

To send an image received from the API, you can use the `AttachmentBuilder` class from `discord.js`:

```js
const { AttachmentBuilder } = require("discord.js");

async execute(interaction) {
    const client = interaction.client;

    // Since downloading the image can take some time
    // depending on your connection speed, you should defer.
    await interaction.deferReply();

    const buffer = await client.plumeAPI.facts("PlumeAPI is the best API");
    const attachment = new AttachmentBuilder(buffer, { name: "image.png" });

    await interaction.editReply({ files: [attachment] });
}
```

# Documentation

Plume API provides two main resources for documentation:

- **API Reference:**  
   [Plume API Documentation](https://plume.voctal.dev/docs)  
   This documentation covers all available endpoints, types, and detailed comments for the API.

- **Module Reference:**  
   [Module Documentation](https://docs.voctal.dev/docs/packages/plume-api/stable)  
   This documentation explains how to use the `@voctal/plume-api` npm package, with all available methods and types.

For most use cases, you'll want to refer to the [`PlumeAPI` class page](https://docs.voctal.dev/docs/packages/plume-api/stable/PlumeAPI:Class), which lists all available methods for interacting with the API through this module.

# Help

If you don't understand something in the documentation, are experiencing problems, or you just need a gentle nudge in the right direction, please don't hesitate to join our official [Discord Server](https://voctal.dev/discord).
