import { ChatCompletionRequestMessageRoleEnum, Configuration, OpenAIApi } from 'openai-edge';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { OPENAI_KEY } from '$env/static/private';

import type { RequestHandler } from './$types';

const config = new Configuration({
	apiKey: OPENAI_KEY
});

const openai = new OpenAIApi(config);

export const POST: RequestHandler = async ({ request }) => {
	const { messages } = await request.json();

	const response = await openai.createChatCompletion({
		model: 'gpt-3.5-turbo',
		stream: true,
		messages: messages
	});

	const stream = OpenAIStream(response, {
		onStart: async () => {
			// save to the db
		},
		onToken: async (token: string) => {
			//
		},
		onCompletion: async (completion: string) => {
			// save completion to db
		}
	});

	return new StreamingTextResponse(stream);
};
