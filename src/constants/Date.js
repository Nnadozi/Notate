let date = new Date()
let day = date.getDay()
let month = date.getMonth()
let numberDate =  date.getDate()
let ending;

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let temp = String(numberDate)
switch(temp[temp.length-1]){
    case '1':
        ending = "st";
        break;
    case '2':
        ending = "nd";
        break;
    case '3':
        ending = "rd";
        break;
    default:
        ending = "th";
        break;
}


let FormattedDate = `${dayNames[day]}, ${monthNames[month]} ${numberDate+ending}`
export default FormattedDate