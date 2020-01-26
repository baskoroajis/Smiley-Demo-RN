
export function centToDollars(cents){
    return cents / 100;
}

export function dateToRelative(current, date) {
    var parsedDate = new Date(date);
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var elapsed = current - parsedDate;

    if (elapsed <= (msPerDay * 7)){
        return Math.round(elapsed/msPerDay) + ' days ago';   
    }
    else{
        return date
    }
  
}