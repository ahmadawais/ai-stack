# ai-stack

[![DOWNLOADS](https://img.shields.io/npm/dt/ai-stack?label=DOWNLOADS%20%20❯&colorA=6A788D&colorB=6A788D&style=flat)](https://www.npmjs.com/package/ai-stack) [![Node.js CLI](https://img.shields.io/badge/-NodeCLI.com-gray.svg?colorB=6A788D&style=flat)](https://NodeCLI.com/?utm_source=FOSS) [![Learn VSCode](https://img.shields.io/badge/-VSCODE.pro-gray.svg?colorB=6A788D&style=flat)](https://VSCode.pro/?utm_source=FOSS) [![Sponsor](https://img.shields.io/badge/-Sponsor-gray.svg?colorB=6A788D&style=flat)](https://github.com/ahmadawais/sponsor?utm_source=FOSS)
[![Follow @MrAhmadAwais on Twitter](https://img.shields.io/badge/FOLLOW%20@MRAHMADAWAIS%20%E2%86%92-gray.svg?colorA=6A788D&colorB=6A788D&style=flat)](https://twitter.com/mrahmadawais/)

> AI Stack for AI Engineers
>
> AI Stack simplifies the creation and management of AI agents using the Langbase SDK.


<br>

[![📟](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/install.png)](./../../)

## Install

```sh
npm install ai-stack
pnpm install ai-stack
```

<br>

[![⚙️](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/usage.png)](./../../)

## Usage

Full documentation is available at [Langbase SDK](https://langbase.com/docs/sdk).
First, set up your environment variables by creating a `.env` file in your project root:

```shell
LANGBASE_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your actual Langbase API key.

Then, use the package in your project:

```javascript
import {
createAgent,
runAgent,
createMemory,
uploadDocument,
retrieveMemory,
} from 'ai-stack';

const agentConfig = {
name: 'MyAgent',
description: 'An AI agent for processing data',
// Add other configuration details as needed
};

async function main() {
// Create an agent
const agent = await createAgent(agentConfig);

// Run the agent
const response = await runAgent(agent.name, [
	{ role: 'user', content: 'Your input here' },
]);
console.log('Agent response:', response);

// Create a memory
const memory = await createMemory({
	name: 'knowledge-base',
	description: 'A memory for storing documents',
});

// Upload a document to memory
await uploadDocument('knowledge-base', {
	contentType: 'application/pdf',
	documentName: 'example-doc.pdf',
	document: fs.readFileSync('path/to/document.pdf'),
	meta: {
	author: 'Author Name',
	url: 'https://example.com/document.pdf',
	},
});

// Retrieve information from memory
const results = await retrieveMemory('knowledge-base', 'Your query here');
console.log('Memory retrieval results:', results);
}

main();
```

<br>

[![📝](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/log.png)](changelog.md)

## Changelog

[❯ Read the changelog here →](changelog.md)

<br>

<small>**KEY**: `📦 NEW`, `👌 IMPROVE`, `🐛 FIX`, `📖 DOC`, `🚀 RELEASE`, and `🤖 TEST`

> _I use [Emoji-log](https://github.com/ahmadawais/Emoji-Log), you should try it and simplify your git commits._

</small>

<br>

[![📃](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/license.png)](./../../)

## License & Conduct

- MIT © [Ahmad Awais](https://twitter.com/MrAhmadAwais/)
- [Code of Conduct](code-of-conduct.md)

<br>

[![🙌](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/connect.png)](./../../)

## Connect

<div align="left">
    <p><a href="https://github.com/ahmadawais"><img alt="GitHub @AhmadAwais" align="center" src="https://img.shields.io/badge/GITHUB-gray.svg?colorB=6cc644&style=flat" /></a>&nbsp;<small><strong>(follow)</strong> To stay up to date on free & open-source software</small></p>
    <p><a href="https://twitter.com/MrAhmadAwais/"><img alt="Twitter @MrAhmadAwais" align="center" src="https://img.shields.io/badge/TWITTER-gray.svg?colorB=1da1f2&style=flat" /></a>&nbsp;<small><strong>(follow)</strong> To get #OneDevMinute daily hot tips & trolls</small></p>
    <p><a href="https://www.youtube.com/AhmadAwais"><img alt="YouTube AhmadAwais" align="center" src="https://img.shields.io/badge/YOUTUBE-gray.svg?colorB=ff0000&style=flat" /></a>&nbsp;<small><strong>(subscribe)</strong> To tech talks & #OneDevMinute videos</small></p>
    <p><a href="https://AhmadAwais.com/"><img alt="Blog: AhmadAwais.com" align="center" src="https://img.shields.io/badge/MY%20BLOG-gray.svg?colorB=4D2AFF&style=flat" /></a>&nbsp;<small><strong>(read)</strong> In-depth & long form technical articles</small></p>
    <p><a href="https://www.linkedin.com/in/MrAhmadAwais/"><img alt="LinkedIn @MrAhmadAwais" align="center" src="https://img.shields.io/badge/LINKEDIN-gray.svg?colorB=0077b5&style=flat" /></a>&nbsp;<small><strong>(connect)</strong> On the LinkedIn profile y'all</small></p>
</div>



[n]: https://NodeCLI.com?utm_source=github&utm_medium=referral&utm_campaign=ahmadawais/cli-meow-help
