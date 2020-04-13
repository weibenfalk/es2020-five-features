// 1. Private fields/properties (variables) in classes
class Starship {
  #message = 'Mayday, please help!';

  broadcast() {
    console.log(this.#message);
  }
}

const starship = new Starship();
starship.broadcast();

// 2. Optional chaining
const astronaut = {
  name: 'Thomas Weibenfalk',
  looks: {
    hair: 'blonde',
    eyes: 'green',
  },
};

console.log('Astronaut height', astronaut.body?.height);
const mapTest = astronaut.body?.map((val) => val);
console.log('Map Test', mapTest);

// 3. Dynamic Imports
const calculate = async (num1, num2) => {
  const calc = await import('./calc.js');
  console.log(calc.add(num1, num2));
};

calculate(10, 15);

// 4. Nullish Coalescing, Checks if value is null or undefined
const star = {
  name: '',
  age: 0,
  supernova: false,
  temperature: null,
};

for (const prop in star) {
  console.log(`${prop}: ${star[prop] ?? 'No value set'}`);
}

// 5. BigInt, use an "n" at the end of the integer
const maxOldNumber = Number.MAX_SAFE_INTEGER;
const newBigNumber = 12345000000000000000000000n;
console.log('Old max number: ', maxOldNumber);
console.log('New BIG number: ', newBigNumber);
