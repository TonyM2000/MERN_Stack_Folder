// // const cars = ['Tesla', 'Mercedes', 'Honda']
// // const [ randomCar ] = cars
// // const [ ,otherRandomCar ] = cars
// // //Predict the output
// // console.log(randomCar)
// // console.log(otherRandomCar)
// // Teslaa, Mercedes
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// console.log(name);
// console.log(otherName);

// // // Name isn't defined anywhere

// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password);
// console.log(hashedPassword);


// // // it'll put out 12345 and then undefined because password isn't in the dictionary.
// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //Predict the output
// console.log(first == second);
// console.log(first == third);

// // False, true because it's comparing the numbers for what's equal


const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

//logs the key, then the full second key, then the first entry of second key, then the 2nd