import mongoose from 'mongoose'

//cadena de conexion a la base de datos 
const url = 'mongodb://localhost:27017/crudcafe'

mongoose.connect(url,{useNewUrlParser:true})

// crear una instancia de esta coneccion/ guardar la conexion en una variable

const connection = mongoose.connection

//averiguar si ya me puedo conectar
connection.once('open',()=>{
    console.log('BD conectada')
})