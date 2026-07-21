import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String 
    },
    created:{
        type: Date,
        default: Date.now
    }
});

const model = mongoose.model('User', userSchema);

export default model;