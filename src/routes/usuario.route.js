import express from "express";
import {
    listarUsuario,
    criarUsuario,
    obterUsuario,
    atualizarUsuario,
    deletarUsuario
} from "../controller/usuario.controller.js";
const router = express.Router();

router.get("/", listarUsuario);
router.post("/", criarUsuario);
router.get("/:id", obterUsuario);
router.put("/:id", atualizarUsuario);
router.delete("/:id", deletarUsuario);

export default router;