const mongoose = require('mongoose');

const CommandeSchema = new mongoose.Schema({
    // Nom de la commande
    nomproduit: {
        type: String,
        required: true,
    },
    // Quantité commandée
    quantite: {
        type: Number,
        required: true,
    },
    // Date de livraison de la commande
    dateLivraison: {
        type: Date,
        required: true,
    },
    // État de la commande (livré ou non livré)
    etat: {
        type: String,
        enum: ['livré', 'non livré'],
        default: 'non livré', // Par défaut, la commande est définie comme "non livré"
    }
});

// Exporter le modèle Commande
module.exports = mongoose.model('Commande', CommandeSchema);
