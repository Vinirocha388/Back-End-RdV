import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {

  await prisma.receitas.deleteMany();
  await prisma.usuario.deleteMany();
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
      categoria: 'Doce',
      imagem: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
      usuarioId: usuario1.id,
    },
  });

  await prisma.receitas.create({
    data: {
      titulo: 'Salada de Frutas',
      descricao: 'Salada refrescante com frutas variadas',
      ingredientes: 'Maçã, banana, laranja, uva',
      modoPreparo: 'Corte as frutas e misture tudo',
      categoria: 'Saudável',
      imagem: 'https://images.unsplash.com/photo-1464306076886-deb9e8f1b7a5',
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