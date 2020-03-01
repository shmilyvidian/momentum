const uuidv1 = require('uuid/v1');
const UserModel = require('../model/UserModel')
const userId = uuidv1();

const resigter = async (ctx, next) => {
    const req = ctx.request.body;
    const { userName, email  } = req
    if(userName && email){
        UserModel.create({
            userName,
            userId, 
            email,
        })
        ctx.status = 200
        ctx.body = {
            code: 200,
            message: '新增用户成功',
            data: true
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
const getUserInfo = async (ctx, next) => {
    const { email  } = ctx.query
    const docs = await UserModel.find({email})

    if(docs && docs.length > 0){
        ctx.status = 200
        ctx.body = {
            code: 200,
            message: '获取用户信息成功',
            data: docs
        }
    }else{
        ctx.status = 400
        ctx.body = {
            code: 400,
            message: '获取用户信息失败',
            data: false
        } 
        return
    }
}
module.exports = {
    resigter,
    getUserInfo
}
