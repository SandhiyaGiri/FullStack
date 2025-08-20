function doSomething(variable){
    console.group("Do a lot of things");
    console.log("This is for printing");
    console.warn("This is a warning");
    console.error("This is for an error message");
    console.count(`The ${variable} will be counted `);
    console.groupEnd("And the group ends here");
}

dic = [{'name': "Sandhiya", 'Company': "5C Network", 'Age': 22}, {'name': "SandhiyaCV", 'Company': "5C Network pvt lmt", 'Age': 23}, {'name': "Sandy", 'Company': "5C_Network", 'Age': 22} ]
// console.table(dic)

dic.forEach((person, index) => {
    debugger;
    console.group(person.name);
    console.count(person.Age);
    console.log(person.Company);
    console.groupEnd("Done!!");
});
