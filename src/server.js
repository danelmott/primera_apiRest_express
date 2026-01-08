import express from 'express';
import { configDotenv } from 'dotenv';
import userRouter from './routes/usuarios.js';
import notFound from './middlewares/notFound.js';
configDotenv()


const app = express();

//MIDDLEWARE PARA PARSEAR BODY ANTES DE LAS PETICIONES
app.use(express.json())

//RUTAS
app.use('/users',userRouter);

//MIDDLEWARE PARA NOTFOUND EN RUTAS
app.use(notFound);



//inicializando servidor
app.listen(process.env.PORT,()=>{
    console.log(`servidor corriendo en el puerto ${process.env.PORT}`)
})