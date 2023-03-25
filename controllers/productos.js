import service from '../services/productos.js'


const renderPrincipal = async (req, res) =>{
  const productos = await service.listarProductos()
  res.render('formProd', {
    data: productos,
    hasProd: productos.length > 0,
    nombreUsuario: req.user.email 
  })
}

export default{
  renderPrincipal
}