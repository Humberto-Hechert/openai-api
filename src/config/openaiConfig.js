import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: "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"
  });

  const openai = new OpenAIApi(configuration)

  export default openai;