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
    },
    lastName: {
      type: String,
    },
    location: {
      type: String,
    },
    website: {
      type: String,
    },
    bio: {
      type: String,
    },
    savedMovies: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true },
);

const User = models.User || mongoose.model("User", userSchema);
export default User;
