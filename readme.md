# 👵🥘 Receitinhas da Vovó - Backend

Um sistema backend para gerenciamento e compartilhamento de receitas tradicionais, preservando os sabores e memórias das cozinhas das nossas avós.

## 📋 Sobre o Projeto

O **Receitinhas da Vovó** é uma API REST desenvolvida para catalogar, organizar e compartilhar receitas familiares tradicionais. O projeto visa preservar o patrimônio culinário familiar, permitindo que usuários busquem e compartilhem receitas passadas de geração em geração.

### ✨ Funcionalidades

- 📝 GET de receitas

- 🔍 Busca avançada por categoria


### 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **Prisma** - Banco de dados NoSQL
- **Cors** - Controle de acesso
- **Dotenv** - Variáveis de ambiente

## 🚀 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**
- **Git**

## ⚙️ Instalação

### 1. Clone o repositório
```bash
git clone https://github.com/Vinirocha388/Back-End-RdV.git
cd Back-End-RdV
```

### 2. Instale as dependências
```bash
npm install
# ou
yarn install
```

### 3. Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto:
```env
# Configurações do servidor
PORT=3000

# JWT
JWT_SECRET=seu_jwt_secret_muito_seguro

### 4. Configure o banco de dados

**Para sqlite local:**
DATABASE_URL="file:./nome do arquivo"

### 5. Atualizar prisma

```bash
npx prisma generate
# ou
npx prisma migrate dev
```

### 6. Inicie o servidor

**Modo desenvolvimento:**
```bash
npm run dev
# ou
yarn dev
```


O servidor estará rodando em `http://localhost:4000`

## 📚 Documentação da API



### Exemplo de Uso

Método GET `http://localhost:4000/recipes


#### Criar uma nova receita

Método **POST** `http://localhost:4000/recipes`

Exemplo de corpo da requisição:
```json
{
  "titulo": "Salada de Frutas",
  "descricao": "Salada refrescante com frutas variadas",
  "ingredientes": "Maçã, banana, laranja, uva",
  "modoPreparo": "Corte as frutas e misture tudo",
  "categoria": "Saudável",
  "imagem": "https://images.unsplash.com/photo-1464306076886-deb9e8f1b7a5",
  "usuarioId": 2
}
```

---

#### Atualizar uma receita existente

Método **PUT** `http://localhost:4000/recipes/:id`

Exemplo de corpo da requisição:
```json
{
"titulo": "Bolo de Fubá",
"descricao": "Bolo tradicional feito com fubá, perfeito para o café da tarde",
"ingredientes": "Fubá, ovos, leite, açúcar, fermento",
"modoPreparo": "Misture todos os ingredientes e asse em forno médio por 40   minutos",
"categoria": "Doce",
"imagem": "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
}
```

---

#### Deletar uma receita

Método **DELETE** `http://localhost:4000/recipes/:id`


## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request



## 👨‍💻 Autor

Desenvolvido por [Vinícius Rocha](https://github.com/Vinirocha388)

## 🆘 Suporte

Se você encontrar algum problema ou tiver dúvidas:

- Abra uma [issue](https://github.com/Vinirocha388/Back-End-RdV/issues)
- Entre em contato: vinicius.a.rocha8@aluno.senai.br

---

⭐ Se este projeto te ajudou, não esqueça de dar uma estrela!