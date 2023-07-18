import { query } from "express";
import Model from "../models/index";

async function create(req, res) {
    let username = req.params.username;
    let pass = req.params.pass;
    let email = req.params.emali;
    let level = req.params.level;


    try {
        Model.User.create(username, pass, email, level);
        res.send('Insert Successfull');
    } catch (e) {
        res.send(e);
    }
}

async function readByUsername(req, res) {
    let username = req.params.username;

    try {
        let content = await Model.User.readByUsername(username);
        res.send(content);
    } catch (e) {
        res.send(e);
    }
}

async function readByUsernameAndPass(req, res) {
    let username = req.params.username;
    let pass = req.params.pass;

    try {
        let content = await Model.User.readByUsernameAndPass(username, pass);
        res.send(content);
    } catch (e) {
        res.send(e);
    }
}

async function update(req, res) {
    let username = req.params.username;
    let pass = req.params.pass;
    let email = req.params.emali;
    let level = req.params.level;

    try {
        Model.User.update(username, pass, email, level);
        return res.send('Update Successfull');
    } catch (e) {
        res.send(e);
    }
}


async function temDel(req, res) {
    let username = req.params.username;
    let is_deleted = req.params.is_deleted;

    try {
        Model.User.temDel(username, is_deleted);
        res.send('Remove Successfull');
    } catch (e) {
        res.send(e);
    }
}


async function del(req, res) {
    let username = req.params.username;

    try {
        Model.User.del(username);
        res.send('Remove Successfull _1');
    } catch (e) {
        res.send(e);
    }
}

module.exports = {
    create,
    readByUsername,
    readByUsernameAndPass,
    update,
    temDel,
    del
}