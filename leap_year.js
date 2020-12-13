const user_input= require ("readline-sync");
let year=user_input.question("Enter a year")
function leapYear(year){
if (year % 400 == 0) 
console.log ("its leap year ",year)
else if (year % 4 == 0 ) 
     console.log ("its leap year ", year)
else if (year % 100== 0 )
       console.log ("its not a leap year ",year)
       else
       console.log("Not a leap year")

}
 leapYear(year)
