const express = require ("express");
const routerApi = require("./routes")
const {logErrors,errorHandler, boomErrorHandler,ormErrorHandler} = require("./middlewares/ErrorHandler")
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/',(req, res)=>{
    res.sendFile('index.html', {root: __dirname })
});

app.get('/nueva-ruta',(req, res)=>{
    res.send('Hola soy nueva ruta');
});


app.listen(port,()=>{
    
    console.log(`Mi port: ${port}`);
})

routerApi(app);
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);