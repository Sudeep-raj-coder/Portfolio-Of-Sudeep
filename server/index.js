import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import contactRoutes from "./routes/contact.js";
import projectRoutes from "./routes/projects.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectRoutes);

app.listen(5000, () => console.log("Server running on 5000"));