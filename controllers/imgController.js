const express = require("express");
require("dotenv").config();
const router = express.Router();
const cloudinary = require("../helper");
const upload = require("../middleware/multer");
const Image = require("../models/imgModel");

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const name = req.body.name;

    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // Save image to MongoDB
    const newImage = new Image({
      name: name,
      url: result.secure_url,
      public_id: result.public_id,
    });
    await newImage.save();

    res.status(200).json({
      success: true,
      message: "success",
      data: result,
    });
  } catch (err) {
    console.error("Error uploading image:", err);
    res.status(500).json({
      success: false,
      message: "Error uploading image",
      err,
    });
  }
});
router.get("/upload", async (req, res) => {
  try {
    const name = req.query.name;

    // If name parameter is not provided, return a bad request response
    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Name parameter is required",
      });
    }

    // Fetch images from MongoDB by name
    const newImage = await Image.find({ name: name });

    res.status(200).json({
      success: true,
      message: "Uploaded!",
      data: newImage,
    });
  } catch (err) {
    console.error("Error uploading image:", err);
    res.status(500).json({
      success: false,
      message: "Error uploading image",
    });
  }
});
router.delete("/upload", async (req, res) => {
  try {
    const _id = req.query._id;

    // If name parameter is not provided, return a bad request response
    if (!_id) {
      return res.status(400).json({
        success: false,
        message: "Name parameter is required",
      });
    }

    // Fetch images from MongoDB by name
    const newImage = await Image.findByIdAndDelete({ _id: _id });

    res.status(200).json({
      success: true,
      message: "Uploaded!",
      data: newImage,
    });
  } catch (err) {
    console.error("Error uploading image:", err);
    res.status(500).json({
      success: false,
      message: "Error uploading image",
    });
  }
});
router.put("/upload/:id",upload.single("image"), async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "ID parameter is required",
      });
    }
    if (!req.file.path) {
      return res.status(500).json({
        success: false,
        message: "Failed to get the path",
      });
    } 
    const result = await cloudinary.uploader.upload(req.file.path);
    // Check if upload to Cloudinary was successful
    if (!result || result.error) {
      return res.status(500).json({
        success: false,
        message: "Failed to upload image to Cloudinary",
        error: result && result.error ? result.error : "Unknown error",
      });
    }

    // Find the existing image by public_id
    const existingImage = await Image.findOne({ public_id: id });

    // If the image doesn't exist, return a not found response
    if (!existingImage) {
      return res.status(404).json({
        success: false,
        message: "Image not found",
      });
    }

    // Update the existing image document with new URL and public ID
    existingImage.url = result.secure_url;
    existingImage.public_id = result.public_id;
    await existingImage.save();

    // Delete the old image from Cloudinary (optional)
    // const deleteResult = await cloudinary.uploader.destroy(existingImage.public_id);

    res.status(200).json({
      success: true,
      message: "Image updated successfully",
      data: existingImage,
    });
  } catch (err) {
    console.error("Error updating image:", err);
    res.status(500).json({
      success: false,
      message: "Error updating image",
      error: err.message, // Include specific error message
    });
  }
});

module.exports = router;
