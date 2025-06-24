import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
const PORT = process.env.PORT || 5000;

import passwordRoutes from './routes/passwords.js';

dotenv.config();
const app = express();

const allowedOrigins = [
  "http://localhost:5173", // Vite dev
  "https://web-projects-rgw873vje-aaryan-rajpurohits-projects.vercel.app", // your frontend prod
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));


app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.error(err));

// Routes
app.use('/api/passwords', passwordRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
