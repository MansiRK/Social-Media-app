const mongoose = require ("mongoose")

const UserSchema = mongoose.Schema(
{
    username: {
        type: String,
        required: true,
        unique: true 
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    profilePicture : String,
    coverPicture: String,
    about: String,
    livesIn: String,
    worksAt: String,

    followers: [],
    following: []
},

{
    timestamps: true
}
)

const UserModel = mongoose.model("Users", UserSchema)

module.exports = UserModel