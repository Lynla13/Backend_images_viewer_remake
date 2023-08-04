import BaseModel from "./Base";

let table = 'post';


async function create(username, id) {
    let content = 'username, id';
    let val = "'" + username + "','" + id + "'";
    return Promise.resolve(await BaseModel.insert(table, content, val));
}

async function readByUsername(username, offset = 1, limit = BaseModel.page_limit) {
    let condition = 'username = "' + username + '" LIMIT ' + limit + ' OFFSET ' + offset + '';
    return Promise.resolve(await BaseModel.getByCondition(table, condition));
}

// async function readByKeyWords(keywords, limit, offset) {
//     let condition = 'po = "' + username + '" LIMIT ' + limit + ' OFFSET ' + offset + '';
//     return Promise.resolve(await BaseModel.getByCondition(table, condition));
// }

async function readById(id) {
    let condition = 'id = "' + id + '"';
    return Promise.resolve(await BaseModel.getByCondition(table, condition));
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
    readById,
    temDel,
    del,
}