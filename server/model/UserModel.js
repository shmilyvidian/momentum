import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: {
        type: String,
        require: true
    },
    userId: String,
    email: {
        type: String,
        require: true
    },
    createTime: { //创建时间
        type: Date,
        default: Date.now
    },
},{ collection: 'users', versionKey: false})

module.exports = mongoose.model("users",UserSchema)