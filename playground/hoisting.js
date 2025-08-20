addnumbers();
logsum();
console.log(a); // This returns undefined
console.log(b); //This is undefined varaible error

var a = 10; // This is true only for var but not for const or let

function addnumbers(a,b)
{
    return a+b;
}

function logsum()
{
    addnumbers(5,6);
}