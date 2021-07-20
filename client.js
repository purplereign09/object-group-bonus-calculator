
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

//looping over employees to get the properties of the object
for(let employee of employees){
  console.log(employee);
}

// function newCar(yearInput, makeInput, modelInput){
//   console.log('in newCar:', yearInput, makeInput, modelInput);
//   const newCarObject = {
//     year: yearInput,
//     make: makeInput,
//     model: modelInput
//   }
//   garage.push(newCarObject);
//   return true;
// } // end newCar


//function that takes in one employee object
function bonusCalculator(name){
  const individualBonus = [];
    //property should contain the bonus percentage the employee is to receive. See section below for calculation
  for(let employee of employees){
    if(name === employee.name){
      individualBonus.push(employee.name);
        let bonusPercent = 0;
        if (employee.reviewRating <= 2) {
          bonusPercent = 0;
        } else if (employee.reviewRating === 3) {
          bonusPercent = (4 / 100) * Number(employee.annualSalary);
        } else if (employee.reviewRating === 4) {
          bonusPercent = (6 / 100) * Number(employee.annualSalary);
        } else if (employee.reviewRating === 5) {
         bonusPercent = (10 / 100) * Number(employee.annualSalary);
        }
        individualBonus.push(bonusPercent); 
    }
    return individualBonus;
  }
}

console.log(bonusCalculator('Atticus'));

// function individualBonusCalculation(number){
  
// } 
  
// console.log(individualBonusCalculation(4))
// } 
  
// console.log(individualBonusCalculation(4))
