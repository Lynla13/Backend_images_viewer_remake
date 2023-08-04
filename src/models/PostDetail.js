import BaseModel from "./Base";

let table = 'post_detail';

async function create(post_id, title, detail) {
    let content = 'post_id, title, detail';
    let val = "'" + post_id + "','" + title + "','" + detail + "'";
    return Promise.resolve(await BaseModel.insert(table, content, val));
}

async function readByPost_id(post_id) {
    let condition = 'post_id = "' + post_id + '"';
    return Promise.resolve(await BaseModel.getByCondition(table, condition));
}

async function update(post_id, title, detai) {
    let val = ' title = "' + title + '", detail = "' + detai + '"';
    let condition = 'post_id = "' + post_id + '"';
    return Promise.resolve(await BaseModel.update(table, val, condition));
}

async function temDel(id, is_deleted) {
    let val = 'is_deleted = "' + is_deleted + '"';
    let condition = 'post_id = "' + post_id + '"';
    return Promise.resolve(await BaseModel.update(table, val, condition));
}

async function del(post_id) {
    let condition = 'post_id = "' + post_id + '"';
    return Promise.resolve(await BaseModel.deteleValue(table, condition));
}
module.exports = {
    create,
    readByPost_id,
    update,
    temDel,
    del,
}