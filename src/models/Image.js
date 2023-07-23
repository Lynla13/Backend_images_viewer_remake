import BaseModel from "./Base";

let table = 'image';

async function create(post_content, image_content, image_url) {
    let content = 'post_content, image_content, image_url';
    let val = "'" + post_content + "','" + image_content + "', '" + image_url + "'";
    return Promise.resolve(await BaseModel.insert(table, content, val));
}

async function readByPost_id(post_id) {
    let condition = 'post_id = "' + post_id + '"';
    return Promise.resolve(await BaseModel.getByCondition(table, condition));
}

async function readById(id) {
    let condition = 'id = "' + id + '"';
    return Promise.resolve(await BaseModel.getByCondition(table, condition));
}

async function update(id, post_content, image_content, image_url) {
    let val = 'post_content  = "' + post_content + '", image_content = "' + image_content + '", image_url = "' + image_url + '"';
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