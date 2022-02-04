import Producto from "../models/producto"
const ID = {}
const productoCtrl = {}


//logica para obtener lista de productos
productoCtrl.listarProductos = async(req,res)=>{
    try{
        //devolver al frontend una lista con un arreglo con  todos los productos que estan en la BD
        const listaProductos = await Producto.find()
        res.status(200).json(listaProductos)
    }catch(error){
        console.log(error)
        res.status(404).json({mensaje:'no se pudo obtener el listado '})
    }
}



productoCtrl.borrarProducto = async(req,res)=>{
    try{
        //buscar el producto mediante el id y borrarlo cuando le encuentre
        const borrarProducto = await Producto.findByIdAndDelete(req.params.id)
        //devolver una respuesta al front
        res.status(200).json({mensaje:'se pudo eliminar el producto solicitado'})
    }catch(error){
        console.log(error)
        //caso contrario envio una respuesta negativa 
        res.status(400).json({mensaje:'no se pudo borrar el producto'})
    }
}

productoCtrl.crearProducto = async(req,res)=>{
    
    //console.log(req.body)
    try{
        //validar
        //crear un nuevo objeto para guardar en la bd
        const productoNuevo = new Producto({
            nombreProducto: req.body.nombreProducto,
            precioProducto: req.body.precioProducto,
            categoria: req.body.categoria
        })
        //guardar producto en BD
        await productoNuevo.save()
        // enviar respuesta / si quiero enviar el producto al frontend que si se creo el producto y acompañarlo con el producto le agrego el .json() al final
        res.status(201).json({mensaje:'producto creado correctamente'})
    }catch(error){
            console.log(error)
            // si el servidor no puede interpretar la req enviar error 400
            res.status(400).json({mensaje:'Error al agregar el producto'})
    }
}


    productoCtrl.obtenerProducto = async (req,res)=>{
        try{
            // obtener el parametro de la ruta
            console.log(req.params.id)
            //creo el objeto yh lo busco en la BD
            const productoBuscado = await Producto.findById(req.params.id)
            res.status(200).json(productoBuscado)
        }catch(error){
            console.log(error)
            res.status(400).json({mensaje:'no se pudo obtener el producto solicitado'})
        }
    }

    productoCtrl.editarProducto = async(req,res)=>{
        try {
            //recibir el id del producto que se quiere editar y modificarlo con los datos que llegan en el body
            await Producto.findByIdAndUpdate(req.params.id,req.body)
            //enviar una respuesta
            res.status(200).json({mensaje:'el producto se pudo editar correctamente'})
        } catch (error) {
            console.log(error)
            res.status(400).json({mensaje:'no se pudo editar el producto seleccionado'})
        }
    }






export default productoCtrl