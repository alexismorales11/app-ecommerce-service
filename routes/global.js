const express = require('express');
const versionRoutes = require('./version/version.routes');

const versionApi = process.env.VERSION_API;

function routers(app) {
    const router = express.Router();

    app.use(`/${versionApi}`, router);

    router.use('/version', versionRoutes)

}
module.exports = routers;