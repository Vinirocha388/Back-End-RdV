import express from "express";

// Importar todas as rotas
import authRouter from "./auth.routes.js";
import authMiddleware from "../middleware/authMiddleware.js";
import recipesRouter from "./recipes.routes.js";

const router = express.Router();

// Rotas públicas
router.use("/auth", authRouter);
router.use("/recipes", recipesRouter);

// Rotas protegidas
// Exemplo: router.use('/admin', authMiddleware, adminRouter); // Adicione rotas protegidas aqui

export default router;