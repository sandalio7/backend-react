import Producto from "../models/producto"

const productoCtrl = {}
//logica para obtener lista de productos
productoCtrl.listarProductos = (req,res)=>{
    res.send('listar productos')
}

productoCtrl.borrarProducto = (req,res)=>{
    res.send('borrar producto')
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





export default productoCtrl