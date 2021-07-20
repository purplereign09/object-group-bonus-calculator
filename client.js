
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



//function that takes in one employee object
function bonusCalculator(name){
  const individualBonus = [];
  //empty array to hold the individual bonus values
  for (let employee of employees) {
    //loops through each employee name
    if (name === employee.name) {
      //if the parameter name is equal to the object key name
      individualBonus.push(`The employee name is ${employee.name}`);

      let extraBonus = 0;
      if (employee.employeeNumber.length <= 3) {
        extraBonus = 5;
      } else {
        extraBonus = 0;
      };
      //The `bonusPercentage` property should contain the bonus percentage the employee is to receive.
      //See section below for calculation instructions.
      let bonusPercentage = 0;
      if (employee.reviewRating <= 2) {
        bonusPercentage = 0 + extraBonus;
      } else if (employee.reviewRating === 3) {
        bonusPercentage = 4 + extraBonus;
      } else if (employee.reviewRating === 4) {
        bonusPercentage = 6 + extraBonus;
      } else if (employee.reviewRating === 5) {
        bonusPercentage = 10 + extraBonus;
      }
      individualBonus.push(`The bonus percentage is ${bonusPercentage}`);

      //pushing the individual bonus of the employee that qualifies under conditions below
      let totalBonus = 0;
      if (employee.reviewRating <= 2) {
        totalBonus = 0 + extraBonus;
      } else if (employee.reviewRating === 3) {
        totalBonus = ((4 + extraBonus) / 100) * Number(employee.annualSalary);
      } else if (employee.reviewRating === 4) {
        totalBonus = ((6 + extraBonus) / 100) * Number(employee.annualSalary);
      } else if (employee.reviewRating === 5) {
        totalBonus = ((10 + extraBonus) / 100) * Number(employee.annualSalary);
      }

      individualBonus.push(`The total bonus is ${totalBonus}`);

      let totalCompensation = totalBonus + Number(employee.annualSalary);
      individualBonus.push(`Total compensation is ${totalCompensation}`);
    }
  }
  return individualBonus;
}

console.log(bonusCalculator('Atticus'));
console.log(bonusCalculator('Jem'));
console.log(bonusCalculator('Scout'));
console.log(bonusCalculator('Robert'));
console.log(bonusCalculator("Mayella"));

//property should be the adjusted annual compensation (base annual + bonus)
// function individualBonusCalculation(number){
//The `totalBonus` should be the employee's total bonus rounded to the nearest dollar.  
// } 
 //If their employee number is 4 digits long, this means they have been with the company for longer than 15 years,
//and should receive an additional 5%.
//- However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
//- No bonus can be above 13% or below 0% total.
 
