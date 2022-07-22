"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoError = exports.insufficientParameters = exports.failureResponse = exports.successResponse = void 0;
const model_1 = require("./model");
function successResponse(message, data, response) {
    response.status(model_1.response_status_code.success).json({
        STATUS: "SUCCESS",
        MESSAGE: message,
        data,
    });
}
exports.successResponse = successResponse;
function failureResponse(message, data, response) {
    response.status(model_1.response_status_code.success).json({
        STATUS: "failure",
        MESSAGE: message,
        data,
    });
}
exports.failureResponse = failureResponse;
function insufficientParameters(res) {
    res.status(model_1.response_status_code.bad_request).json({
        STATUS: "failure",
        MESSAGE: "insufficient parameters",
        data: {},
    });
}
exports.insufficientParameters = insufficientParameters;
function mongoError(err, response) {
    response.status(model_1.response_status_code.internal_server_error).json({
        STATUS: "failure",
        MESSAGE: "mongodb error",
        error: err,
    });
}
exports.mongoError = mongoError;
