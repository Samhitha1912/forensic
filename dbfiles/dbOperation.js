const config = require('./dbConfig'),
      sql    = require('mssql');

const getCase = async()=>{
  try{
    let pool=await sql.connect(config);
    let casedata = pool.request().query("SELECT * from CRIMES")
    console.log(casedata);
    return casedata;
  }  
  catch(error){
    console.log(error);
  }
}
//WHERE DetectiveID = '${DetectiveID}

// const createEmployees = async(Employee)=>{
//   try{
//     let pool=await sql.connect(config);
//     let employees = await pool.request()
//     .query(`INSERT INTO WorkerDB VALUES
//     ('${Employee.name}',${Employee.age},'${Employee.gender}')`);
//     console.log(employees);
//     return employees;
//   }  
//   catch(error){
//     console.log(error);
//   }
// }

module.exports ={
    //createEmployees,
    getCase
}