const findTheOldest = function(people) {
  let ages = [];
  let maxAge = 0;  

  people.forEach((target) => {
    ages.push(target.hasOwnProperty('yearOfDeath') ? target.yearOfDeath - target.yearOfBirth : null);
    maxAge = ages.reduce((a, b) => a < b ? b : a);
  });

  return people[ages.indexOf(maxAge)];
};

// Do not edit below this line
module.exports = findTheOldest;
