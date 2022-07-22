import { Response } from "express";
import { response_status_code } from "./model";

export function successResponse(
  message: string,
  data: any,
  response: Response
) {
  response.status(response_status_code.success).json({
    STATUS: "SUCCESS",
    MESSAGE: message,
    data,
  });
}
export function failureResponse(
  message: string,
  data: any,
  response: Response
) {
  response.status(response_status_code.success).json({
    STATUS: "failure",
    MESSAGE: message,
    data,
  });
}

export function insufficientParameters(res: Response) {
  res.status(response_status_code.bad_request).json({
    STATUS: "failure",
    MESSAGE: "insufficient parameters",
    data: {},
  });
}
export function mongoError(err: any, response: Response) {
  response.status(response_status_code.internal_server_error).json({
    STATUS: "failure",
    MESSAGE: "mongodb error",
    error: err,
  });
}
