'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');
// List of Car Brands
const getManufacturerList = async() => {
    try {
        // connect to database
        let pool = await sql.connect(config.sql); 
        // load sql query files found in the folder
        const sqlQueries = await utils.loadSqlQueries('datascripts'); 
        // run sql query from the applied script name
        const accountList = await pool.request()
                                    .query(sqlQueries.getManufacturerList); 
         // return the record set
        return accountList.recordset;
    } catch (error) {
        return error.message
    }
}
// List of All Models for All Brands
const getModelList = async() => {
    try {
        // connect to database
        let pool = await sql.connect(config.sql); 
        // load sql query files found in the folder
        const sqlQueries = await utils.loadSqlQueries('datascripts'); 
        // run sql query from the applied script name
        const accountList = await pool.request()
                                    .query(sqlQueries.getModelList); 
         // return the record set
        return accountList.recordset;
    } catch (error) {
        return error.message
    }
}
// List of All Models for a single Brand
const getBrandModelList = async(mfrCode) => {
    try {
        // connect to database
        let pool = await sql.connect(config.sql); 
        // load sql query files found in the folder
        const sqlQueries = await utils.loadSqlQueries('datascripts'); 
        // run sql query from the applied script name
        const accountList = await pool.request()
                                    .input('mfrCode', sql.VarChar(2), mfrCode)
                                    .query(sqlQueries.getBrandModelList); 
         // return the record set
        return accountList.recordset;
    } catch (error) {
        return error.message
    }
}

module.exports = {
    getManufacturerList,
    getModelList,
    getBrandModelList
}
