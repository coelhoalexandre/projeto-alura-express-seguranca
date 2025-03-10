const { Router } = require("express");
const UsuarioController = require("../controllers/usuarioController");
const autenticado = require("../middlewares/autenticado");

const router = Router();

router.use(autenticado);

router
  .post("/usuarios", UsuarioController.cadastrar)
  .get("/usuarios", UsuarioController.buscarTodosUsuarios)
  .get("/usuarios/id/:id", UsuarioController.buscarUsuarioPorId)
  .put("/usuarios/id/:id", UsuarioController.editarUsuario)
  .delete("/usuarios/id/:id", UsuarioController.deletarUsuarioPorId);

module.exports = router;
