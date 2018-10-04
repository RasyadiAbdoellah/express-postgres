const TodosController = require('../controllers').todos;
const TodoItemsController = require('../controllers').todoItems;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Hi, it\'s the API',
  }))

  app.post('/api/todos', TodosController.create)
  app.get('/api/todos', TodosController.read)
  app.post('/api/todos/:todoId/items', TodoItemsController.create)
}