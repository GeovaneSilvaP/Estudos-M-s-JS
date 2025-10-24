let a, b, c;

[a = 20, b = 7, c = 50] = [1, undefined, 5];

console.log(a);
console.log(b);
console.log(c);

//
let x = 100;
let y = 2000;

[x, y] = [y, x];

console.log("X:" + x, "Y:"  + y);

//
const [g, ...h] = [1, 2, 3];

console.log(g, h);

//
const obj = {nome1: "Geovane", idade1: 23};

const {nome1, idade1} = obj;

console.log(nome1, idade1);

//
let k , l;

({k, l} = {k: 23, l: 40});

console.log(k, l);

//
const o = {t: 45, u: true};

const {t: too, u: bar} = o;

console.log(t, u);
