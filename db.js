/* Importa o moongose para interação com o banco de dados */
const mongoose = require("mongoose")
/* Carrega variáves do ambiente do arquivo .ENV */
require("dotenv").config();
/* Configura o moongose para permitir consultas restritas */
mongoose.set("strictQuery", true);
/* Função para conectar no banco de dados */
async function main(){
    await mongoose.connect(/* Link para conectar */);
    /* Exibe mensagem que realizou a conexão */
    console.log("Conectou ao banco de dados!");
}
/* Caso for erro a resposta, mostrar o erro que deu */
main().catch((err) => console.log(err));
/* Exportar a função */
module.exports = main;