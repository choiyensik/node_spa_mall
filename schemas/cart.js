const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  goodsId: {
    type: Number,
    required: true, // 이값이 무조건있어야한다.
    unique: true,   // 이값이 고유한값이어야한다.
  },
  quantity: {
    type: Number,
    required: true,
    
  }
});


module.exports = mongoose.model("Cart", cartSchema);