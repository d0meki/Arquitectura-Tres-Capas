const express = require('express')
const cors = require('cors')
class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.baseUrl = '/api';
        //Middlewares
        this.middlewares();
        //ritas de mi aplicaion
        this.routes();
    }
    middlewares(){
        //CORS
        const whiteList = ['http://localhost:4200','http://127.0.0.1:5500'];
        this.app.use(cors({
            origin : whiteList
        }))
        this.app.use(express.json());
        //directorio publico
        this.app.use( express.static('src/business/public'));
    }

    routes(){
        this.app.use(this.baseUrl, require('../routes/routes'));
    }

    listen (){
        this.app.listen( this.port, ()=>{
            console.log('servidor corriendo en puerto',this.port);
        })
    }
}

module.exports = Server
