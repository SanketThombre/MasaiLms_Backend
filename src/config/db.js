

const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://Shanky:Shanky007@cluster0.nkaby.mongodb.net/Masai_LMS")
}

module.exports = connect;