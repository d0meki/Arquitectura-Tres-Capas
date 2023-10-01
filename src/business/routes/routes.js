const  { Router } = require('express');
const router = Router();

const Categoria = require('../services/categoria');
const Producto = require('../services/producto');
const Vendedor = require('../services/vendedor');

const categoria = new Categoria();
const producto = new Producto();
const vendedor = new Vendedor();

//RUTAS CATEGORIA
router.get('/categoria/get-categoria',categoria.getCategorias);
router.get('/categoria/by/:id',categoria.getCategoria);
router.post('/categoria/add',categoria.addCategoria);
//RUTAS PRODUCTO
router.get('/producto/get-producto',producto.getProductos);
//RUTAS VENDEDOR
router.get('/vendedor/get-vendedor',vendedor.getVendedores);


module.exports = router;
