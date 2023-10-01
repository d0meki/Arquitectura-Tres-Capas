const { response, request } = require('express')
class Producto
{
    constructor(){

    }
    getProductos = (req = request,res = response) =>{
        res.json({
            msg:'get API - Producto',
        })
    }

}
module.exports = Producto