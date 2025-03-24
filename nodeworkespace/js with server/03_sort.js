let fruits = ["Banana", "Orange","Apple", "Mango"];
fruits.sort();
console.log(fruits);


//숫자는 정렬이 어렵다.
let points = [10, 5, 20 ,1 ,100 ,121];

points.sort();
console.log(points);

points.sort(function(a,b){
  return a-b;
});
console.log(points);