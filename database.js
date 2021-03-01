const mysql=require('mysql');
const connect=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'vikas',
    database:'mysql',
    port:3307
});

module.exports=connect;