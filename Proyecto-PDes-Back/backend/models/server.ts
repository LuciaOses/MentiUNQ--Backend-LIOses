import express, {Application}  from "express";
import cors from 'cors';
// import url from 'node:url';
// const myURL = url.parse('http://mentiunq.byethost6.com');


import userRoute from '../routes/usuario';
// import slides from '../routes/slide';
import db from "../db/connection";
import morgan from "morgan";


export class Server{

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios:'/usuarios',
        // slides:'/slides'
    }

    constructor(){

        this.app = express();
        this.port = process.env.PORT || '8000'; //si tiene un problema con el tipo de la variable, le asigna directamente el puerto 8000
        this.dbConnection();
        this.middlewares();
        //Defino mis rutas
        this.routes();
    }

    async dbConnection(){
        try{
            await db.authenticate();
            console.log('Database online');
        } catch(error){
            throw new Error ("error");
        }
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use( this.apiPaths.usuarios, userRoute)
        // this.app.use( this.apiPaths.slides, slides)
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        })
    }
}
// Exportacion por defecto.
export default Server;