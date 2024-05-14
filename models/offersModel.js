const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const offersSchema = new Schema({
  offersTitle: {
    type: String,
    required: true,
  },
  offers: [{
    num: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    flavors: {
      type: String,
      required: true,
    },
    hours: {
      type: String,
      required: true,
    },
    workers: {
      type: String,
      required: true,
    },
  }]
});

module.exports = mongoose.model("offersDetail", offersSchema);
