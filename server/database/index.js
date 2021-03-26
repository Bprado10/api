const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

async function getConcursos() {
  const db = await sqlite.open({
    filename: "./database/db_classificacao.db",
    driver: sqlite3.Database,
  });

  sql = `SELECT id, nome, data FROM concursos`
  const rows = await db.all(sql);

  await db.close();

  return rows;
}

async function getConcurso(id) {
  const db = await sqlite.open({
    filename: "./database/db_classificacao.db",
    driver: sqlite3.Database,
  });

  sql = `SELECT id, nome FROM cargos WHERE concurso_id = ?`
  const rows = await db.all(sql, [id]);

  await db.close();

  return rows;
}

async function getCargo(cargoId) {
  const db = await sqlite.open({
    filename: "./database/db_classificacao.db",
    driver: sqlite3.Database,
  });

  sql = `SELECT id, nome, notafinal, notaredacao, notatotal, classificacao
          FROM candidatos WHERE cargo_id = ?`
  const rows = await db.all(sql, [cargoId]);

  await db.close();

  return rows;
}


async function getCandidatos(nome) {
  const db = await sqlite.open({
    filename: "./database/db_classificacao.db",
    driver: sqlite3.Database,
  });

  sql = `SELECT concursos.id AS concurso_id,                             
                concursos.nome AS concurso_nome,
                concursos.data AS concurso_data,
                cargos.id AS cargo_id, 
                cargos.nome AS cargo_nome,
                candidatos.id AS candidato_id,
                candidatos.nome AS candidato_nome,
                candidatos.matricula AS candidato_matricula,
                candidatos.notafinal AS candidato_nota_final,
                candidatos.classificacao AS candidato_classificacao
              FROM cargos
                INNER JOIN concursos ON cargos.concurso_id = concursos.id
                INNER JOIN candidatos ON cargos.id = candidatos.cargo_id
              WHERE candidatos.nome like ?`

  const rows = await db.all(sql, ['%'+ nome +'%']);           

  await db.close();

  return rows;
}


module.exports = {
  getConcursos,
  getConcurso,
  getCargo,
  getCandidatos
};
