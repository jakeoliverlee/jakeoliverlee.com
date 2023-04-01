const express = require("express");
const mongoose = require("mongoose");
const siteViews = require("../models/visits")



siteViewsUp = function () {
    siteViews.findByIdAndUpdate("6427ea5b545916585d0a318d", {$inc: {counter: 1}}, {new:true})
    .then((data)=>{console.log(data.counter)})
    .catch((err)=>{console.log(err)});
}

module.exports = {siteViewsUp}