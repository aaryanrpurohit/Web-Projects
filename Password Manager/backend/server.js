import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import passwordRoutes from './routes/passwords.js';

dotenv.config();
const app = express();

// ✅ CORS — allow frontend to talk to backend
app.use(cors({
  origin: [
    "https://rawvault.vercel.app", // ✅ this is your actual deployed frontend
    "http://localhost:5173",                 // ✅ for local testing
  ],
  credentials: true,
}));


// ✅ Body parser
app.use(express.json());

// ✅ Routes
app.use('/api/passwords', passwordRoutes);

// ✅ Optional: fallback for undefined routes (helps avoid JSON.parse errors in frontend)
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// ✅ Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("❌ MongoDB Error:", err));

  app.get('/favicon.ico', (req, res) => res.sendStatus(204));
