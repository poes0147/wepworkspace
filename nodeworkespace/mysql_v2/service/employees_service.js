const mariaDB = require('../mapper/mapper.js')

//전체조회
const  findAll = async ()=>{
  let list = await mariaDB.query('selectAll');
  return list;
};

//단건조회
const  findById = async (empId)=>{
  let info = (await mariaDB.query('selectByid',empId))[0];
  return info;
};
//등록
const  addEmployee = async (empInfo)=>{
  let columnlist = ['first_name' ,'last_name' ,'email' ,'gender' ,'ip_address']
  let addInfo = converterAray(empInfo, columnlist);
  let result = await mariaDB.query('insertInfo', addInfo);
  return result;
};
const converterAray = (target, list) =>{
  let aray = [];
  for(let field of list){
    let val = target[field];//target['name']
    aray.push(val);
  }
  return aray;
}

//수정
const   modifyEmployeeInfo = async (empUpInfo, empId)=>{
  let updateInfo = [empUpInfo, empId]
  let result = await mariaDB.query('updateInfo',updateInfo)
  return result;
};
//삭제
const  remoyeEmployeeInfo =async (empId)=>{
  let result = await mariaDB.query('deleteInfo',empId)
  return result;
};

module.exports ={
  findAll,
  findById,
  addEmployee,
  modifyEmployeeInfo,
  remoyeEmployeeInfo,
}