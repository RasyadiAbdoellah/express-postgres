const TodosController = require('../controllers').todos;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Hi, it\'s the API',
  }))

  app.post('/api/todos', TodosController.create)
}