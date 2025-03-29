const Picture = require("../models/Picture")

const fs = require("fs")

// Função para criar uma nova imagem no banco de dados
exports.create = async (req, res) => {
    try {
        //Pega a informação do nome do arquivo enviado pela requisição
        const {name} = req.body
        //Obtem o arquivo da req.()
        const file = req.file
        //cria uma nova instancia do modelo Picture com o nome da img e o caminho
        const picture = new Picture({
            name,
            src: file.path,
        });
        //Envia salva a imagem no DB
        await picture.save();
        //Retorna uma mensagem para saber se salvou, em formato de json
        res.json({picture, msg: "Imagem salva com sucesso!"});
    } catch(err) {
        //Caso ocorra algum erro, retorna mensagem de erro!
        res.status(500).json({ message: "Erro ao salvar!"});
    }
}
// Função para buscar as imagens
exports.findAll = async (req, re) => {
    try{
        // Busca todas as imagens armazenadas no DB.
        const pictures = await Picture.find();
        //Retorna todas as imgs encontradas no formato json
        res.json(pictures);
    } catch (error) {
        //Caso haja erro durante a busca, retorna mensagem ao usuário
        res.status(500).json({Menssage: "Erro ao buscar!"});
    }
}
