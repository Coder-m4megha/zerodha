const mongoose = require("mongoose");

const BidsSchema = new mongoose.Schema({
  instrument: String,
  eligibleQty: Number,
  lastPrice: Number,
  holdingPrice: Number,
  holdingPL: Number,
  auctionNo: String,
});

module.exports = { BidsSchema };
