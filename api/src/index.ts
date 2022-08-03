import express from'express';
const app = express();

//midlewares:
app.use(express.json())
app.get('/', (req, res) =>{
    console.log('hola');
    res.status(200).json({data:'hola!'})
})

app.listen(4000, () => {
    console.log('artistApp')
})