//Importando para uploads de arquivos
const multer  = require("multer");
// Importa o path/caminho para manipulação de camiho do arquivo.
const  path =  require("path");
//Configura o armazenamento dos arquivos com Multer.
const storage = multer.diskStorage({
    //Função para definir o diretório dos arquivos(localização)
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    //Função para definir o nome do arquivo
    filename: function(req, file, cb) {
        //Define o nome do arquivo com a data e Extensão original do arquivo
        cb(null, Date.now() + path.extname(file.originalname)); 
    },
});

// Configurando o middleware de upload
const uploads =  multer({storage});

// Exporta para utilizar em outros arquivos
module.exports = upload;
