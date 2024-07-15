const CategorieModel = require('../models/categorie.model');

// Récupérer toutes les catégories
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await CategorieModel.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Créer une nouvelle catégorie
exports.createCategorie = async (req, res) => {
    try {
        const { nomcategorie, description, image } = req.body;
        const nouvelleCategorie = new CategorieModel({ nomcategorie, description, image });
        const categorie = await nouvelleCategorie.save();
        res.status(201).json(categorie);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Mettre à jour une catégorie existante
exports.updateCategorie = async (req, res) => {
    try {
        const { nomcategorie, description, image } = req.body;
        const categorie = await CategorieModel.findById(req.params.id);
        if (!categorie) {
            return res.status(404).json({ message: "Catégorie introuvable." });
        }
        categorie.nomcategorie = nomcategorie;
        categorie.description = description;
        categorie.image = image;
        const updatedCategorie = await categorie.save();
        res.status(200).json(updatedCategorie);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Supprimer une catégorie existante
exports.deleteCategorie = async (req, res) => {
    try {
        const categorie = await CategorieModel.findById(req.params.id);
        if (!categorie) {
            return res.status(404).json({ message: "Catégorie introuvable." });
        }
        await categorie.remove();
        res.status(200).json({ message: "Catégorie supprimée avec succès." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
