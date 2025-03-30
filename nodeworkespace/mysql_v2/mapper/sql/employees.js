/*
	id //INT AUTO_INCREMENT PRIMARY KEY,
	first_name //VARCHAR(50),
	last_name //VARCHAR(50),
	email //VARCHAR(50),
	gender //VARCHAR(50),
	ip_address //VARCHAR(20)

*/

const selectAll =
`SELECT id
        ,first_name
        ,last_name
        ,email
        ,gender
        ,ip_address
FROM employees
ORDER by id`;


const selectByid = 
`SELECT id
        ,first_name
        ,last_name
        ,email
        ,gender
        ,ip_address
FROM employees
WHERE id = ?`;

const insertInfo =
`INSERT INTO employees(
        first_name,
        last_name,
        email,
        gender,
        ip_address)
VALUES (?,?,?,?,?)`;

const updateInfo = 
`UPDATE employees
SET ?
WHERE id = ?`

const deleteInfo =
`DELETE FROM employees
WHERE id = ?`



module.exports ={
selectAll, 
selectByid,
insertInfo,
updateInfo,
deleteInfo,
}
