const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const landingSchema = new Schema({
  title: {
    type: Array,
    required: true,
  },

});
module.exports = mongoose.model("LandingDetail", landingSchema);
