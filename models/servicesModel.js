const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const aboutSchema = new Schema({
  servicesTitle: {
    type: Array,
    required: true,
  },
  servicesHeaders: {
    type: Array,
    required: true,
  },
  servicesP: {
    type: Array,
    required: true,
  },
  
});
module.exports = mongoose.model("ServicesDetail", aboutSchema);
