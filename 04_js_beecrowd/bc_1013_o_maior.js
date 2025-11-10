let input = require("fs").readFileSync("/dev/stdin", "utf8");
let [A, B, C] = lines.shift().split(" ").map((x) => parseInt(x));

let AB = (A + B) + Math.abs((A - B)) / 2;
let maiorvalor = (AB + C) + Math.abs((AB-C)) / 2;

console.log(`${maiorvalor} eh o maior`);