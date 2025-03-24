//1) 함수 선언문 => var과 같은 특징

// 함수의 경우 가장 아래 있는 함수가 실행됨
//그렇기에 똑같은 함수를 쓸때 조심해야함

/*함수 호이스팅 
var plus = function(x,y,z){
var plus
*/
let result = plus(1,2);
console.log(result);

function plus(x,y){
  return (x+y);
}

function plus(x,y,z){
  return(x+y+z);
}


// 2) 함수표현식 => let, const방식
// 
const printMsg = function(keword){
  return "result : +" + keyword;
}

//3) 화살표 함수 : ()=>{}
//3-1)익명함수
let aray = [1,2,3,4,5];
aray.forEach(val => console.log(val));

const highFun = function(num){
  return (x)=> {
    return x+num;
  }
}

const addNum = highFun(10);
result = addNum(5);
console.log('---' + result);


// 3-2) 화살표함수 + 함수표현식
const multi = (x,y) => x*y;
console.log(multi(2,4));

