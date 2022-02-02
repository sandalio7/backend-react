const productoCtrl = {}
//logica para obtener lista de productos
productoCtrl.listarProductos = (req,res)=>{
    res.send('listar productos')
}

productoCtrl.borrarProducto = (req,res)=>{
    res.send('borrar producto')
}

productoCtrl.crearProducto = (req,res)=>{
    res.send('crear producto')
}





export default productoCtrl