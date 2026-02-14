let number = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let copy = number.map((row) => [...row]);

copy[1][0] = 99;

console.log(copy);
