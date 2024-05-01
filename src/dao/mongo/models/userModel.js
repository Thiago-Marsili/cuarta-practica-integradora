const mongoose = require('mongoose');
const userCollection = "Users";

const userSchema = new mongoose.Schema({
    full_name: String,
    email: String,
    age: String,
    password: String,
    role: String,
    documents: [
        {
            name: String,
            reference: String,  // Link del documento
            status: { type: String, default: "Falta documento"} 
        }
    ],
    last_connection: String
})

const userModel = mongoose.model(userCollection, userSchema)

module.exports = { userModel };