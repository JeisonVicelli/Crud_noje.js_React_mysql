const cors = require("cors");
const useRouter = require("./routers/rotas");
const express = require("express");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", useRouter);

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso na porta ${PORT}`);
});
