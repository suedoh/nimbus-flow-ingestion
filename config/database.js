const { Pool } = require('pg')
const config = require('./config')

const pool = new Pool({
  user: config.username,
  password: config.password,
  host: config.host,
  port: config.port,
  database: config.database
})

module.exports = pool

