import Server from "./classes/server";
import UserRoutes from "./routes/usuario";
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
import postRoutes from "./routes/post";
import cors from 'cors';


const server = new Server(); 

server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());

server.app.use(cors ({origin:true, credentials:true}));

server.app.use('/user', UserRoutes);
server.app.use('/post', postRoutes);

    const uri = "mongodb+srv://jhonbastidas98:0H7C7xeRpJAIlz91@api-rest.jbgfe.mongodb.net/loginserver?retryWrites=true&w=majority";



mongoose.connect(uri,
    (err)=>{
    if(err) throw err;
    console.log('base de datos online');
});


server.start(()=>{
    console.log(`servidor corriendo en puerto ${server.port}`);
    
});