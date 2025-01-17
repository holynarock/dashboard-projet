const mongoose = require('mongoose');
const validator = require('validator');
const { isEmail } = require ('validator');
const bcrypt = require ('bcrypt');

const userSchema = new mongoose.Schema(
    {
        pseudo: {
            type: String,
            required: true, 
            minLength: 3,
            maxLength: 55,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            validate: [isEmail],
            lowercase: true,
            unique: true, 
            trim: true,
        },
        password: {
            type: String,
            required: true,
            max: 1024,
            minlength: 6
        },
        picture: {
            type: String,
            default: "./uploads/profil/random-user.png"
        }
    },
    {
        timestamps: true,
    }
);

// Méthode pour vérifier les informations d'identification de l'utilisateur lors de la connexion
userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error('Incorrect password');
    }
    throw Error('Incorrect email');
};

userSchema.pre("save", async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password , salt);
    next();
});


const UserModel = mongoose.model('user', userSchema);
module.exports = UserModel;