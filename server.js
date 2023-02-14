const express = require('express'),
    //   Employee = require('./dbFiles/employee'),
        Case = require('./dbFiles/Case'),
      dbOperation = require('./dbFiles/dbOperation'),
      cors    =require('cors');

const API_PORT = process.env.PORT || 5000;
const app=express(); //start server
app.use(express.json()); //take json from frontend
app.use(express.urlencoded());

app.use(cors());

app.post('/api', async(req,res)=> {
    console.log('called');
    const result = await dbOperation.getEmployees(req.body.name);
    res.send(result);
})

app.post('/quit', function(req,res){
    console.log('called quit');
    res.send({result: 'bye'});
})

let Pam = new Employee("pam",56,"F");
// console.log(Pam);
 dbOperation.createEmployees(Pam);

dbOperation.getEmployees().then(res =>{
    console.log(res.recordset);
})

app.listen(API_PORT, ()=>console.log(`Listening on port ${API_PORT}`));

