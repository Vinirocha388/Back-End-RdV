import prisma from '../../prisma/client.js';

class UserModel {
async findAll() {
    const users = await prisma.user.findMany();

    return users;
  }

async findById(id) {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id)
      }
    });

    return user;
  }

  //obter um usuario pelo email
    async findByEmail(email) {
        const user = await prisma.user.findUnique({
        where: {
            email: email
        }
        });
    
        return user;
    }

    async findByNickname(nickname) {
      const user = await prisma.user.findUnique({
      where: {
          nickname,
      }
      });
  
      return user;
  }

  async create(data) {
    const user = await prisma.user.create({
      data,
    });

    return user;
  }

    async update(id, data) {
        const user = await prisma.user.update({
        where: {
            id: Number(id)
        },
        data,
        });
    
        return user;
    }

    async delete(id) {
        const user = await prisma.user.delete({
        where: {
            id: Number(id)
        },
        });
    
        return user;
    }
}

export default new UserModel;