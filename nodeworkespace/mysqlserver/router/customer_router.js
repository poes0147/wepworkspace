// 라우터 모듈  라우터는 메뉴판
const express = require('express');
const router = express.Router();
const custService = require('../service/customer_service.js');// 들고올 자료를 ()경로 입력


// customers  
//전체조회 : GET + '/customers'
router.get('/customers',async (req,res)=>{
  let custList = await custService.findAll();
  res.send(custList);
});
 
//단건조회 : GET + '/customers/:id'
router.get('/customers/:id', async (req,res)=>{ //:id 로 등록된것은 params.id에서 받아진다. :=>params 기억해두기
  let custId = req.params.id;
  let custInfo = await custService.findById(custId);
  res.send(custInfo)
});
//등록     : POST + '/customers' + JSON 
router.post('/customers', async (req,res)=>{
  let addCust = req.body;
  let result = await custService.addCustomer(addCust);
  console.log("요청 바디 확인:", req.body);
  res.send(result);
});
//수정     : PUT + '/customers/:id' + JSON
router.put('/customers/:id', async (req,res)=>{
  let custId = req.params.id;
  let custUpInfo = req.body;
  let result = await custService.modifyCustomerInfo(custUpInfo, custId);
  res.send(result)
});
//삭제     : DELETE + '/customers/:id'
router.delete('/customers/:id', async(req,res)=>{
  let custId = req.params.id;
  let result = await custService.removeCustomerInfo(custId);
  console.log("요청 id 확인:", req.id);
  res.send(result)
});


module.exports = router;