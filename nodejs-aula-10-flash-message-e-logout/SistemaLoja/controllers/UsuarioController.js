// CONTROLLER DE USUÁRIO
import express from "express";
const router = express.Router();

// ROTA DE LOGIN
app.get("/login", (req, res) => {
  res.render("login", {
    loggedOut: true,
  });
});

//ROTA DE LOGOUT
router.get("/logout", (req, res) => {
  req.session.usuario = undefined
  res.redirect("/")
});

// ROTA DO FORMULÁRIO DE CADASTRO DO USUÁRIO
router.get("/cadastro")
