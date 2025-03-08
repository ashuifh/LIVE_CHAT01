import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profilePic: {
      type: String,
      default: "",
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

// Middleware to generate a unique username before saving
userSchema.pre("validate", async function (next) {
  if (!this.username) {
    let baseUsername = this.fullName.toLowerCase().replace(/\s+/g, "") + uuidv4().slice(0, 6);

    // Ensure username is unique
    let isUnique = false;
    while (!isUnique) {
      const existingUser = await mongoose.model("User").findOne({ username: baseUsername });
      if (!existingUser) {
        isUnique = true;
      } else {
        baseUsername = this.fullName.toLowerCase().replace(/\s+/g, "") + uuidv4().slice(0, 6);
      }
    }
    this.username = baseUsername;
  }
  next();
});

const User = mongoose.model("User", userSchema);
export default User;
