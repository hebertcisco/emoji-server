const emojiModel = require('./../database/schemas/EmojiModel');

class EmojiController {
  async create(req, res) {
    const { title, symbol } = req.body;

    const emoji = await emojiModel.create({
      title,
      symbol,
      keywords,
    });

    return res.status(200).json(emoji);
  }

  async read(req, res) {
    const emoji = await emojiModel.find({});

    return res.status(200).json(emoji);
  }
  async readOne(req, res) {
    const { title } = req.params;
    const emoji = await emojiModel.findOne({ title: title });

    return res.status(200).json(emoji);
  }
  async update(req, res) {
    const { id } = req.params;
    const { title, symbol, keywords } = req.body;
    const emoji = await emojiModel.findOneAndUpdate(
      { _id: id },
      {
        title,
        symbol,
        keywords,
      }
    );

    return res.json(emoji);
  }

  async delete(req, res) {
    const { id } = req.params;
    const emoji = await emojiModel.deleteOne({ _id: id });

    return res.json(emoji);
  }
}

module.exports = new EmojiController();
