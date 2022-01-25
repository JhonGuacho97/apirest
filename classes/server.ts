import express from 'express';
require('dotenv').config();

export default class Server {

    public app: express.Application;
    public port =  process.env.PORT;

    constructor(){
        this.app = express();
    }

    start( callback: ()=> void ){
        this.app.listen( this.port, callback );
    }

} 