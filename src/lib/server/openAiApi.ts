import { Configuration, OpenAIApi } from 'openai-edge';
import { OPENAI_KEY } from '$env/static/private';

const config = new Configuration({
	apiKey: OPENAI_KEY
});

export const openAIInit = () => new OpenAIApi(config);
