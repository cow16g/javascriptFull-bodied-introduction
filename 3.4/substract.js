var dat1 = new Date(2017, 4, 15);
var dat2 = new Date(2017, 5, 20);
console.log(dat2.getTime());
console.log(dat1.getTime());
var diff = (dat2.getTime() - dat1.getTime());
var diff2 = diff/1000/60/60/24;
console.log(diff2 + '日の差があります。');