import BaseModel from "./Base";

let table = 'image';

async function create(post_id, image_content, image_url) {
    let content = 'post_id, image_content, image_url';
    let val = "'" + post_id + "','" + image_content + "', '" + image_url + "'";
    return Promise.resolve(await BaseModel.insert(table, content, val));
}

async function readByPost_id(post_id, offset = 1, limit = BaseModel.page_limit) {
    let condition = 'post_id = "' + post_id + '"LIMIT ' + limit + ' OFFSET ' + offset + ' ';
    return Promise.resolve(await BaseModel.getByCondition(table, condition));
}

async function readById(id) {
    let condition = 'id = "' + id + '"';
    return Promise.resolve(await BaseModel.getByCondition(table, condition));
}

async function update(id, post_id, image_content, image_url) {
    let val = 'post_id  = "' + post_id + '", image_content = "' + image_content + '", image_url = "' + image_url + '"';
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
    readById,
    update,
    del,
}