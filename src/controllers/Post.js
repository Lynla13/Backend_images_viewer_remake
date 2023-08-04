import { query } from "express";
import Model from "../models/index";


async function create_post(username, post_id, image_content, image_url, title = "", detail = "") {
    try {
        Model.Post.create(username, post_id);
        Model.Image.create(post_id, image_content, image_url);
        Model.PostDetail.create(post_id, title, detail);
        console.log("Insert Successfull");

    } catch (e) {
        console.log("Error");
    }
}

// Create full Post

async function create(req, res) {
    let username = req.params.username;
    let post_content = req.params.post_content;
    try {
        Model.Post.create(username, post_content);
        res.send('Insert Successfull');
    } catch (e) {
        res.send(e);
    }
}
// Read full post
async function readByUsername(req, res) {
    let username = req.params.username;
    try {
        let content = await Model.Post.readByUsername(username);
        res.send(content);
    } catch (e) {
        res.send(e);
    }
}

async function readById(req, res) {
    let id = req.params.id;
    try {
        let content = await Model.Post.readById(id);
        res.send(content);
    } catch (e) {
        res.send(e);
    }
}


async function temDel(req, res) {
    let id = req.params.id;
    let is_deleted = req.params.is_deleted;

    try {
        Model.Post.temDel(id, is_deleted);
        res.send('Remove Successfull');
    } catch (e) {
        res.send(e);
    }
}

async function del(req, res) {
    let id = req.params.id;

    try {
        Model.Post.del(id);
        res.send('Remove Successfull _1');
    } catch (e) {
        res.send(e);
    }
}

module.exports = {
    create,
    create_post,
    readByUsername,
    readById,
    temDel,
    del
}