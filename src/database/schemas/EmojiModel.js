const mongoose = require('mongoose');

const EmojiModelSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    symbol: {
      type: String,
      required: true,
    },
    keywords: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = mongoose.model('emojis', EmojiModelSchema);
