let day = "Na"

switch(day){
    case "":
        console.log("Invalid day")
        break
    case "Sunday":
        console.log("First day of the week")
        break
    case "Monday":
        console.log("Just a regular day")
        break
    case "Tuesday":
        console.log("Middle of the Week")
        break
    case "Wednesday":
        console.log("Almost there")
        break
    case "Thursday":
        console.log("One more day to go")
        break
    case "Friday":
    case "Saturday":
        console.log("It's weekend!")
        break
    default:
        console.log("Check, What day is it?")
        break
}