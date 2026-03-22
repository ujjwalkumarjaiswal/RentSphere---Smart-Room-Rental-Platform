const express = require("express");
const Property = require("../models/Property");
const authMiddleware = require("../middleware/authMiddleware");
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

const router = express.Router();

// Add Property
router.post("/add", authMiddleware, upload.single("image"), async (req, res) => {
  try {
    const {
      title,
      description,
      rent,
      location,
      latitude,
      longitude,
      images
    } = req.body;

    const newProperty = new Property({
  ownerId: req.user.id,
  title: req.body.title,
  description: req.body.description,
  rent: req.body.rent,
  location: req.body.location,
  latitude: req.body.latitude,
  longitude: req.body.longitude,
  images: [req.file.filename]
});

    await newProperty.save();

    res.status(201).json({ message: "Property added successfully ✅" });

  } catch (error) {
    res.status(500).json({ message: "Server error ❌" });
  }
});


router.get("/all", async (req, res) => {
  try {
    const properties = await Property.find()
      .populate("ownerId", "name email phone");
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: "Server error ❌" });
  }
});

module.exports = router;


