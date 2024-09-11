// write your func here

function Equal() {
  let a = [12, "1", 8, 20, 5];
  let b = [12, 1, 8, 20, 5];

  if (a.length !== b.length) return "False";
  else {
    for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return "False";
    return "True";
  }
}
let v = Equal();

console.log(v);
