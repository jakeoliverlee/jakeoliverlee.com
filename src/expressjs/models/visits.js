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

