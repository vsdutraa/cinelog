import mongoose, { Schema, models } from "mongoose";

const savedMoviesSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    savedMovies: [
      {
        movieId: String,
        savedAt: { type: Date, default: Date.now },
      },
    ],
    favoriteMovies: [
      {
        movieId: String,
        favoritedAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

const SavedMovies =
  models.SavedMovies || mongoose.model("SavedMovies", savedMoviesSchema);
export default SavedMovies;
