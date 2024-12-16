'use strict'

//NPM Modules
const joi = require('joi');



const ageCalculate = joi.object().keys({
    // dob: Joi.date().format('YYYY-MM-DD').options({ convert: false }).required()
    // dob: joi.string().trim().min(10).max(10).required().format("DD/MM/YYYY", "YYYY/MM/DD").message('Please Provide DOB ("DD/MM/YYYY", "YYYY/MM/DD") Format!')
    dob: joi.string().trim().required().isoDate().message('Please Provide DOB ("YYYY-MM-DD") Format!')
})




module.exports.ageCalculate = ageCalculate