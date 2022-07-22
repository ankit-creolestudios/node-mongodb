import { ModificationNote } from "../common/model";

export interface IUser {
  _id?: String;
  name: {
    firstName: String;
    middleName: String;
    lasName: String;
  };
  email: String;
  phoneNumber: String;
  gender: String;
  isRemoved?: Boolean;
  modificationNote: ModificationNote[];
}
