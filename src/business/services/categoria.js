const { response, request } = require('express')
const DbCategoria = require('../../data/dbCategorias');
class Categoria
{
    constructor(){
        this.dbCategoria = new DbCategoria();
    }
    /**
     * !@author ÐØmEki 
     * @param {http/request} req 
     * @return {http/response} res 
     */
    getCategorias = (req = request,res = response) =>{
       this.dbCategoria.getCategorias((rows)=>{
        res.json({
            msg:'get API - Categorias',
            query:rows
        })
       });
    }
    /**
     * !@author ÐØmEki 
     * @param {http/request} req 
     * @return {http/response} res 
     */
    getCategoria = (req = request,res = response) =>{
       const id = req.params.id;
       this.dbCategoria.getCategoria(id,(rows)=>{
        res.json({
            msg:'get API - Categorias by id',
            query:rows
        })
       });
    }
    /**
     * !@author ÐØmEki 
     * @param {http/request} req 
     * @return {http/response} res 
     */
    addCategoria = (req = request,res = response) =>{
        const {nombre,created_at,updated_at} = req.body
        const data = {
            nombre: nombre,
            created_at: new Date(created_at),
            updated_at: new Date(updated_at)
        }
        //"insertId": 2, con eso puedo mandar a llamar getCategoria para obtener el ultimo registro 
        //y mostrar el agregado automatico en la capa de presentacion
        //sin necesidad de redirigir o recargar la pagina
       this.dbCategoria.addCategoria(data,(respuesta)=>{
        res.json({
            msg:'post API - add Categoria',
            data: respuesta
        })
       });
    }

}
module.exports = Categoria