
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class RecipesModel {

    async findAll() {
        return await prisma.receitas.findMany({});
    }


    async findById(id) {
        return await prisma.receitas.findUnique({ where: { id } });
    }


    async create(data) {
        return await prisma.receitas.create({ data });
    }

    async update(id, data) {
        return await prisma.receitas.update({ where: { id }, data });
    }


    async delete(id) {
        return await prisma.receitas.delete({ where: { id } });
    }
}

export default new RecipesModel();