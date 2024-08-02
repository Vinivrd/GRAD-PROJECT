const mongoose = require('mongoose');
const UserExclusaoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    numUsp: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Exclusao',UserExclusaoSchema);