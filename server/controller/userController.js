const uuidv1 = require('uuid/v1');
const UserModel = require('../model/UserModel')
import jwt from 'jsonwebtoken'
const { secret } = require('../constant/config')

const resigter = async (ctx, next) => {
    const req = ctx.request.body;
    const { userName, email  } = req
    const userInfo = await getUserInfo(email)
    if(userInfo.length){
        ctx.body = {
            code: 201,
            message: 'Email已经被注册',
            data: true
        }
        return false
    }
    console.log(ctx.request.body, userName , email)
    if(userName && email){
        const user = {
            userName,
            email,
        }
        UserModel.create(user)
        ctx.status = 200
        let token = jwt.sign(user, secret, { expiresIn: '2h' }) 
        ctx.body = {
            code: 200,
            message: '新增用户成功',
            data: {
                token,
                user
            }
        }
    }else{
        ctx.status = 400
        ctx.body = {
            code: 400,
            message: '参数不合法',
            data: false
        }
    }
}
const getUserInfo = async (email, ctx, next) => {
    const docs = await UserModel.find({email})
    return docs
}
module.exports = {
    resigter,
    getUserInfo
}
