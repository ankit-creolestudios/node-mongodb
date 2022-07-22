"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const userController_1 = require("../controller/userController");
class UserRoute {
    constructor() {
        this.userController = new userController_1.UserController();
    }
    routes(app) {
        app.post("/api/user", (req, res) => {
            this.userController.createUser(req, res);
        });
        app.get("/api/user/:id", (req, res) => {
            this.userController.retrieveUser(req, res);
        });
        app.put("/api/user/:id", (req, res) => {
            this.userController.updateUser(req, res);
        });
        app.delete("/api/user/:id", (req, res) => {
            this.userController.removeUser(req, res);
        });
    }
}
exports.UserRoute = UserRoute;
