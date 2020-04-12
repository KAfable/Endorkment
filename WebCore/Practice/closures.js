// Lexical Scoping
const badAdder = (id) => {
  let counter = 0;
  const incrementCount = () => {
    console.log(id, counter);
    counter++;
    console.log(id, counter);
  };
  incrementCount(id);
};

badAdder("badAdder"); // logs 0, 1

const newBadAdder = badAdder;
newBadAdder("newBadAdder1"); // logs 0, 1, same as above
newBadAdder("newBadAdder2");
newBadAdder("newBadAdder3");

// Closures
const goodAdder = (id) => {
  let counter = 0;
  const incrementCount = () => {
    console.log(id, counter);
    counter++;
    console.log(id, counter);
  };
  // instead of running the function we return it
  return incrementCount;
};

goodAdder("goodAdder1")(); // 0
goodAdder("goodAdder2")(); // 1

// when you assign the returned function to a variable, it actually receives a function object
// which means it still has access to all the variables that it closed upon
const newGoodAdder = goodAdder("newGoodAdder");
newGoodAdder();
newGoodAdder();
newGoodAdder();
