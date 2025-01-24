import express from 'express';
import { listar } from './conexion.js'
const app = express()

app.get("/",(req,res)=>{
    listar().then((datos)=>{
        res.send(datos);
    }).catch((error)=>{
        res.send("Ubo un error al mostrar los datos.")
    });
});


app.listen(3000, ()=>{
    console.log("servidor levantado")
});