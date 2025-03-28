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
router.get('/customers/:id', async (req,res)=>{
  let custId = req.params.id;
  let custInfo = await custService.findById(custId);
  return custInfo

});
//등록     : POST + '/customers' + JSON 
router.post('/customers', (req,res)=>{

});
//수정     : PUT + '/customers/:id' + JSON
router.put('/customers/:id', (req,res)=>{

});
//삭제     : DELETE + '/customers/:id'
router.delete('/customers/:id', (req,res)=>{

});


module.exports = router;