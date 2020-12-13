let input=require('readline-sync')
let num=input.question("Enter a number")
let usernum=parseInt(num)
for(let i=1;i<usernum;i++){
    let power=Math.pow(2,i)
    console.log("Power of 2 is",i,"===>", power)
}