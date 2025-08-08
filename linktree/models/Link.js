import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true }, // to separate accounts
    name: { type: String, required: true },
    url: { type: String, required: true },
  },
  { timestamps: true }
);

// Fix: Use consistent naming - either "Link" for both or "links" for both
export default mongoose.models.links || mongoose.model("links", LinkSchema);
