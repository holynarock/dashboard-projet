const Produit = require('../models/produit.model');
const { uploadErrors } = require("../utils/errors.utils");
const fs = require ('fs');
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);


// Récupérer tous les produits
exports.getAllProduits = async (req, res) => {
    try {
        const produits = await Produit.find();
        res.status(200).json(produits);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Créer un nouveau produit
exports.createProduit = async (req, res) => {
    let fileName;

    if(req.file !== null){
        try {
            if ( 
                req.file.detectedMimeType !== "image/jpg" &&
                req.file.detectedMimeType !== "image/png" &&
                req.file.detectedMimeType !== "image/jpeg" 
            )
                throw Error("Invalid file");
            
            if (req.file.size > 500000) throw Error("max size");
        }   catch (err) {
            const errors = uploadErrors(err);
            return res.status(201).json({ errors });
        }
        fileName = req.body.id + '.jpg' + '.jpg';

        await pipeline(
            req.file.stream,
            fs.createWriteStream(
                `${__dirname}/../admin/public/uploads/produit/${fileName}`
            )
        )
    }



    const { codeArticle, nomProduit, prixUnitaire, quantite, image } = req.body;
    const nouveauProduit = new Produit({ 
        codeArticle, 
        nomProduit, 
        prixUnitaire, 
        quantite, 
        image: req.file !== null ? "./uploads/produits" +fileName : "",
    });
    try {
        const produit = await nouveauProduit.save();
        res.status(201).json(produit);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Mettre à jour un produit
exports.updateProduit = async (req, res) => {
    const { id } = req.params;
    try {
        const produit = await Produit.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(produit);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Supprimer un produit
exports.deleteProduit = async (req, res) => {
    const { id } = req.params;
    try {
        await Produit.findByIdAndDelete(id);
        res.status(204).send();
    } catch (err) {
        res.status(400).send(err);
    }
};
