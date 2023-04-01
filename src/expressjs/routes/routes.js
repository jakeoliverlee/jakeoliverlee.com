const express = require("express");
const mongoose = require("mongoose");
const siteViews = require('../models/visits');

var SiteViewsUp = require("../visits/visitsUp");
var router = express.Router();

// GET home page //
router.get("/", function(req, res, next) {
    SiteViewsUp.siteViewsUp();
        siteViews.findById("6427ea5b545916585d0a318d").then((data)=>{
        res.render("index", {counter: data.counter});
        }, (err)=>{next(err)})
        .catch((err)=>{next(err)})
        
});

module.exports = router;
