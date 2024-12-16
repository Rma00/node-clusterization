'use strict'

// Custom Modules
const { failureHandler, utils, validate } = require('../middleware/controllers')





/**
 * @description This Function is used to Age for Given DOB:
 * @param {*} req 
 * @param {*} res 
 * @author Rma
 * @returns 
 */
const ageCalculate = async (req, res) => {
    try {

        let requestBody = req.body;
        let payload = await validate.payload(requestBody, 'ageCalculate');
        console.log(payload)
        let calculatedDOB = await utils.ageCalculate(payload.dob)
        if (!calculatedDOB) return res.json({ code: 403, message: `Someting Wrong!` });
        return res.json({ code: 200, message: `Success!`, data: { age: calculatedDOB } });
    } catch (exception) {
        console.log(exception)
        // return res.json({ code: 403, message: `Someting Wrong!` });
        return failureHandler.manageError(req, res, exception.message ? 'Someting Wrong!' : exception, exception.message ? 'exception' : 'validate');
    }
}





module.exports.ageCalculate = ageCalculate