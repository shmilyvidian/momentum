const uuidv1 = require('uuid/v1');
const UserModel = require('../model/UserModel')
const userId = uuidv1();
import jwt from 'jsonwebtoken'
const { config } = require('../constant/config')

const resigter = async (ctx, next) => {
    const req = ctx.request.body;
    const { userName, email  } = req
    const userInfo = await getUserInfo(email)
    if(userInfo){
        ctx.body = {
            code: 200,
            message: 'email已经被注册',
            data: true
        }
        return
    }
    if(userName && email){
        const user = {
            userName,
            userId,
            email,
        }
        UserModel.create(user)
        ctx.status = 200
        let token = jwt.sign(user, config.SECRET, { expiresIn: '1h' }) 
        ctx.body = {
            code: 200,
            message: '新增用户成功',
            data: {
                token
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
