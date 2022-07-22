"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../common/model");
const mongoose = require("mongoose");
const authSchema = new mongoose.Schema({
    name: {
        type: {
            firstName: String,
            middleName: String,
            lasName: String,
        },
    },
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        minlength: 6,
        required: true,
    },
    phoneNumber: String,
    email: String,
    gender: String,
    modificationNote: [model_1.ModificationNote],
});
exports.default = mongoose.model("authUsers", authSchema);
