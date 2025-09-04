
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class RecipesModel {
    // Buscar todas as receitas
    async findAll(filtro = {}) {
        return await prisma.receitas.findMany({ where: filtro });
    }

    // Buscar receita por ID
    async findById(id) {
        return await prisma.receitas.findUnique({ where: { id } });
    }

    // Criar nova receita
    async create(data) {
        return await prisma.receitas.create({ data });
    }

    // Atualizar receita
    async update(id, data) {
        return await prisma.receitas.update({ where: { id }, data });
    }

    // Deletar receita
    async delete(id) {
        return await prisma.receitas.delete({ where: { id } });
    }
}

export default new RecipesModel();