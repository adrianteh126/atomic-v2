const mongoose = require('mongoose')
const TodosSchema = new mongoose.Schema({
  // All _ids we store here must be document _ids from the user model.
  // t - task
  // need to store user-id from user collection
  // user_id: {
  //     type: String, 
  // },
  t_name: {
    type: String,
    required: true,
  },
  t_description: {
    type: String,
    required: true,
  },
  t_progress: {
    type: Number,
    required: true,
  },
  t_due_date: {
    type: Date,
    required: true,
  },
  t_priority: {
    type: String,
    required: true,
  },
  t_status: {
    type: String,
    required: true,
  },

}, { timestamps: true });

const Todos = mongoose.model('todos', TodosSchema);
module.exports = Todos;