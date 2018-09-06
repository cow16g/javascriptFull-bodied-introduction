let s = new Set();
s.add(NaN);
s.add(NaN);
console.log(s.size);

s.add({});
s.add({});
console.log(s.size);

s.add(1);
console.log(s.size);