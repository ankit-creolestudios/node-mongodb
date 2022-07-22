import { Request, Response } from "express";
import {
  failureResponse,
  insufficientParameters,
  mongoError,
  successResponse,
} from "../modules/common/service";
import { IUser } from "../modules/users/model";
import users from "../modules/users/schema";
import UserService from "../modules/users/service";

export class UserController {
  private userService: UserService = new UserService();

  public createUser(req: Request, res: Response) {
    if (
      req.body.name &&
      req.body.name.firstName &&
      req.body.name.middleName &&
      req.body.name.lasName &&
      req.body.email &&
      req.body.phoneNumber &&
      req.body.gender
    ) {
      const userParams: IUser = {
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
      this.userService.createUser(userParams, (err: any, userData: IUser) => {
        if (err) {
          mongoError(err, res);
        } else {
          successResponse("user created", userData, res);
        }
      });
    } else {
      insufficientParameters(res);
    }
  }
  public retrieveUser(req: Request, res: Response) {
    if (req.params.id) {
      const query_param = { _id: req.params.id };
      this.userService.filterUser(query_param, (err: any, userData: IUser) => {
        if (err) {
          mongoError(err, res);
        } else {
          successResponse("user retrieved", userData, res);
        }
      });
    } else {
      insufficientParameters(res);
    }
  }
  public updateUser(req: Request, res: Response) {
    if (
      (req.params.id && req.body.name.firstName) ||
      req.body.name.middleName ||
      req.body.name.lasName ||
      req.body.email ||
      req.body.phoneNumber ||
      req.body.gender
    ) {
      const query = { _id: req.params.id };
      this.userService.filterUser(query, (err: any, userData: IUser) => {
        console.log(userData);
        if (err) {
          mongoError(err, res);
        } else if (userData) {
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
          this.userService.updateUser(updateUser, (err: any) => {
            if (err) {
              mongoError(err, res);
            } else {
              successResponse("user update", null, res);
            }
          });
        } else {
          failureResponse("user not found", null, res);
        }
      });
    } else {
      insufficientParameters(res);
    }
  }
  public removeUser(req: Request, res: Response) {
    if (req.params.id) {
      this.userService.removeUser(req.params.id, (err: any, removeDetail) => {
        console.log(removeDetail);
        if (err) {
          mongoError(err, res);
        } else if (removeDetail.deletedCount !== 0) {
          successResponse("remove user", null, res);
        } else {
          failureResponse("user not found", null, res);
        }
      });
    } else {
      insufficientParameters(res);
    }
  }
}
