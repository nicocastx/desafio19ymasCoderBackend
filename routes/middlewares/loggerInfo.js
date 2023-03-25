import logger from '../../logger.js'

function loggerInfo(req, res, next){
  const {url, method} = req
  url == undefined ? '/' : req.url
  logger.info(`Ingresando a la ruta ${url} metodo ${method}`);
  next();
}

export default {
  loggerInfo
}