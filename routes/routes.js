
'use strict'

/**
 * @description routes handler
 * @param {object} accepts express app initialization
 */

// Custom Modules
const { middleware, failureHandler } = require('../middleware/controllers')
const { services } = require('../services')


const handler = (app) => {

    //Public Routes:
    app.all('*', (req, res, next) => {
        middleware.trackMaintenanceActivity(req, res, next)
    })
    

    app.post('/ageCalculate', (req, res) => {
        services.ageCalculate(req, res)
    })





    

    //Private  Routes:
    app.all('*', (req, res, next) => {
        middleware.isAuthenticated(req, res, next)
    })






    app.all('*', (req, res) => {
        return failureHandler.manageError(req, res, `Endpoint - ${req.url} not found`, 'notFound')
    })

}

module.exports.handler = handler