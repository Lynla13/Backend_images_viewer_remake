import BaseModel from "./Base";

let table = 'nofi';


async function create(username, nofi) {
    let content = 'username, nofi';
    let val = "'" + username + "','" + nofi + "'";
    return Promise.resolve(await BaseModel.insert(table, content, val));
}

async function readByUsername(username, limit, offset) {
    let condition = 'username = "' + username + '" LIMIT ' + limit + ' OFFSET ' + offset + '';
    return Promise.resolve(await BaseModel.getByCondition(table, condition));
}

async function update(id, username, nofi) {
    let val = 'username = "' + username + '", nofi = "' + nofi + '"';
    let condition = 'id = "' + id + '"';
    return Promise.resolve(await BaseModel.update(table, val, condition));
}

async function temDel(id, is_deleted) {
    let val = 'is_deleted = "' + is_deleted + '"';
    let condition = 'id = "' + id + '"';
    return Promise.resolve(await BaseModel.update(table, val, condition));
}

async function del(id) {
    let condition = 'id = "' + id + '"';
    return Promise.resolve(await BaseModel.deteleValue(table, condition));
}

module.exports = {
    create,
    readByUsername,
    update,
    temDel,
    del,
}