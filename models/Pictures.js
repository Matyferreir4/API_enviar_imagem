//Esse script pega um schema do mongoose e manda uma tabela chamada Picture usando name e src.


const mongoose = require("mongoose");

const  Schema =  mongoose.Schema;

const PictureSchema = new Schema({
    name: { type: String, required: true},
    src: {type: String, required: true},
});

module.exports = mongoose.model("Picture", PictureSchema);