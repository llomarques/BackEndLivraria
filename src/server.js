// ============================
//  Dependências
// ============================
import express from "express";

import bodyParser from "body-parser";
import cors from "cors";
import usuarioRoutes from "./routes/usuario.route.js";

// ============================
//  Configuração do servidor
// ============================
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("API da Livraria funcionando!");   
});

app.use("/usuarios", usuarioRoutes);


// ============================
//  Inicia o servidor
// ============================
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
