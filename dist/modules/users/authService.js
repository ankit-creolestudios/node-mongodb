"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authUsers_1 = require("./authUsers");
class AuthService {
    createUser(userParams, callback) {
        const _user = new authUsers_1.default(userParams);
        _user.save(callback);
    }
}
exports.default = AuthService;
