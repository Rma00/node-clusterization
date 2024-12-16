'use strict'




/**
 *
 * @description This function is Used to Age Calculate yyyy-mm-dd.
 * @param {*} req
 * @param {*} res
 * @return {*} 
 */

const ageCalculate = (inputDate) => {
    return new Promise(async (resolve, reject) => {
        try {
            const dob = new Date(inputDate);
            const now = new Date();
            let ageDiff = now - dob;
            let ageDate = new Date(ageDiff);
            let calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
            return resolve(calculatedAge);
        } catch (err) {
            console.error(err)
            return reject(false)
        }
    })
}




module.exports.ageCalculate = ageCalculate