const input=require('readline-sync')
let user_name=input.question("Enter your name & it should be greater than 3 ")
if(user_name.length>3){
    let proper_name=input.question("enter your name")
    let res=user_name.replace(user_name,proper_name)
    console.log(res)
    console.log("Hello "+user_name+" How are you")
}
