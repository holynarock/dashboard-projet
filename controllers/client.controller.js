const clientModel = require('../models/client.model');
const ClientModel = require('../models/client.model');
const UserModel = require('../models/user.model');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;


//récupère tous les clients 
module.exports.readClient = (req, res) => {
    clientModel.find()
    .then(docs => res.send(docs))
    .catch(err => console.log('Error to get data :' + err));
     
};

//crée un nouveau client
module.exports.createClient = async (req, res) => {
    const newClient = new ClientModel({
        id: req.body.id,
        nom: req.body.nom,
        prenom: req.body.prenom,
        adresse: req.body.adresse,
        email: req.body.email,
        telephone: req.body.telephone,
        statut: req.body.statut
    });

    try {
        const client = await newClient.save();
        return res.status(201).json(client);
    } catch (err) {
        return res.status(400).send(err);
    }
};

//mise a jour du client
module.exports.updateClient = async (req, res) => {
    const clientId = req.params.id;
    const updates = req.body;

    try {
        const updatedClient = await ClientModel.findByIdAndUpdate(clientId, updates, { new: true });
        if (!updatedClient) {
            return res.status(404).send("Client not found.");
        }
        return res.status(200).json(updatedClient);
    } catch (error) {
        console.error('Error updating client:', error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

//suppression du client
module.exports.deleteClient = async (req, res) => {
    const clientId = req.params.id;

    try {
        const deletedClient = await ClientModel.findByIdAndDelete(clientId);
        if (!deletedClient) {
            return res.status(404).send("Client not found.");
        }
        return res.status(200).json({ message: "Client supprimé ." });
    } catch (error) {
        console.error('Error deleting client:', error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};