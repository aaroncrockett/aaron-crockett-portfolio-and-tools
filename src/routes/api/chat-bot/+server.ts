import { ChatCompletionRequestMessageRoleEnum, Configuration, OpenAIApi } from 'openai-edge';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { gptQuestions } from '$lib/questions';
import { OPENAI_KEY } from '$env/static/private';

import type { RequestHandler } from './$types';

const config = new Configuration({
	apiKey: OPENAI_KEY
});

const openai = new OpenAIApi(config);

export const POST: RequestHandler = async ({ request }) => {
	const requestBody = await request.json();
	let message;

	switch (requestBody.messages[0].content) {
		case 'art-dev':
			message = gptQuestions['art-dev'];
			break;
		default:
			message = '';
	}

	const messages = [
		{
			role: ChatCompletionRequestMessageRoleEnum.User,
			content: message
		}
	];
	const response = await openai.createChatCompletion({
		model: 'gpt-3.5-turbo',
		stream: true,
		messages: messages
	});

	return new StreamingTextResponse(OpenAIStream(response));
};
