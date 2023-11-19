import mongoose from "mongoose";

const user = mongoose.Schema({
    username : {
        type: String,
        required: True,
        unique: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: True,
    }}, {timestamps: true}
    );

    const User = mongoose.model('User',userSchema);
    export default User;
