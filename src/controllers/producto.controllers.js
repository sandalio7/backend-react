const productoCtrl = {}
//logica para obtener lista de productos
productoCtrl.listarProductos = (req,res)=>{
    res.send('listar productos')
}

productoCtrl.borrarProducto = (req,res)=>{
    res.send('borrar producto')
}


export default productoCtrl