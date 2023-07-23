import BaseModel from "./Base";

let table = 'profile';

async function create(username, name, image_url, bkg_url) {
    let content = 'username, name, image_url, bkg_url';
    let val = "'" + username + "','" + name + "','" + image_url + "','" + bkg_url + "'";
    return Promise.resolve(await BaseModel.insert(table, content, val));
}

async function readByUsername(username) {
    let condition = 'username = "' + username + '"';
    return Promise.resolve(await BaseModel.getByCondition(table, condition));
}


async function update(username, name, image_url, bkg_url) {
    let val = 'name = "' + name + '", image_url = "' + image_url + '" , bkg_url = "' + bkg_url + '"';
    let condition = 'username = "' + username + '"';
    return Promise.resolve(await BaseModel.update(table, val, condition));
}

async function temDel(username, is_deleted) {
    let val = 'is_deleted = "' + is_deleted + '"';
    let condition = 'username = "' + username + '"';
    return Promise.resolve(await BaseModel.update(table, val, condition));
}


async function del(username) {
    let condition = 'username = "' + username + '"';
    return Promise.resolve(await BaseModel.deteleValue(table, condition));
}
module.exports = {
    create,
    readByUsername,
    update,
    temDel,
    del,
}