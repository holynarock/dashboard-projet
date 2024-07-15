import React from 'react';
import Register from '../page/Register';


const Acceuil = ({ uid }) => {  // Recevoir uid en tant que prop
    return (
        <div>
            {uid ? (
                <div>
                    Bienvenu à l'accueil
                </div>
            ) : (
                <Register />
            )}
        </div>
    );
};

export default Acceuil;