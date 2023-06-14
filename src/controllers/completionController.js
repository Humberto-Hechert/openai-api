import openai from '../config/openaiConfig.js';

class CompletionController {

    static getCompletion = async (req, res) => {
        const { prompt } = req.body

        try {
            const response = await openai.createCompletion({
                model: 'text-davinci-003',
                prompt: prompt,
                max_tokens: 2048,
                temperature: 0.5,
                n: 1
            });
            res.status(200).send(response.data.choices[0].text)
            console.log(`Texto gerado com ${response.data.usage.total_tokens} tokens`)
        } catch (err) {
            console.error(err)
            res.status(500).send({message: `${err.message} - Falha ao resgatar texto`})
        }
    }

}

export default CompletionController;