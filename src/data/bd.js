const mysql = require('mysql')
class DataBase{
    constructor(){
        this.pool = mysql.createPool({
            connectionLimit : 10,
            host            : process.env.HOST,
            user            : process.env.USER,
            database        : process.env.DATABASE,
        });   
    }
}
module.exports = DataBase