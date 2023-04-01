const generateBirthdays = (amount: number) => {
  const randomBirthdays: number[] = [];

  for (let i = 0; i < amount; i++) {
    randomBirthdays.push(Math.floor(Math.random() * 365));
  }

  return randomBirthdays;
}

const checkForDuplicates = (array: number[]) => {
  for (let i = 0; i < array.length; i++) {
    const newArray = [...array.slice(0, i), ...array.slice(i + 1)];
    
    if (newArray.includes(array[i])) {      
      return true;
    }
  }

  return false;
}

export { generateBirthdays, checkForDuplicates }