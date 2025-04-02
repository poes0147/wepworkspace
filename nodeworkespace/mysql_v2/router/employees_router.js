const express = require('express');
const router = express.Router();
const empService = require('../service/employees_service.js');

//전체조회: GET +
router.get('/employees', async (req,res)=>{
    let empList = await empService.findAll()
    res.send(empList);

})
//단건조회: GET +
router.get('/employees/:id', async (req,res)=>{
    let empId = req.params.id;
    let empInfo = await empService.findById(empId);
    console.log('test : ', empId)
    res.send(empInfo);
})
//등록: POST +
router.post('/employees', async (req,res)=>{
    let addEmp = req.body;
    let result = await empService.addEmployee(addEmp)
    console.log("요청 바디 확인:", req.body);
    res.send(result)
})
//수정: PUT +
router.put('/employees/:id', async (req,res)=>{
    let empId = req.params.id;
    let empUpInfo = req.body;
    let result = await empService.modifyEmployeeInfo(empUpInfo,empId);
    console.log("요청 바디 확인:", req.params.id);
    console.log("요청 바디 확인:", req.body);
    res.send(result);
})  
//삭제 : DELETE +
router.delete('/employees/:id',async (req,res)=>{
    let empId  = req.params.id;
    let result = await empService.remoyeEmployeeInfo(empId);
    res.send(result);
})

module.exports = router;