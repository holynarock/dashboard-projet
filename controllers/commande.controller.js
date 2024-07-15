const CommandeModel = require('../models/commande.model');

// Récupérer toutes les commandes
exports.getAllCommandes = async (req, res) => {
    try {
        const commandes = await CommandeModel.find();
        res.status(200).json(commandes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Créer une nouvelle commande
exports.createCommande = async (req, res) => {
    try {
        const { nomproduit, quantite, dateLivraison, etat } = req.body;
        const nouvelleCommande = new CommandeModel({ nomproduit, quantite, dateLivraison, etat });
        const commande = await nouvelleCommande.save();
        res.status(201).json(commande);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Mettre à jour une commande existante
exports.updateCommande = async (req, res) => {
    try {
        const { nomproduit, quantite, dateLivraison, etat } = req.body;
        const commande = await CommandeModel.findById(req.params.id);
        if (!commande) {
            return res.status(404).json({ message: "Commande introuvable." });
        }
        commande.nomproduit = nomproduit;
        commande.quantite = quantite;
        commande.dateLivraison = dateLivraison;
        commande.etat = etat;
        const updatedCommande = await commande.save();
        res.status(200).json(updatedCommande);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Supprimer une commande existante
exports.deleteCommande = async (req, res) => {
    try {
        const commande = await CommandeModel.findById(req.params.id);
        if (!commande) {
            return res.status(404).json({ message: "Commande introuvable." });
        }
        await commande.remove();
        res.status(200).json({ message: "Commande supprimée avec succès." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
