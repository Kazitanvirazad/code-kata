/**
 * author:Kazi tanvir azad
 */

"use strict";

const express = require("express");

const server = express();

const path = require('path');

const cors = require('cors');

server.use(cors());

/**
 * adding middleware
 * Returns middleware that only parses json and only looks at requests 
 * where the Content-Type header matches the type option.
 */
server.use(express.json());

const apiRouter = require("./router/apiRouter");

require("dotenv").config();

const PORT = process.env.PORT;

const apiVersion = process.env.API_VERSION;

const apiKey = process.env.API_KEY;

server.use(express.static(path.resolve(__dirname, "FrontEnd-ReactApp", "dist")));

/**
 * adding router middleware in 
 * the project for routing to api controllers
 */
server.use(`/api/${apiVersion}/${apiKey}`, apiRouter);

server.get("/*", (req, res, next) => {
    res.sendFile(path.resolve(__dirname, "FrontEnd-ReactApp", "dist", "index.html"));
});

/**
* Starting express server
* on localhost
*/
server.listen(PORT, process.env.HOST_NAME, () => {
    console.log(`Server started on port: ${PORT}`);
});