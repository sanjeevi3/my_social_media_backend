require("dotenv").config();
const mysql = require("mysql");
const {serverErrorResponse} = require("./helper/errorResponse")
// enviornment data
const data = process.env;
const databaseConfig =(res)=>{

    mysql.createConnection({
        host:data.host,
        user:data.user,
        password:data.password,
        database:data.database
    });
    // check the connection
    connection.connect(error=>{
        if(error){
            serverErrorResponse(res);
        }
    })
} 

export default databaseConfig;