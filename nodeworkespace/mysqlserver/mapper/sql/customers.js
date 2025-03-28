//mapper/sql/customers.js

const selectAll =
`SELECT id
        ,name
        ,email
        ,phone
        ,address
FROM customers
order by id`;

const selectByid = 
`SELECT id
        ,name
        ,email
        ,phone
        ,address
FROM customers
WHERE id = ?`; 

const insertInfo =
`INSERT INTO customers(name, email, phone, address)
VALUES (?, ?, ?, ?)`; //배열을 사용함 ? 많으면 배열!!!
//SET name = 'H' 'gil' 'Dong'

const updateInfo = 
`UPDATE customers
SET ?
WHERE id = ?`;//배열 [객체, 단일값]

const deleteInfo =
`DELETE FROM customers
WHERE id = ?`;


/*
1) ?의 갯수
1-1) 1개 : 단일 값
1-2) 2개 이상 : 배열

2) ? 앞에 컬럼의 유무
2-1) 컬럼이 존재하는 경우 - 기본 데이터값 (문자,숫자,날짜)
2-2) 컬럼이 존재하지 않는 경우 - 객체
*/

module.exports ={
  selectAll, 
  selectByid,
  insertInfo,
  updateInfo,
  deleteInfo,
}

//