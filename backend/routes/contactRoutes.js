const express = require("express");
const Contact = require("../models/Contact");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/send", authMiddleware, async (req, res) => {
  try {
    const { propertyId, message } = req.body;

    const newContact = new Contact({
      propertyId,
      userId: req.user.id,
      message
    });

    await newContact.save();

    res.status(201).json({ message: "Message sent successfully ✅" });

  } catch (error) {
    res.status(500).json({ message: "Server error ❌" });
  }
});

module.exports = router;