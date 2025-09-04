import prisma from '../../prisma/client.js';

class RecordModel {
    // Obter todos os recordes
    async findAll() {
      const records = await prisma.record.findMany();
  
      return {
        total: records.length,
        records,
      };
    }
  
    // Criar um novo record
    async create(data) {
      const record = await prisma.record.create({
        data,
      });
  
      return record;
    }
  }
  
  export default new RecordModel();