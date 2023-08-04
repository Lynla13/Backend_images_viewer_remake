import { query } from "express";
import Controller from './index'
const akaneko = require('akaneko');
const Anime_Images = require('anime-images-npm')
const neko = require('nekos-fun')
const justreddit = require("justreddit");

async function insert_api(req, res) {
    //akaneko
    Controller.Post.create_post("akaneko", "nsfw_bdsm", "", await akaneko.nsfw.bdsm(), "Hentai BDSM");
    Controller.Post.create_post("akaneko", "sfw_neko", "", await akaneko.neko(), "Neko");
    Controller.Post.create_post("akaneko", "nsfw_maid", "", await akaneko.nsfw.maid(), "Maid");
    Controller.Post.create_post("akaneko", "nsfw_hentai", "", await akaneko.nsfw.hentai(), "Hentai");
    //SFW
    Controller.Post.create_post("neko_fun", "sfw_kiss", "", await neko.sfw.kiss(), "Kiss");
    Controller.Post.create_post("neko_fun", "sfw_lick", "", await neko.sfw.lick(), "Lick");
    Controller.Post.create_post("neko_fun", "sfw_hug", "", await neko.sfw.hug(), "Hug");
    Controller.Post.create_post("neko_fun", "sfw_baka", "", await neko.sfw.baka(), "Baka");
    Controller.Post.create_post("neko_fun", "sfw_cry", "", await neko.sfw.cry(), "Cry");
    Controller.Post.create_post("neko_fun", "sfw_poke", "", await neko.sfw.poke(), "Poke");
    Controller.Post.create_post("neko_fun", "sfw_smug", "", await neko.sfw.smug(), "Smug");
    Controller.Post.create_post("neko_fun", "sfw_tickle", "", await neko.sfw.tickle(), 'Tickle');
    //NSFW
    Controller.Post.create_post("neko_fun", "nsfw_anal", "", await neko.nsfw.anal());
    Controller.Post.create_post("neko_fun", "nsfw_bj", "", await neko.nsfw.blowjob());
    Controller.Post.create_post("neko_fun", "nsfw_boob", "", await neko.nsfw.boobs());
    Controller.Post.create_post("neko_fun", "nsfw_cum", "", await neko.nsfw.cum());
    Controller.Post.create_post("neko_fun", "nsfw_feet", "", await neko.nsfw.feet());
    Controller.Post.create_post("neko_fun", "nsfw_hentai", "", await neko.nsfw.hentai());
    Controller.Post.create_post("neko_fun", "nsfw_wallpaper", "", await neko.nsfw.wallpapers());
    Controller.Post.create_post("neko_fun", "nsfw_spank", "", await neko.nsfw.spank());

    res.send("thanj cong");
}

module.exports = {
    insert_api
}