const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const flavorsSchema = new Schema({
  title: {
    type: Array,
    required: true,
  },
  flavors: {
    type: Array,
    required: true,
  },

});
module.exports = mongoose.model("flavorsDetail", flavorsSchema);
