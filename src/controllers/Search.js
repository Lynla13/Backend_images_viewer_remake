import { query } from "express";
import Model from "../models/index";

// Search Basic
async function search_basic(req, res) {
    let keywords = req.params.keywords;
    try {
        let content = await Model.Search.readByKeyWords(keywords);
        res.send(content);

    } catch (e) {
        res.send(e);
    }
}
// Search Advance
async function search_advance(req, res) {
    let keywords = req.params.keywords;
    let tag_id = req.params.tag_id;
    let non_tag_id = req.params.non_tag_id;
    let username = req.params.username

    try {
        let content = await Model.Search.readByKeyWords(keywords);
        content = await Model.Search.readByUsername(username);
        content = await Model.Search.readByTag(tag_id, non_tag_id);
        res.send(content);

    } catch (e) {
        res.send(e);
    }
}
module.exports = {
    search_basic,
    search_advance
}