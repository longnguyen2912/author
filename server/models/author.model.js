const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        minLength: [3, "name must be at least 3 characters long"]
    }
}, {timestamps: true})

const AuthorFromModel = mongoose.model('Author', AuthorSchema)
module.exports = AuthorFromModel