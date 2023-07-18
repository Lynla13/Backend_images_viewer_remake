import { query } from "express";
import Model from "../models/index";

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

async function update(req, res) {
    let id = req.params.id;
    let username = req.params.username;
    let post_content = req.params.post_content;

    try {
        Model.Post.update(id, username, post_content);
        return res.send('Update Successfull');
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
    readByUsername,
    readById,
    update,
    temDel,
    del
}