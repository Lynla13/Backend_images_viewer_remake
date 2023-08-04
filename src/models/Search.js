import BaseModel from "./Base";

let table = 'post';


async function readByUsername(username, offset = 1, limit = BaseModel.page_limit) {
    let condition = 'username LIKE % "' + username + '"% LIMIT ' + limit + ' OFFSET ' + offset + '';
    return Promise.resolve(await BaseModel.getByCondition(table, condition));
}

async function readByKeyWords(keywords, offset = 1, limit = BaseModel.page_limit) {
    let condition = 'title LIKE %"' + keywords + '"% LIMIT ' + limit + ' OFFSET ' + offset + '';
    return Promise.resolve(await BaseModel.getByCondition("post_detail", condition));
}


async function readByTags(tag_id, non_tag_id, offset = 1, limit = BaseModel.page_limit) {
    let condition = 'tag_id IN (' + tag_id + ') AND tag_id NOT IN (' + non_tag_id + ') LIMIT ' + limit + ' OFFSET ' + offset + '';
    return Promise.resolve(await BaseModel.getByCondition("post_tag", condition));
}


module.exports = {
    readByUsername,
    readByKeyWords,
    readByTags,
}