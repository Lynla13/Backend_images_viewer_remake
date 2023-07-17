import { Callbacks } from "jquery";
import BaseModel from "/Base";

let table = 'post';


async function create(username, post_content) {
    let content = 'username, post_content';
    let val = "'" + username + "','" + post_content + "'";
    return Promise.resolve(await BaseModel.insert(table, content, val));
}

async function readByUsername(username) {
    let condition = 'username = "' + username + '"';
    return Promise.resolve(await BaseModel.getByCondition(table, condition));
}

async function readById(id) {
    let condition = 'id = "' + id + '"';
    return Promise.resolve(await BaseModel.getByCondition(table, condition));
}

async function update(id, username, post_content) {
    let val = 'username = "' + username + '", post_content = "' + post_content + '"';
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
    readById,
    update,
    temDel,
    del,
}