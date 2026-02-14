const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));

app.use(bodyParser.json());

// Conexão com MongoDB (usando o nome do container "mongo")
mongoose.connect("mongodb://admin:password@mongo:27017/cadastro?authSource=admin")
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.log(err));

// Modelo
const Usuario = mongoose.model("Usuario", {
  nome: String,
  email: String
});

// Rota para cadastrar
app.post("/usuarios", async (req, res) => {
  const usuario = new Usuario(req.body);
  await usuario.save();
  res.json(usuario);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Rota para deletar usuário
app.delete("/usuarios/:id", async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndDelete(req.params.id);

    if (!usuario) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    res.json({ mensagem: "Usuário deletado com sucesso" });
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

// Rota para listar
app.get("/usuarios", async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

