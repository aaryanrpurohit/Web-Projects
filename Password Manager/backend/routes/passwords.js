import express from 'express';
import Password from '../models/Password.js';

const router = express.Router();

// Add new password
router.post('/', async (req, res) => {
  try {
    const newPass = new Password(req.body);
    await newPass.save();
    res.status(201).json(newPass);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all passwords
router.get('/', async (req, res) => {
  try {
    const passwords = await Password.find();
    res.status(200).json(passwords);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete password
router.delete('/:id', async (req, res) => {
  try {
    console.log("Attempting to delete ID:", req.params.id);

    const deleted = await Password.findByIdAndDelete(req.params.id);

    if (!deleted) {
      console.log("No password found for that ID");
      return res.status(404).json({ message: "Password not found" });
    }

    console.log("Deleted:", deleted);
    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    console.error("Delete failed:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
