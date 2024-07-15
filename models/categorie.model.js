const mongoose = require('mongoose');

const CategorieSchema = new mongoose.Schema({
    // Nom de la catégorie
    nomcategorie: {
        type: String,
        required: true
    },
    // Description de la catégorie
    description: {
        type: String,
        required: true
    },
    // Chemin de l'image de la catégorie
    image: {
        type: String,
        text: String
    }
});

// Exporter le modèle Categorie
module.exports = mongoose.model('Categorie', CategorieSchema);
