import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class AuthController {
  async getAllUsers(req, res) {
    try {
      const users = await UserModel.findAll();
      res.json(users);
    } catch (error) {
      console.error("Erro ao listar usuários:", error);
      res.status(500).json({ error: "Erro ao listar usuários" });
    }
  }

  //Registrar novo usuário
  async register(req, res) {
    try {
      const { name, nickname, email, password } = req.body;
      //Validação básica
      if (!name || !nickname || !email || !password) {
        return res
          .status(400)
          .json({ error: "Todos os campos são obrigatórios!" });
      }

      //Verifica se o usuário já existe
      const userEmailExists = await userModel.findByEmail(email);
      if (userEmailExists) {
        return res.status(400).json({ error: "Email já em uso!" });
      }

      //Verifica se o nickname já existe
       const userNicknameExists = await userModel.findByNickname(nickname);
       if (userNicknameExists) {
         return res.status(400).json({ error: "Nickname já em uso!" });
       }

      //HASH da senha
      const hashedPassword = await bcrypt.hash(password, 10);

      //Cria o objeto usuário
      const data = {
        name,
        nickname,
        email,
        password: hashedPassword,
      };

      //Cria o usuário
      const newUser = await userModel.create(data);
      res.status(201).json({ message: "Usuário registrado com sucesso", user: newUser });
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
      res.status(500).json({ error: "Erro ao registrar usuário" });
    }
  }

  //Login do usuário
  async login(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res
          .status(400)
          .json({ error: "Email e senha são obrigatórios" });
      }

      //Verifica se o usuário já existe
      const userExists = await userModel.findByEmail(email);
      if (!userExists) {
        return res.status(401).json({ error: "Credenciais inválidas" });
      }

      //Verifica a senha
      const isPasswordValid = await bcrypt.compare(
        password,
        userExists.password
      );
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Credenciais inválidas" });
      }

      //Gera o token JWT
      const token = jwt.sign(
        { id: userExists.id, name: userExists.name,nickname: userExists.nickname, email: userExists.email },
        process.env.JWT_SECRET,
        { expiresIn: "1d" } // O token expira em 1 dia
      );

      return res.json({
        message: "Login realizado com sucesso",
        token,
        userExists,
      });
    } catch (error) {
        console.error("Erro ao fazer login:", error);
        res.status(500).json({ error: "Erro ao fazer login" });
    }
  }
}

export default new AuthController();
