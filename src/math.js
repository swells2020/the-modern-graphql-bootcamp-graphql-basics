function sum(a, b) {
  return a + b;
}
//n.b. this is hoisted.s

const subtract = function (a, b) {
  return a - b;
};

const square = (a) => a * a;

const cube = (a) => {
  return a * a * a;
};
//n.b. these are not hoisted.

export { sum as default, subtract, square, cube };
