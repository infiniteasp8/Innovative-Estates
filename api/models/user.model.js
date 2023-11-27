import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },avatar:{
        type: String,
        default: 'https://wallpapers.com/images/hd/cute-cat-eyes-profile-picture-uq3edzmg1guze2hh.jpg'
    },
}, {timestamps: true}
    );
    const User = mongoose.model('User', userSchema);
    export default User;
