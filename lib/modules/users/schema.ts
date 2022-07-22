import { ModificationNote } from "../common/model";
import * as mongoose from "mongoose";
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
  modificationNote: [ModificationNote],
});
export default mongoose.model("users", UserSchema);
