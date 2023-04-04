class UsuarioDTO {
  constructor({id, email, password}) {
    this.id = id
    this.email = email;
    this.password = password;
  }
}

export default function formatDTO(usuarios) {
  if (Array.isArray(usuarios)) {
    return usuarios.map((u) => new UsuarioDTO(u));
  } else {
    return new UsuarioDTO(usuarios);
  }
}
