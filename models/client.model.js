const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    
    // Nom du client
    nom: {
        type: String,
        required: true,
    },
    // Prénom du client
    prenom: {
        type: String,
        required: true,
    },
    // Adresse du client
    adresse: {
        type: String,
        required: true,
    },
    // Adresse email du client
    email: {
        type: String,
        required: true,
        unique: true, // Assure que chaque email est unique
    },
    // Numéro de téléphone du client
    telephone: {
        type: String,
        required: true,
    },
    // Statut du client (nouveau, ancien, fidèle)
    statut: {
        type: String,
        enum: ['nouveau client', 'ancien client', 'client fidèle'],
        default: 'nouveau client', // Par défaut, un client est considéré comme nouveau
    }
});

// Exporter le modèle Client
module.exports = mongoose.model('Client', ClientSchema);
