const knex = require('knex')
const config = require('./knexfile').development
const db = knex(config)

function getUsers() {
  return db('users').select()
}

function createUser(newUser) {
  return db('users')
  .insert(newUser)
}

function getUser(id) {
  return db('users')
  .where('id', id).first()
}

function updateUser(id, updatedInfo) {
  return db('users')
  .where('id', id)
  .update(updatedInfo)
}

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser
}
