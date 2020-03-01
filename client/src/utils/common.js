const getCurrentTime = () => {
    const date = new Date()
    return padStartTime(date.getHours()) + ':' + padStartTime(date.getMinutes());
}
const padStartTime = (time)=>time.toString().padStart(2,'0')

const getSayHiMessage = () => {
    const date = new Date()
    const hour = date.getHours() 
    if(hour < 6){return ("Good evening ！")} 
    else if (hour < 9){return ("Good morning ！")} 
    else if (hour < 12){return ("Good morning ！")} 
    else if (hour < 14){return ("Good noon ！")} 
    else if (hour < 17){return ("Good afternoon ！")} 
    else if (hour < 19){return ("Good evening ！")} 
    else if (hour < 22){return ("Good evening ！")}
    else return ('nice to see you !')
}
export {
    getCurrentTime,
    getSayHiMessage
}