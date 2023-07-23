import BaseModel from "./Base";

let table = 'post_tag';


async function create(post_id, tag_id) {
    let content = 'post_id, tag_id';
    let val = "'" + username + "','" + nofi + "'";
    return Promise.resolve(await BaseModel.insert(table, content, val));
}

async function readByPost_id(post_id) {
    let condition = 'post_id = "' + post_id + '"';
    return Promise.resolve(await BaseModel.getByCondition(table, condition));
}

async function readByTag_id(tag_id) {
    let condition = 'tag_id = "' + tag_id + '"';
    return Promise.resolve(await BaseModel.getByCondition(table, condition));
}


async function del(post_id, tag_id) {
    let condition = 'post_id = "' + post_id + '" AND tag_id = "' + tag_id + '"';
    return Promise.resolve(await BaseModel.deteleValue(table, condition));
}


module.exports = {
    create,
    readByPost_id,
    readByTag_id,
    del,
}