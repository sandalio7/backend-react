import mongoose, {Schema} from 'mongoose'
//como este archivo es un modelo se le pueden aplicar todos metodos de los queries de mongoose

const productoSchema = new Schema({
    nombreProducto:{
        type: String,
        required:true,
        maxlength:150,
        //unique es para que no se pueda guardar un producto con el exacto mismo nombre
        unique:true
    },
    precioProducto:{
        type: Number,
        required:true,
    },
    categoria:{
        type: String,
        required:true
    }
})

//con Mayus hace referencia a la Bd, y lo modela
const Producto = mongoose.model('producto',productoSchema)

export default Producto;