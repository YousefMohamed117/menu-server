const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const aboutSchema = new Schema({
  aboutTitle: {
    type: String,
    required: true,
  },
  aboutFirstTitle: {
    type: String,
    required: true,
  },
  aboutFirstP: {
    type: String,
    required: true,
  },
  aboutSecondTitle: {
    type: String,
    required: true,
  },
  aboutSecondP: {
    type: String,
    required: true,
  },
  aboutFeatures: {
    type: Array,
    required: true,
  }
});
module.exports = mongoose.model("AboutDetail", aboutSchema);
