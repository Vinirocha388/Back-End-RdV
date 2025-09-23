
import RecipesModel from '../models/recipesModel.js';

// Listar todas as receitas
export const getAllRecipes = async (req, res) => {
    try {
        const receitas = await RecipesModel.findAll();
        res.json(receitas);
    } catch (error) {
        console.log(error);
        
        res.status(500).json({ error: 'Erro ao buscar receitas' });
    }
};

// Buscar receita por ID
export const getRecipeById = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const receita = await RecipesModel.findById(id);
        if (!receita) return res.status(404).json({ error: 'Receita não encontrada' });
        res.json(receita);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar receita' });
    }
};



// Criar nova receita
export const createRecipe = async (req, res) => {
    try {
        const { imagem, titulo, descricao, ingredientes, modoPreparo, categoria, usuarioId } = req.body;
        const novaReceita = await RecipesModel.create({ imagem, titulo, descricao, ingredientes, modoPreparo, categoria, usuarioId });
        res.status(201).json(novaReceita);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar receita' });
    }
};

// Atualizar receita
export const updateRecipe = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const { titulo, descricao, ingredientes, modoPreparo, categoria } = req.body;
        const receitaAtualizada = await RecipesModel.update(id, { titulo, descricao, ingredientes, modoPreparo, categoria });
        res.json(receitaAtualizada);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar receita' });
    }
};

// Deletar receita
export const deleteRecipe = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        await RecipesModel.delete(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar receita' });
    }
};


