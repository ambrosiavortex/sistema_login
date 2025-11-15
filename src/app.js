import "dotenv/config.js";

import { adicionarRotas } from "./routes.js";
import express from "express";

const api = express();
api.use(express.json());

adicionarRotas(api);

const PORTA = process.env.PORTA;

api.listen(PORTA, () => console.log(`Servidor rodando na porta ${PORTA}!`));
