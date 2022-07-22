"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const first_route_1 = require("../routes/first-route");
const common_route_1 = require("../routes/common-route");
const environment_1 = require("../environment");
const mongoose_1 = require("mongoose");
const user_route_1 = require("../routes/user-route");
class App {
    constructor() {
        this.mongoUri = `mongodb+srv://root:root@cluster0.7xtiglz.mongodb.net/${environment_1.default.getDBName()}?retryWrites=true&w=majority`;
        this.firstRoute = new first_route_1.FirstRoutes();
        this.customErrorRoute = new common_route_1.CommonRoutes();
        this.userRoute = new user_route_1.UserRoute();
        this.app = express();
        this.config();
        this.mongoSetUp();
        this.firstRoute.routes(this.app);
        // this.customErrorRoute.routes(this.app);
        this.userRoute.routes(this.app);
    }
    config() {
        // application/json type post data
        this.app.use(bodyParser.json());
        // application/x-www-form-encoded post data
        this.app.use(bodyParser.urlencoded());
    }
    mongoSetUp() {
        mongoose_1.default.connect(this.mongoUri).then(() => {
            console.log("db connect ");
        });
    }
}
exports.default = new App().app;
