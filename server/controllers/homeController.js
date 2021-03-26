const express = require("express");
const { getConcursos, getConcurso, getCargo, getCandidatos } = require("../database/index.js");

const router = express.Router();

router.get("/concursos", async (req, res) => {
  var concursos = await getConcursos();
  res.send(concursos);
});

router.get("/concursos/:concurso_id", async (req, res) => {
  var concursoId = req.params.concurso_id
  var concurso = await getConcurso(concursoId);
  res.send(concurso);
});

router.get("/cargos/:cargo_id", async (req, res) => {  
  var cargoId = req.params.cargo_id
  var cargo = await getCargo(cargoId);
  res.send(cargo);
});

router.get("/candidatos/:nome", async (req, res) => {
  var nome =  req.params.nome
  var candidatos = await getCandidatos(nome);
  res.send(candidatos);
});

module.exports = (app) => app.use("/", router);
