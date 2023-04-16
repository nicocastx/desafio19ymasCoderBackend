import service from "../services/productos.js";

const nombreUsuarioGet = (req) => {
  if (req.user) return req.user.email;
  return "no definido";
};

const renderPrincipal = async (req, res) => {
  const productos = await service.listarProductos();
  res.render("formProd", {
    data: productos,
    hasProd: productos.length > 0,
    nombreUsuario: nombreUsuarioGet(req),
  });
};

const modificarProducto = async (req, res) => {
  const { newProducto } = req.body;
  console.log(newProducto);
  const { id } = req.params;
  console.log(id);
  await service.modificarProducto(newProducto, id);
  res.redirect(200, "/");
};

const eliminarProducto = async (req, res) => {
  const { id } = req.params;
  await service.eliminarProducto(id);
  res.redirect(200, "/");
};

const agregarProducto = async (req , res) =>{
  const {newProducto} = req.body
  await service.guardarProducto(newProducto)
  res.redirect('/')
}

const listarProductos = async(req, res) =>{
  const prods = await service.listarProductos()
  //devuelve una lista de productos
  res.json(prods)
}

export default {
  renderPrincipal,
  modificarProducto,
  eliminarProducto,
  agregarProducto,
  listarProductos
};