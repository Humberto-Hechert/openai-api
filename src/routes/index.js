import express from 'express';
import images from './imagesRoutes.js';
import completions from './completionRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send("Hello World")
    })

    app.use(
        express.json(),
        images,
        completions
        )
}

export default routes;