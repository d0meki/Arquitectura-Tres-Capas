const { response, request } = require('express')
class Vendedor
{
    constructor(){

    }
    getVendedores = (req = request,res = response) =>{
        res.json({
            msg:'get API - Vendedor',
        })
    }

}
module.exports = Vendedor