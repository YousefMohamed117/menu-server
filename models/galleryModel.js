const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gallerySchema = new Schema({
  title: {
    type: Array,
    required: true,
  },

});
module.exports = mongoose.model("GalleryDetail", gallerySchema);
