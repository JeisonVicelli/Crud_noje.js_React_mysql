const db = require("../config/dbConfig");

const getUsers = (_, res) => {
  const q = "SELECT * FROM usuario";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

const addUser = (req, res) => {
  const q =
    "INSERT INTO usuario (`nome`,`email`,`fone`,`datanascimento`) VALUES (?);";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.datanascimento,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Usuário criado com sucesso.");
  });
};

const upDateUser = (req, res) => {
  const q =
    "UPDATE usuario set `nome` = ?,`email` = ?,`fone` = ?,`datanascimento` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.datanascimento,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

const deleteUser = (req, res) => {
  const q = "DELETE FROM usuario WHERE `id` = ? ";
  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Usuário excluído com sucesso.");
  });
};

module.exports = {
  getUsers,
  addUser,
  upDateUser,
  deleteUser,
};
