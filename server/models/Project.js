import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: [String],
  githubLink: String,
  liveLink: String,
  order: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model("Project", projectSchema);