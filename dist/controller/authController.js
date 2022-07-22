"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authService_1 = require("../modules/users/authService");
class AuthController {
    constructor() {
        this.authService = new authService_1.default();
    }
    authUserCrete(req, res) {
        if (req.body.name &&
            req.body.name.firstName &&
            req.body.name.middleName &&
            req.body.name.lasName &&
            req.body.email &&
            req.body.phoneNumber &&
            req.body.gender) {
            const userParams = {
                name: {
                    firstName: req.body.name.firstName,
                    middleName: req.body.name.middleName,
                    lasName: req.body.name.lasName,
                },
                email: req.body.email,
                phoneNumber: req.body.phoneNumber,
                gender: req.body.gender,
                isRemoved: req.body.isRemoved,
                modificationNote: [
                    {
                        modified_on: new Date(Date.now()),
                        modified_by: null,
                        modification_note: "user created",
                    },
                ],
            };
        }
    }
}
