import * as repo from "../repositories/loginRepositories.js";

import { generateToken } from "../utils/jwt.js";
import { getAuthentication } from "../utils/jwt.js";

const autenticador = getAuthentication();

import { Router } from "express";
const endpoints = Router();

endpoints.post("/cadastro", async (req, res) => {
  let novoCadastro = req.body;

  let email = req.body.email;

  try {
    const existente = await repo.buscarUsuarioPorEmail(email);

    if (existente) {
      return res.status(400).send({ error: "Usuário já cadastrado" });
    }

    const usuario = await repo.cadastrarUsuario(novoCadastro);
    res.send("Usuário cadastrado com sucesso!");
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Erro ao cadastrar usuário" });
  }
});

endpoints.post("/login", async (req, res) => {
  let email = req.body.email;
  let senha = req.body.senha;

  let credenciais = await repo.buscarUsuario(email, senha);

  if (!credenciais) {
    res.status(401).send({ error: "Credenciais inválidas" });
    return;
  } else {
    let token = generateToken(credenciais);
    res.send({
      token: token,
      usuario: credenciais.username,
    });
  }
});

endpoints.get("/listarUsuarios", autenticador, async (req, res) => {
    let registros = await repo.listarUsuarios();

    if(registros.length === 0) {
        res.status(404).send({ error: "Nenhum usuário encontrado" });
    } else{
        res.send(registros);
    }
});

endpoints.get("/contarUsuarios", autenticador,  async (req, res) => {
    let registros = await repo.contarUsuarios();

    if(registros.length === 0) {
        res.status(404).send({ error: "Nenhum usuário encontrado" });
    } else{
        res.send(registros);
    }
});

export default endpoints;
