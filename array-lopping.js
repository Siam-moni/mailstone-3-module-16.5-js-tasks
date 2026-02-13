const colors = ["red", "blue", "green", "yellow", "orange"];
let rev = [];
// for (let i = 0; i < colors.length; i++) {
//   rev.unshift(colors[i]);
// }
// console.log(rev);
for (let i = colors.length - 1; i >= 0; i--) {
  rev.push(colors[i]);
}
console.log(rev);
