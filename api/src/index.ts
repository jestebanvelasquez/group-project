import express from'express';
// import { PrismaClient } from '@prisma/client';
const app = express();
import router from './Routes/index'

//midlewares:
app.use(express.json())//trasnforma boy a json
// const prisma = new PrismaClient()
const PORT = 4000;

app.get('/ping', (_req, res) =>{
    console.log('hola estoy en pong');
    res.status(200).json({data:'hola! pong'})
})

app.use('/', router)

app.listen(PORT, () => {
    console.log(`CONNECT TO: artistApp PORT:${PORT}`)
})



