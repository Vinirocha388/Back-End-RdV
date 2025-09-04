/*
  Warnings:

  - Added the required column `imagem` to the `Receitas` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Receitas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "imagem" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "ingredientes" TEXT NOT NULL,
    "modoPreparo" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "dataCriacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuarioId" INTEGER NOT NULL,
    CONSTRAINT "Receitas_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Receitas" ("categoria", "dataCriacao", "descricao", "id", "ingredientes", "modoPreparo", "titulo", "usuarioId") SELECT "categoria", "dataCriacao", "descricao", "id", "ingredientes", "modoPreparo", "titulo", "usuarioId" FROM "Receitas";
DROP TABLE "Receitas";
ALTER TABLE "new_Receitas" RENAME TO "Receitas";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
