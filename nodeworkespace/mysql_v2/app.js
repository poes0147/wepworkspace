const express = require('express');
const app = express();
const empRouter = require('./router/empoyees_router.js');


//미들웨어
// application/x-form-urlencoded
app.use(express.urlendcoded({extended : false}));
//application / json
app.use(express.json);

app.listen(5000,()=>{
  console.log('server start');
  console.log('http://localhost:5000');
})

//라우팅
app.get('/', (req,res)=>{
  res.send('WelCome!!');
})

app.use('/', empRouter);
