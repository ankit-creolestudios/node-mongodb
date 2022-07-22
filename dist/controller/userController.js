"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const service_1 = require("../modules/common/service");
const service_2 = require("../modules/users/service");
class UserController {
    constructor() {
        this.userService = new service_2.default();
    }
    createUser(req, res) {
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
            this.userService.createUser(userParams, (err, userData) => {
                if (err) {
                    (0, service_1.mongoError)(err, res);
                }
                else {
                    (0, service_1.successResponse)("user created", userData, res);
                }
            });
        }
        else {
            (0, service_1.insufficientParameters)(res);
        }
    }
    retrieveUser(req, res) {
        if (req.params.id) {
            const query_param = { _id: req.params.id };
            this.userService.filterUser(query_param, (err, userData) => {
                if (err) {
                    (0, service_1.mongoError)(err, res);
                }
                else {
                    (0, service_1.successResponse)("user retrieved", userData, res);
                }
            });
        }
        else {
            (0, service_1.insufficientParameters)(res);
        }
    }
    updateUser(req, res) {
        if ((req.params.id && req.body.name.firstName) ||
            req.body.name.middleName ||
            req.body.name.lasName ||
            req.body.email ||
            req.body.phoneNumber ||
            req.body.gender) {
            const query = { _id: req.params.id };
            this.userService.filterUser(query, (err, userData) => {
                console.log(userData);
                if (err) {
                    (0, service_1.mongoError)(err, res);
                }
                else if (userData) {
                    userData.modificationNote.push({
                        modified_on: new Date(Date.now()),
                        modified_by: null,
                        modification_note: "user updated",
                    });
                    const updateUser = {
                        _id: req.params.id,
                        name: req.body.name
                            ? {
                                firstName: req.body.name.firstName
                                    ? req.body.name.firstName
                                    : userData.name.firstName,
                                middleName: req.body.name.middlename
                                    ? req.body.name.middleName
                                    : userData.name.middleName,
                                lasName: req.body.name.lasName
                                    ? req.body.name.lasName
                                    : userData.name.lasName,
                            }
                            : userData.name,
                        email: req.body.email ? req.body.email : userData.email,
                        phoneNumber: req.body.phoneNumber
                            ? req.body.phoneNumber
                            : userData.phoneNumber,
                        gender: req.body.gender ? req.body.gender : userData.gender,
                        isRemoved: req.body.isRemoved
                            ? req.body.isRemoved
                            : userData.isRemoved,
                        modificationNote: userData.modificationNote,
                    };
                    this.userService.updateUser(updateUser, (err) => {
                        if (err) {
                            (0, service_1.mongoError)(err, res);
                        }
                        else {
                            (0, service_1.successResponse)("user update", null, res);
                        }
                    });
                }
                else {
                    (0, service_1.failureResponse)("user not found", null, res);
                }
            });
        }
        else {
            (0, service_1.insufficientParameters)(res);
        }
    }
    removeUser(req, res) {
        if (req.params.id) {
            this.userService.removeUser(req.params.id, (err, removeDetail) => {
                console.log(removeDetail);
                if (err) {
                    (0, service_1.mongoError)(err, res);
                }
                else if (removeDetail.deletedCount !== 0) {
                    (0, service_1.successResponse)("remove user", null, res);
                }
                else {
                    (0, service_1.failureResponse)("user not found", null, res);
                }
            });
        }
        else {
            (0, service_1.insufficientParameters)(res);
        }
    }
}
exports.UserController = UserController;
