'use strict'

/**
 * 
 * @description Generic error handler
 * @param {object} req express request object
 * @param {object} res express response object
 * @param {string} msg error message
 * @param {string} type type of
 * @return {object} send response back to the request
 */
let manageError = (req, res, msg, type) => {
    switch (type) {
        case 'auth':
            return res.status(401).json({ code: 401, message: msg })
        case 'badRequest':
            return res.status(400).json({ code: 400, message: msg })
        case 'maintenance':
            return res.status(503).json({ code: 503, message: msg })
        case 'notFound':
            return res.status(404).json({ code: 404, message: msg })
        case 'timeOut':
            return res.status(408).json({ code: 408, message: msg })
        case 'exception':
            return res.status(403).json({ code: 403, message: msg })
        case 'server':
            return res.status(500).json({ code: 500, message: msg })
        default:
            return res.status(403).json({ code: 403, message: msg })
    }
}


module.exports.manageError = manageError
