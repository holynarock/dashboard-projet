module.exports.signUpErrors = (err) => {
    let errors = { pseudo: '', email: '', password: '' };

    if (err.message.includes('pseudo'))
        errors.pseudo = "Pseudo incorrect ou déjà pris";

    if (err.message.includes('email'))
        errors.email = 'Email incorrect';
    
    if (err.message.includes('password'))
       errors.password = 'Le mot de passe doit faire 6 caractères minimum';

    if (err.code === 11000 && err.keyValue) {
        const key = Object.keys(err.keyValue)[0];
        if (key.includes('pseudo')) {
            errors.pseudo = "Ce Pseudo est déjà pris";
        } else if (key.includes('email')) {
            errors.email = "Cet email est déjà enregistré";
        }
    }

    return errors;
};

module.exports.signInErrors = (err) => {
    let errors = { email: '', password: ''}

    if (err.message === "Incorrect email") {
        errors.email = 'Email incorrect.';
    } else if (err.message === "Incorrect password") {
        errors.password = 'Le mot de passe ne correspond pas.';
    }
    
    return errors;
}

module.exports.uploadErrors = (err) =>{
    let errors ={ format: '', maxSize: ''};

    if (err.message.includes('Invalid file'))
        errors.format = "format incompatible";

    if (err.message.includes('max size'))
        errors.format = "le fichier depasse 500ko";

    return errors
}