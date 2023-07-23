import BaseModel from "./Base";

let table = 'comment';

async function create(post_id, username, return_user, comment) {
    let content = 'post_id, username, return_user, comment';
    let val = "'" + post_id + "','" + username + "','" + return_user + "','" + comment + "'";
    return Promise.resolve(await BaseModel.insert(table, content, val));
}

async function readByPost_id(post_id) {
    let condition = 'post_id = "' + post_id + '"';
    return Promise.resolve(await BaseModel.getByCondition(table, condition));
}

async function update(id, post_id, username, return_user, comment) {
    let val = 'post_id = "' + post_id + '", username = "' + username + '", return_user = "' + return_user + '" , comment = "' + comment + '"';
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
    readByPost_id,
    update,
    temDel,
    del,
}