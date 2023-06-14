import express from 'express'
import images from './imagesRoutes.js'

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send("Hello World")
    })

    app.use(
        express.json(),
        images
        )
}

export default routes;