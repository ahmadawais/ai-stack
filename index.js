require('dotenv').config();
const {Langbase} = require('langbase');

const langbase = new Langbase({
	apiKey: process.env.LANGBASE_API_KEY
});

async function createAgent(agentConfig) {
	try {
		const pipe = await langbase.pipe.create(agentConfig);
		return pipe;
	} catch (error) {
		console.error('Error creating agent:', error);
		throw error;
	}
}

async function runAgent(pipeName, messages, options = {}) {
	try {
		const response = await langbase.pipe.run({
			name: pipeName,
			messages,
			...options
		});
		return response;
	} catch (error) {
		console.error('Error running agent:', error);
		throw error;
	}
}

async function createMemory(memoryConfig) {
	try {
		const memory = await langbase.memory.create(memoryConfig);
		return memory;
	} catch (error) {
		console.error('Error creating memory:', error);
		throw error;
	}
}

async function uploadDocument(memoryName, documentConfig) {
	try {
		await langbase.memory.documents.upload({
			memoryName,
			...documentConfig
		});
	} catch (error) {
		console.error('Error uploading document:', error);
		throw error;
	}
}

async function retrieveMemory(memoryName, query) {
	try {
		const results = await langbase.memory.retrieve({
			query,
			memory: [{name: memoryName}]
		});
		return results;
	} catch (error) {
		console.error('Error retrieving memory:', error);
		throw error;
	}
}

module.exports = {
	createAgent,
	runAgent,
	createMemory,
	uploadDocument,
	retrieveMemory
};
