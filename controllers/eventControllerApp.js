'use strict';

const hollanderScripts = require('../data/datascripts');

const getHollanderMfrList = async (req, res, next) => {
    try {
        // events defined as resuls of the Event Data from above and the Function located there.
        const mfrList = await hollanderScripts.getManufacturerList();
        res.send(mfrList);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}

const getHollanderModelList = async (req, res, next) => {
    try {
        // events defined as resuls of the Event Data from above and the Function located there.
        const ModelList = await hollanderScripts.getModelList();
        res.send(ModelList);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}

const getHollanderBrandModelList = async (req, res, next) => {
    try {
        // events defined as resuls of the Event Data from above and the Function located there.
        const mfrCode = req.params.id;
        const BrandModelList = await hollanderScripts.getBrandModelList(mfrCode);
        res.send(BrandModelList);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}


module.exports = {
    getHollanderMfrList,
    getHollanderModelList,
    getHollanderBrandModelList
}
