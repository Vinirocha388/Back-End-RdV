import express from "express";
import cors from "cors";

import router from "./routes/index.routes.js";

const app = express();
app.use(cors());
const port = process.env.PORT || 4001;
app.use(express.json());
app.use("/", router);
app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});