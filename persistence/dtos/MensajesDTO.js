class MensajeDTO{
  constructor({_id, id, author, text}){
    this._id = _id
    this.id = id,
    this.author = {
      mail: author.mail,
      nombre: author.nombre,
      apellido: author.apellido,
      edad: author.edad,
      alias: author.alias,
      avatar: author.avatar,
    },
    this.text = text
  }
}

export default function formatDTO(msjs){
  if(Array.isArray(msjs)){
    return msjs.map(obj => new MensajeDTO(obj))
  } else{
    return new MensajeDTO(msjs)
  }
}

