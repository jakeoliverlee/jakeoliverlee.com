const mongoose = require('mongoose');
const schema = mongoose.Schema;

// Connection URL, creates DB if doesn't exist.
mongoose.connect("mongodb://localhost:27017/visitors")

const visitorScheme = new schema({
    counter:{
        type: Number,
        required: true
    }
});

const visits = mongoose.model('visits', visitorScheme);
// [ { _id: ObjectId("6427ea5b545916585d0a318d"), count: 0 } ]

module.exports = visits;