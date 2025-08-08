import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true }, // to separate accounts
    name: { type: String, required: true },
    url: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Link || mongoose.model("links", LinkSchema);
