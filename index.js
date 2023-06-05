import * as dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'
import openai from './src/config/openaiConfig.js'

dotenv.config()
const app = express()
app.use(bodyParser.json())
app.use(cors())

const port = process.env.PORT || 3050

app.post("/create", async (req, res) => {
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
  });

app.listen(port, () => {
  console.log("server started");
});