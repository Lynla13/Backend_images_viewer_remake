import { query } from "express";
import Model from "../models/index";

async function signupAuth(req, res) {
    let username = req.body.username;
    let pass = req.body.password;
    let email = req.body.email;
    let signinData = await Model.Users.getByUsername(username)
    if (signinData.length > 0) {
        res.send('error');
    } else {
        Model.Profile.create(username);
        Model.Users.ceate(Username, pass, email, '0')
        res.send('success');
    }
}


module.exports = {
    signupAuth
}