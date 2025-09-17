function makeRequest(location){
    return new Promise((resolve, reject) => {
        if (location === 'Google'){
            resolve(`Welcome to ${location}`);
        }
        else{
            reject(`Not have access to the location ${location}`);
        }
    })}

function processRequest(response){
    return new Promise((resolve, reject) => {
        console.log("Processing response");
        resolve(`Extra information ${response}`);
    })
}

makeRequest('Google').then((response) => {
    return processRequest(response);
}).then(processResponse => {
    console.log(processResponse);
}).catch((err) => console.log("There is an error " + err));


async function dowork(){
    const response = await makeRequest('Google');
    console.log("Response receieved");
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
}

dowork();