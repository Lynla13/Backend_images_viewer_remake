import BaseModel from "./Base";

let table = 'like';

async function create(post_id, username) {
    let content = 'post_id, username';
    let val = "'" + post_id + "','" + username + "'";
    return Promise.resolve(await BaseModel.insert(table, content, val));
}

async function readByPost_id(post_id) {
    let condition = 'post_id = "' + post_id + '"';
    return Promise.resolve(await BaseModel.getByCondition(table, condition));
}

async function update(post_id, username) {
    let val = 'username = "' + username + '"';
    let condition = 'post_id = "' + post_id + '"';
    return Promise.resolve(await BaseModel.update(table, val, condition));
}

async function del(post_id, username) {
    let condition = 'post_id = "' + post_id + '" AND username = "' + username + '"';
    return Promise.resolve(await BaseModel.deteleValue(table, condition));
}


module.exports = {
    create,
    readByPost_id,
    update,
    del,
}