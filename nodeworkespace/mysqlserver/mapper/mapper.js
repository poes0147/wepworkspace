const mariaDB = require('mariadb/callback');
const sqlList = require('./sql/customers.js');
const connectionPool = mariaDB.createPool({
//필수
host :process.env.DB_HOST,
port :process.env.DB_PORT,
user :process.env.DB_USER,
password :process.env.DB_PWD,
database :process.env.DB_DATABASE,
connectionLimit :process.env.DB_LIMIT,
//선택
permitSetMultiParamEntries : true,
insertIdAsNumber : true,
bigIntAsNumber : true,
});

let testSql = `SELECT * FROM customerXs`;

// const query = ()=>{
//   return connectionPool.query(testSql,null, (err,result)=>{
//     console.log(result);
//   })
// };

const query = (alias,values)=>{
  return new Promise((resolve, reject)=>{
    let executeSql = sqlList[alias];
    console.log(`sql : ${executeSql}`);
    connectionPool.query(executeSql, values, (err, result)=>{//비동기 방식이기에 코드 안에서 한번 더 작동할 수 있도록 감싸는..... 그래야 결과값을 받아올 수 있음
      if(err){
        reject({err});
      }else{
        resolve(result);
      }
    });
  })
  .catch(err=>{
    console.log(err)
    return err
  })
}
module.exports = {
  query,
}

