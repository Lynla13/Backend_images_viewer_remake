import { query } from "express";
import Model from "../models/index";
const akaneko = require('akaneko');
const Anime_Images = require('anime-images-npm')
const neko = require('nekos-fun')
const justreddit = require("justreddit");

async function api_pic(username, post_content, image_content, image_url) {
    try {
        Model.Post.create(username, post_content);
        Model.Image.create(post_content, image_content, image_url);
        console.log('Insert Successfull');
        console.log(image_url);
    } catch (e) {
        console.log(e);
    }
}

async function insert_api(req, res) {
    //akaneko
    api_pic("akaneko", "nsfw_bdsm", "", await akaneko.nsfw.bdsm());
    api_pic("akaneko", "sfw_neko", "", await akaneko.neko());
    api_pic("akaneko", "nsfw_maid", "", await akaneko.nsfw.maid());
    api_pic("akaneko", "nsfw_hentai", "", await akaneko.nsfw.hentai());
    //Anime_images
    // api_pic("anime_images", "sfw_hug", "", await API.sfw.hug())
    // api_pic("anime_images", "sfw_kiss", "", await API.sfw.kiss())
    // api_pic("anime_images", "sfw_slap", "", await API.sfw.slap())

    res.send("thanj cong");
}

module.exports = {
    api_pic,
    insert_api
}