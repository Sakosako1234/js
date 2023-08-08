//1
var ricxvebi = [2, 5, 100,234,6,3,25,7,3,56,4]

var sia1 = ricxvebi.filter(x => x%2)

var sia2 = sia1.map(x => x*2)

console.log(sia2);

//2
var ricxvebii = [2, 5, 100, 234, 6, 3, 25, 7, 3, 56, 4]

var nums = ricxvebii.map(x => x*x)

console.log(nums);

//3

var asaki = [2, 5, 18,14,22,56,4,33]

var filter1 = asaki.filter(x => x >= 18)

console.log(filter1);

//4 
var gvarebi = ['kapanadze',"nozadze","meladze","sturua","yifshidze","darchia"]

var filt = gvarebi.filter(name => name.length > 5 && name.includes('dze'))

console.log(filt);

//5
var produqtebi =[["vashli","msxali"],["pomidori","stafilo","kombosto"],["shaqari","marili"]]

console.log(produqtebi[1][1]);
console.log(produqtebi[2][0]);

//6
var produqtebii = [["vashli","msxali"],["pomidori","stafilo","kombosto"],["shaqari","marili"]]
var sayidlebi = produqtebii.reduce((x,xx) =>
x.concat(xx) )

console.log(sayidlebi);

