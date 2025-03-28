//mapper/sql/cutomers.js

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

module.exports ={
  selectAll, 
  selectByid,
}

//