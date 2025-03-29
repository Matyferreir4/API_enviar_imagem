/* Importa o express para manipular as rotas */
const express = require("express");
/* Criando um aruivo de rotas pelo express */
const router = express.Router();
/* Importando o middleware de Upload (multer) */
const upload = require("../config/multer");
/* Controlador das imagens, funções logicas(GET, POST...) */
const PictureController = require("../controllers/PictureControllers")
/* Definindo a rota POST(Upload da IMG e Aramazenamento no DB) */
router.post("/", upload.sigle("file"), PictureController.create);
/* Definindo a rota GET (Trazer todas as imagens do DB) */
router.get("/", PictureController.findAll);
/* Exportando para utilizar em outro arquivo n */
module.exports = router