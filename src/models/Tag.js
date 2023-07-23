import BaseModel from "./Base";

let table = 'tag';

async function create(tag, detail) {
    let content = 'tag, detail';
    let val = "'" + tag + "','" + detail + "'";
    return Promise.resolve(await BaseModel.insert(table, content, val));
}

async function readByTag(tag) {
    let condition = 'tag = "' + tag + '"';
    return Promise.resolve(await BaseModel.getByCondition(table, condition));
}
async function readById(id) {
    let condition = 'id = "' + id + '"';
    return Promise.resolve(await BaseModel.getByCondition(table, condition));
}
async function update(id, tag, detail) {
    let val = 'tag = "' + tag + '", detail = "' + detail + '"';
    let condition = 'id = "' + id + '"';
    return Promise.resolve(await BaseModel.update(table, val, condition));
}

async function temDel(id, is_deleted) {
    let val = 'is_deleted = "' + is_deleted + '"';
    let condition = 'id = "' + id + '"';
    return Promise.resolve(await BaseModel.update(table, val, condition));
}

async function del(username) {
    let condition = 'username = "' + username + '"';
    return Promise.resolve(await BaseModel.deteleValue(table, condition));
}
module.exports = {
    create,
    readByTag,
    readById,
    update,
    temDel,
    del,
}