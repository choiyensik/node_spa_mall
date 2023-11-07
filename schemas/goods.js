const mongoose = require("mongoose");

const goodsSchema = new mongoose.Schema({
  goodsId: {
    type: Number,
    required: true, // 이값이 무조건있어야한다.
    unique: true,   // 이값이 고유한값이어야한다.
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  thumbnailUrl:{
    type: String,

  },
  category:{
    type: String,
  },
  price: {
    type: Number,
}
});


module.exports = mongoose.model("Goods", goodsSchema);