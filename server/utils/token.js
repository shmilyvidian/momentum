import jwt from 'jsonwebtoken'
let secret = 'shmilyvidian' // 指定密钥

exports.setToken = function(options){
    return new Promise((resolve, reject)=>{
            const token = jwt.sign(options, secret, { expiresIn: '1h' })
            resolve(token)
    })
}

exports.verifyToken = function(data){
    return new Promise((resolve, reject)=>{
            const token = jwt.verify(data.split(' ')[1], secret)
            resolve(token)
    })
}