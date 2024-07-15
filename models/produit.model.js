const mongoose = require('mongoose');

const ProduitSchema = new mongoose.Schema({
    codeArticle: {
        type: String,
        required: true
    },
    nomProduit: {
        type: String,
        required: true
    },
    prixUnitaire: {
        type: Number,
        required: true
    },
    quantite: {
        type: Number,
        required: true
    },
    image: {
        type: String
    },
    categorie: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categorie' }]
});

// Exporter le modèle Produit
module.exports = mongoose.model('Produit', ProduitSchema);
