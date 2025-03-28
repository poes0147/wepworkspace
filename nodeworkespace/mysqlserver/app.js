const express = require('express');
const app = express();
const custRouter = require('./router/customer_router.js');



// 미들웨어
// application/x-www-form-urlencoded
app.use(express.urlencoded({extended : fales}));
// application/json
app.use(express.json());

app.listen(3000,()=>{
  console.log('Server Start');
  console.log('http://localhost:3000');
});

//라우팅

app.get('/', (req,res)=>{
  res.send('WelCome!!');
})

app.user('/', custRouter);

//원래 서비스를 만들고, db가 필요한지 판단함
//구조부터 이해를 위해 반대로 진행