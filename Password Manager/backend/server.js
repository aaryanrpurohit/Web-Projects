import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
const PORT = process.env.PORT || 5000;

import passwordRoutes from './routes/passwords.js';

dotenv.config();
const app = express();

app.use(cors({
  origin: "https://web-projects-rgw873vje-aaryan-rajpurohits-projects.vercel.app",
}));
;

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
