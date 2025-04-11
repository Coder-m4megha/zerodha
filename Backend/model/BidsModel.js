const mongoose = require("mongoose");
const BidsSchema = require("../schemas/BidsSchema"); // No curly braces

const BidsModel = mongoose.model("bids", BidsSchema); // ✅ Correct way
module.exports = { BidsModel };
