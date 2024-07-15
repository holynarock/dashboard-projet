
const router = require('express').Router();
const UserModel = require("../models/user.model");

const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');
const uploadController = require('../controllers/upload.controller');
const multer = require('multer');
const upload = multer();

//auth
router.post("/register", authController.signUp); // s'inscrire
router.post('/login', authController.signIn); //se connecter
router.get('/logout', authController.logout);  // se déconnecter

//user db
router.get('/', userController.getAllUsers );
router.get('/:id', userController.userInfo );
router.delete('/:id', userController.deleteUser);

//upload
router.post('/upload', upload.single('file'), uploadController.uploadPost)


module.exports = router;







//const express = require('express');
//const router = express.Router();
//const UserModel = require('../models/user.model'); // Importer le modèle d'utilisateur

// Route pour créer un nouvel utilisateur
//router.post('/register', async (req, res) => {
  //  try {
        // Extraire les données du corps de la requête
    //    const { pseudo, email, password } = req.body;
        
        // Créer un nouvel utilisateur en utilisant le modèle d'utilisateur
      //  const newUser = new UserModel({ pseudo, email, password });

        // Sauvegarder le nouvel utilisateur dans la base de données
 //       const savedUser = await newUser.save();

        // Envoyer une réponse avec le nouvel utilisateur créé
   //     res.status(201).json(savedUser);
 //   } catch (error) {
        // Gérer les erreurs
   //     res.status(500).json({ error: error.message });
//    }
// });

// Exporter le routeur
// module.exports = router;
  