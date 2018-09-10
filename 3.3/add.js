// 日付、時刻おw加減算するためのメソッドは用意されていない
var date = new Date(2017, 4, 15, 11, 40);
console.log(date.toLocaleString());
date.setMonth(date.getMonth() + 3);
console.log(date.toLocaleString());
date.setDate(date.getDate() - 20);
console.log(date.toLocaleString());