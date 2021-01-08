const { Router } = require('express');

const routes = new Router();

const emojiController = require('./controllers/EmojiController');

routes.get('/', emojiController.read);
routes.get('/:title', emojiController.readOne);
routes.post('/', emojiController.create);
routes.put('/:id', emojiController.update);
routes.delete('/:id', emojiController.delete);

module.exports = routes;
