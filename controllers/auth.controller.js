const UserModel = require('../models/user.model');
const { signUpErrors } = require('../utils/errors.utils');
const { signInErrors } = require('../utils/errors.utils');

const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60 * 1000;
const createToken = (id) => {
	return jwt.sign({id}, process.env.TOKEN_SECRET, {
		expiresIn: maxAge
	})
}

module.exports.signUp = async (req, res) => {
    console.log(req.body);
    const {
        pseudo,
        email,
        password
    } = req.body;

    try {
        const user = await UserModel.create({
            pseudo,
            email,
            password
        });
        res.status(201).json({ user: user._id });
    } catch (err) {
        const errors = signUpErrors(err); // Utilisation de la fonction signUpErrors pour formater les erreurs
        res.status(200).send({ errors });
    }
};


module.exports.signIn = async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;

    try {
        const user = await UserModel.login(email, password);
        if (!user) {
            return res.status(401).json({ err: "Invalid email or password." });
        }
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge });
        res.status(200).json({ user: user._id });
    } catch (err) {
		console.error('Error signing in:', err);
		const errors = signInErrors(err);
		res.status(401).json({ errors });
	}	
}

module.exports.logout = async (req, res) => {
	res.clearCookie('jwt');
    res.status(200).json({ message: " Utilisateur deconnecter. " });

}
