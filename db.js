// var mysql = require('mysql');
// const app = require('./app');

// console.log("InsideDB");

// var pool  = mysql.createPool({
//     connectionLimit : 10,
//     host            : 'localhost',
//     user            : 'root',
//     password        : 'root',
//     database        : 'jarvis'
//   });

// pool.getConnection((err, conn)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("connected",conn);
// })

// pool.end((err)=>console.log("end error",err));