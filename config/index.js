
'use strict'

require('dotenv').config()

// Setting up the environment configurations
const env = process.env.NODE_ENV || "development"
console.log('ENVIRONMENT:', env)

module.exports = require(`./${env}`)


