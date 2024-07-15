const express = require('express');
const bodyParser = require('body-parser'); // Correction du nom de la variable
const cookieParser = require('cookie-parser');
const cors = require('cors');



const userRoutes = require('./routes/user.routes');
const clientRoute = require('./routes/client.routes');
const produitRoutes = require('./routes/produit.routes');
const commandeRoutes = require('./routes/commande.routes');
const categorieRoutes = require('./routes/categorie.routes');

require('dotenv').config({ path: './config/.env' });
require('./config/db');
const { checkUser, requireAuth } = require('./middleware/auth.middleware');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:3000', // Remplacer par l'origine de votre front-end
    credentials: true
}));

//jwt
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
    res.status(200).send(res.locals.user._id)
});


// Routes
app.use('/api/user', userRoutes);
app.use('/api/client', clientRoute);
app.use('/api/produits', produitRoutes);
app.use('/api/commande', commandeRoutes);
app.use('/api/categorie', categorieRoutes);

// Server
app.listen(5000, () =>
    console.log(`Server started: 5000`));