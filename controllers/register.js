import passport from "passport";
import { Strategy as localStrategy } from "passport-local";
import service from "../services/register.js";
import bCrypt from "bcrypt";

//#region passportConfig
passport.use(
  "register",
  new localStrategy(
    {
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      let usuarios = await service.listarUsers();
      const usuario = usuarios.find((usuario) => usuario.email == username);
      if (usuario) {
        console.log("el usuario ya existe");
        return done(null, false);
      }

      const newUser = {
        email: username,
        password: createHash(password),
      };

      await service.guardarUser(newUser);
      console.log("se creo el usuario");
      return done(null, newUser);
    }
  )
);

passport.use(
  "login",
  new localStrategy(async (email, password, done) => {
    let usuarios = await service.listarUsers();
    const usuario = usuarios.find((usuario) => usuario.email == email);
    if (!usuario) {
      console.log("no existe el usuario");
      return done(null, false);
    }
    if (!validPassword(usuario, password)) {
      console.log("contrasena invalida");
      return done(null, false);
    }

    return done(null, usuario);
  })
);

//funciones serialize y deserialize
passport.serializeUser((user, done) => {
  done(null, user.email);
});

passport.deserializeUser(async (email, done) => {
  let usuarios = await service.listarUsers();
  const usuario = usuarios.find((usuario) => usuario.email == email);
  done(null, usuario);
});

//#endregion passportConfig

//funciones de bCrypt
function createHash(password) {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
}

function validPassword(user, password) {
  return bCrypt.compareSync(password, user.password);
}

const renderRegister = async (req, res) => {
  res.render("register");
};

const postRegister = passport.authenticate("register", {
  failureRedirect: "/user/failregister",
  successRedirect: "/user/login",
});

const renderLogin = async (req, res) => {
  res.render("login");
};

const postLogin = passport.authenticate("login", {
  failureRedirect: "/user/loginerror",
  successRedirect: "/",
});

const renderLoginError = async (req, res) => {
  res.render("faillogin");
};

const renderRegisterError = async (req, res) => {
  res.render("failregister");
};

const renderLogout = async (req, res) => {
  let usuarioName = "";
  if (req.user) {
    usuarioName = req.user.email;
  }

  req.session.destroy((err) => {
    if (err) {
      res.send({ error: "Algo occurio al borrar la session", body: err });
    } else {
      res.render("logout", {
        nombreUsuario: usuarioName,
      });
    }
  });
};

export default {
  renderLogin,
  postLogin,
  renderRegister,
  postRegister,
  renderLoginError,
  renderRegisterError,
  renderLogout,
};
