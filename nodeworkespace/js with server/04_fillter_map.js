let persons = [
  {
    name: "유재석",
    point: 95,
    city: "서울"
  },
  {
    name: "김종국",
    point: 88,
    city: "서울"
  },
  {
    name: "하하",
    point: 82,
    city: "서울"
  },
  {
    name: "송지효",
    point: 79,
    city: "경기"
  },
  {
    name: "양세찬",
    point: 75,
    city: "제주"
  },
  {
    name: "전소민",
    point: 74,
    city: "경기"
  },
  {
    name: "지석진",
    point: 69,
    city: "서울"
  }
];

// 1) 점수가 80점 이상인 사람
let scores = persons.filter(function(value,index){
 return value.point >80;
})
console.log(scores);
//ps)ㄱ댁체배열일 경우 새로운 배열과 원본 배열 둘다 데이터 변경 발생
// scores[0].name = "강호동";ㅣ
// console.log(scores);
// console.log(persons);

// 2) 각 사람들 별로 no를 추가
let newList 
= persons.map(function(value, index){
  return {
    no : ((index +1)*100),
    name : value.name,
    city : value.city
  }
});
console.log(newList);
console.log(persons);