const finalArry = [
    localStorage.getItem('StudentData'),
    localStorage.getItem('DevsData')
]

let stringarry = JSON.stringify(finalArry)
console.log('======================Json Data==================');

console.log(JSON.parse(stringarry));

console.log('===================All Arry=========================');
console.log(JSON.parse(JSON.parse(stringarry)[0]));
console.log(JSON.parse(JSON.parse(stringarry)[1]));


new Master().final( JSON.parse(localStorage.getItem('StudentData')))