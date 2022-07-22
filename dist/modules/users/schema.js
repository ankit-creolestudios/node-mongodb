"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../common/model");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {
        type: {
            firstName: String,
            middleName: String,
            lasName: String,
        },
    },
    phoneNumber: String,
    email: String,
    gender: String,
    isRemoved: {
        type: Boolean,
        default: false,
    },
    modificationNote: [model_1.ModificationNote],
});
exports.default = mongoose.model("users", UserSchema);
