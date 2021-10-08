'use strict';

const screenPopSQL = require('../data/screenPop');

const getAccountsByPhone = async (req, res, next) => {
    try {
        // events defined as resuls of the Event Data from above and the Function located there.
        const phoneNo = req.params.id;
        const accounts = await screenPopSQL.getCustAccountByPhone(phoneNo);
        res.send(accounts);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}
 
module.exports = {
    getAccountsByPhone
}