import mongoose, { models, Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
    website: {
      type: String,
      required: false,
    },
    bio: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;
