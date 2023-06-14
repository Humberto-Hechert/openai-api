import openai from '../config/openaiConfig.js'

class ImageController {

    static getNewImage = async (req, res) => {
        const { prompt } = req.body

        try {
          const response = await openai.createImage({
            prompt,
            n: 1,
            size: "512x512",
          });
          res.send(response.data.data[0].url)
          console.log("imagem gerada")
    
        } catch (err) {
          res.send(err.message)
          console.log("Erro")
        }
    }

}

export default ImageController;