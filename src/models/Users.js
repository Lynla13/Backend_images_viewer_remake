import BaseModel from "./Base";

let table = 'user';

async function create(username, pass, email, level) {
    let content = 'username, pass, email, level';
    let val = "'" + username + "','" + pass + "','" + email + "','" + level + "'";
    return Promise.resolve(await BaseModel.insert(table, content, val));
}

async function readByUsername(username) {
    let condition = 'username = "' + username + '"';
    return Promise.resolve(await BaseModel.getByCondition(table, condition));
}

async function readByUsernameAndPass(username, pass) {
    let condition = 'username = "' + username + '" AND pass = "' + pass + '"';
    return Promise.resolve(await BaseModel.getByCondition(table, condition));
}


async function update(username, pass, email, level) {
    let val = 'pass = "' + pass + '", email = "' + email + '" , level = "' + level + '"';
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
    readByUsernameAndPass,
    update,
    temDel,
    del,
}