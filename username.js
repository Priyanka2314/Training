const input=require('readline-sync')
let user_name=input.question("Enter your name ")
if(user_name.length>3){
    let proper_name=input.question("Please enter your name in proper format ")
    let res=user_name.replace(user_name,proper_name)
    console.log(res)
    console.log("Hello "+proper_name+" How are you")
}
