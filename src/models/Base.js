import { Callbacks } from "jquery";
import pool from "../configs/connect_db";
//import connection from "../model/baseModel";

// * Important promise function
function dbQuery(databaseQuery) {
    return new Promise(data => {
        pool.query(databaseQuery, function(error, result) { // change db->connection for your code
            if (error) {
                console.log(error);
                throw error;
            }
            try {
                data(result);

            } catch (error) {
                data({});
                throw error;
            }

        });
    });
}
//create making database function
function createDatabase(database) {
    pool.query(`create database if not exists ` + database + `;`);
}

//Create making table function
function createTable(table, contents) {
    pool.query(' CREATE TABLE IF NOT EXISTS ' + table + ' ( ' + contents + ');');
}
// CRUD 

// Create
function insert(table, content, value) {
    pool.query('INSERT INTO ' + table + ' (' + content + ')  VALUES (' + value + ')');
}
// Read 
async function getAll(table, orderBy = 'joinday desc', limit = 8, offset = 1) {
    let result = [];
    return result = await dbQuery('SELECT *from ' + table + ' ORDER BY ' + orderBy + ' limit ' + limit + ' OFFSET ' + offset + '');
}

async function getAllNoLimit(table) {
    let result = [];
    return result = await dbQuery('SELECT *from ' + table + '');
}

async function getCount(countColunm, table) {
    let result = [];
    return result = await dbQuery('SELECT COUNT(' + countColunm + ') as COUNT FROM ' + table + '');
}

async function getByCondition(table, condition) {
    let result = [];
    return result = await dbQuery('SELECT DISTINCT * FROM ' + table + ' WHERE ' + condition + '');
}

function getIn(table, colum, value) {
    pool.query(`SELECT * FROM ` + table + `  WHERE ` + colum + ` NOT IN (` + value + `)`)
}

//Update
function update(table, value, condition) {
    pool.query(`UPDATE ` + table + `
    SET ` + value + ` 
    WHERE ` + condition + `;`)
}


//Delete
function removeV(table, condi) {
    pool.query(`DELETE FROM ` + table + ` WHERE ` + condi + ``)
}
//Delete
function removeAll(table) {
    pool.query(`DELETE FROM ` + table + ``)
}

module.exports = {
    createDatabase,
    createTable,
    insert,
    getAll,
    getAllNoLimit,
    getCount,
    getByCondition,
    update,
    removeV,
    getIn,
    removeAll
}