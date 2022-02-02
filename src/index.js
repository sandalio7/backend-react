import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path'

//creo una instancia de express
const app = express();
// crear un puerto para el servidor, vamos a usar express para esto
app.set('port', process.env.PORT || 4000)
//con esto le decimos que queremos q el backend se ejecute en el puerto que nos de el servidor y caso contrario d eno ser posible esto que use el puerto 4000

app.listen(app.get('port'), ()=>{
    console.log('estoy en el puerto ' + app.get('port'));
})

//middlewares o config extras se usan para dar mas informacion al hacer peticiones
app.use(morgan('dev')) ; //da informacion extra a la terminal
app.use(cors()); //permite recibir peticiones remotas

// permite recibir objetos en formato .json e interpretarlos
app.use(express.json());
app.use(express.urlencoded({extend:true}));
//mostrar una pagina por defecto
console.log(path.join(__dirname,'../public'))
app.use(express.static(path.join(__dirname,'../public')))



// de esta forma el servidor queda escuchando y no me devuelve el control de la terminal

console.log('prueba')
// aqui entra nodemon que se encarga de recargar la pagina para actualizar cada vez que hago cambios en el codigo y mostrarlos en tiempo real

//crear rutas req = request (petision) y res = response (respuesta)
app.get('/', (req,res)=>{
    res.send('hola desde el backend')
})
app.delete('/borrardatos', (req,res)=>{
    res.send('borro los datos')
})
