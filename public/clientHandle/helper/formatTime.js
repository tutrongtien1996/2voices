function formatTime(input){
    const time = new Date(input);
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const day = time.getDate();
    const hour = time.getHours();
    const min = time.getMinutes();
    const second = time.getSeconds();
    
    const format = year + '-' + month + '-' + day + ' ' + hour + ':' + min;
    return format
}
export  {formatTime}