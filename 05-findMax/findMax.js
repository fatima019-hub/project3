// write your func here
const findmax = [12, 1, 8, 20, 5];

function max(input) {
  if (input) {
    let maxValue = 0;
    for (const item of input) {
      if (item > maxValue) {
        maxValue = item;
      }
    }
    return maxValue;
  }
}
const result = max(findmax);

console.log(result);
