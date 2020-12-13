let sum=0;
console.log ("Harmonic series and their sum \n ")
console.log ("the harmonic series : 1+ 1/2+1/3+ .......+1/n")
console.log ("=============================")
const user_input= require ("readline-sync");
let num=user_input.question("Enter a number")
for (var i=1;i<=num;i+=1)
{
        if (i < num )
        {
                console.log ("1/%d ", i)
                
        }

    }