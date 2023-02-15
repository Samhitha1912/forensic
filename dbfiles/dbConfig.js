const config ={
    user:'dbms',
    password: 'dbms',
    server: 'LAPTOP-3UD1TBRM',
    database: 'FORENSIC',
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        instancename: 'SQLEXPRESS',
        encrypt: false
       
    },
    port:1434 
}


module.exports=config;