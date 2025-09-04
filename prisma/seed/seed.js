import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Cria usuários
  const usuario1 = await prisma.usuario.create({
    data: {
      nome: 'João Silva',
      email: 'joao@email.com',
      senha: '123456',
    },
  });

  const usuario2 = await prisma.usuario.create({
    data: {
      nome: 'Maria Souza',
      email: 'maria@email.com',
      senha: 'abcdef',
    },
  });

  // Cria receitas
  await prisma.receitas.create({
    data: {
      titulo: 'Bolo de Chocolate',
      descricao: 'Bolo fofinho com cobertura de chocolate',
      ingredientes: 'Farinha, ovos, chocolate, açúcar',
      modoPreparo: 'Misture tudo e asse por 40 minutos',
      usuarioId: usuario1.id,
    },
  });

  await prisma.receitas.create({
    data: {
      titulo: 'Salada de Frutas',
      descricao: 'Salada refrescante com frutas variadas',
      ingredientes: 'Maçã, banana, laranja, uva',
      modoPreparo: 'Corte as frutas e misture tudo',
      usuarioId: usuario2.id,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
  export {};