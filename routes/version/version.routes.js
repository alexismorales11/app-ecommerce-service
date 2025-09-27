const express = require("express");
const VersionesServices = require("../../controllers/version/version.controllers");

const routes = express.Router();

const service = new VersionesServices();

routes.get("/", async (req, res, next) => {
    try {
        const response = await service.currentVersion();
        res.status(200).json(response);
    } catch (error) {
        res.status(error.status).json(error);
    }
});

module.exports = routes;