const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  public_id: {
    type: String,
  }
});

module.exports = mongoose.model("Image", ImageSchema);
