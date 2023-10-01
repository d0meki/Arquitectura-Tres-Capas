const DataBase = require('./bd');
class DbCategoria{

    constructor(){
        this.coneccion = new DataBase();
    }

    /**
     * !@author ÐØmEki 
     * @param {'array de todas las categorias'} callback 
     */
    getCategorias(callback){
        this.coneccion.pool.getConnection((err, connection) => {
            if(err) throw err
            console.log('connected as id ' + connection.threadId)
            connection.query('SELECT * from categorias', (err, rows) => {
                connection.release()
                if (!err) {
                    callback(rows);
                } else {
                    console.log(err)
                }
            })
        })
    }
    /**
     * !@author ÐØmEki 
     * @param {'id de la categoria a buscar'} id 
     * @param {'categoria encontrada con ese id'} callback 
     */
    getCategoria(id,callback){
        this.coneccion.pool.getConnection((err, connection) => {
            if(err) throw err
            console.log('connected as id ' + connection.threadId)
            connection.query('SELECT * from categorias WHERE id = ?',id, (err, rows) => {
                connection.release()
                if (!err) {
                    callback(rows);
                } else {
                    console.log(err)
                }
            })
        })
    }
    /**
     * !@author ÐØmEki 
     * @param {'datata de la nueva categoria'} data 
     * @param {'respuesta de la bd si se agregó o sucedio algun error'} callback 
     */
    addCategoria(data,callback){
        this.coneccion.pool.getConnection((err, connection) => {
            if(err) throw err
            console.log('connected as id ' + connection.threadId)
            connection.query('INSERT INTO categorias SET ?',data, (err, rows) => {
                connection.release()
                if (!err) {
                    callback({msj:'success',record:rows});
                } else {
                    console.log(err)
                    callback({msj:err});
                }
            })
        })
    }

}
module.exports = DbCategoria