import mongoose from "mongoose";

const Schema = mongoose.Schema;

interface UserSchemaType extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  date: Date;
  colo: {
    dcjjcdckjdckdc: string;
  };
}
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  colo: {
    dcjjcdckjdckdc: {
      type: String,
      
    },
  },
});
export const User = mongoose.model<UserSchemaType>("User", userSchema);
