const express = require('express'),
    //   Employee = require('./dbFiles/employee'),
      Case = require('./dbFiles/Case'),
      dbOperation = require('./dbFiles/dbOperation'),
      cors    =require('cors');
      //getCase    = require('./dbFiles/dbOperation/getCase');

const API_PORT = process.env.PORT || 5000;
const app=express(); //start server
app.use(express.json()); //take json from frontend
app.use(express.urlencoded());

app.use(cors());

// app.get('/api', async(req,res)=> {
//     console.log('called');
//     const result = await dbOperation.getCase(req.body.CaseID);
//     res.send(result);
// })

app.get('/quit', function(req,res){
    console.log('called quit');
    res.send(dbOperation.getCase);
})

// let C1 = new Case("4C","Delhi","3D");
// console.log(C1);
 //dbOperation.createEmployees(C1);

dbOperation.getCase().then(res =>{
    console.log(res);
})

app.listen(API_PORT, ()=>console.log(`Listening on port ${API_PORT}`));

