import express from'express';
import cors from 'cors';
const app = express();
import router from './Routes/index'
import {createCategorys} from './Routes/Controllers/categoryController'

//midlewares:
app.use((_req, _resp, next) => {
    next()
  }, cors({ maxAge: 84600 }))
app.use(express.json())//trasnforma boy a json
// const prisma = new PrismaClient()
const PORT = 4000;

//politica de cors:
// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const allowedOrigins = ['*'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

// Then pass these options to cors:
app.use(cors(options));

app.get('/ping', (_req, res) =>{
    console.log('hola estoy en pong');
    res.status(200).json({data:'hola! pong'})
})



app.use('/', router)

app.listen(PORT, () => {
    createCategorys();
    console.log(`CONNECT TO: artistApp PORT:${PORT}`)
})



