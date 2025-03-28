const mariaDB = require('../mapper/mapper.js');


// 전체 조회
const findAll = async ()=>{
  let list = await mariaDB.query('selectAll');
  return list;
};
// 단건 조회
const findById = async (custId)=>{
  let info = (await mariaDB.query('selectByid', custId))[0]; //마리아db는 무조껀 배열로 반환됨 
  //서비스에서 배열을 처리해주면 됨. [0]으로 고정
  return info;
};
// 등록
const addCustomer = async (custInfo)=>{ //객체를 배열로
  let columnlist = ['name', 'email', 'phone', 'address']
  let addInfo = converterAray(custInfo, columnlist);
  let result = await mariaDB.query('insertInfo', addInfo);
  console.log("전달될 파라미터 배열:", addInfo);
  return result;
};
//객체 -> 배열
const converterAray = (target, list) =>{
  let aray = [];
  for(let field of list){
    let val = target[field];//target['name']
    aray.push(val);
  }
  return aray;
}
// 수정
const modifyCustomerInfo = async (custInfo, custId)=>{
  let updateInfo = [custInfo, custId]
  let result = await mariaDB.query('updateInfo',updateInfo);
  return result;
};
// 삭제
const removeCustomerInfo = async (custId)=>{
  let result = await mariaDB.query('deleteInfo',custId);
  return result;
};


module.exports = {
  findAll,
  findById,
  addCustomer,
  modifyCustomerInfo,
  removeCustomerInfo,
}