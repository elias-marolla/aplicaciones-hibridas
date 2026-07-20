import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String
});

const model = mongoose.model('User', userSchema);

export default model;