import { ModificationNote } from "../common/model";
import * as mongoose from "mongoose";
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
  modificationNote: [ModificationNote],
});
export default mongoose.model("authUsers", authSchema);
