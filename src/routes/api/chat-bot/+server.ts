import { OpenAIStream, StreamingTextResponse } from 'ai';
import { openAIInit } from '$lib/server/openAiApi';
import type { RequestHandler } from './$types';

const openAiInstance = openAIInit();

export const POST: RequestHandler = async (event) => {
	const { messages } = await event.request.json();

	const response = await openAiInstance?.createChatCompletion({
		model: 'gpt-3.5-turbo',
		stream: true,
		messages: messages
	});

	const stream = OpenAIStream(response);

	return new StreamingTextResponse(stream);
};
