const config ={
    user:'dbms',
    password: 'dbms',
    server: 'LAPTOP-PMD13D6S',
    database: 'FORENSIC',
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        instancename: 'SQLEXPRESS',
        encrypt: false
       
    },
    port:1433 
}


module.exports=config;