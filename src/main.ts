import { generateBirthdays, checkForDuplicates } from './utils/birthdays.ts';

const amountOfBirthdays = 50;
const iterations = 5000;

const results = []

for (let i = 0; i <= amountOfBirthdays; i++) { 
  let overlapInBirthdays = 0;
  for (let j = 0; j < iterations; j++) { 
    if (checkForDuplicates(generateBirthdays(i))){
      overlapInBirthdays += 1;
    }
  }

  results.push(`${(overlapInBirthdays / iterations * 100).toFixed(2)}%`);
}

console.table(results);