const eventDate = '2023-09-29'

function calRemainingDates(eventDates){
    const currentDate = new Date();
    const eventDateTime = new Date(eventDates);
    // console.log(currentDate);
    // console.log(eventDateTime)

    const DateDiff = eventDateTime - currentDate;
    // console.log(DateDiff)
    const dayDiff = Math.ceil(DateDiff/(1000*60*60*24))
    console.log(`Remaining days for you event is ${dayDiff}`)
}

calRemainingDates(eventDate)