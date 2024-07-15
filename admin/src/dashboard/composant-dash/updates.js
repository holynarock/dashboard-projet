import React from 'react';
import '../css/styles.css';

const RecentUpdates = () => {
    const updates = [
        {
            name: 'ketia',
            message: 'reçu sa commande de Body à bretelles et imprimé animal.',
            time: "il y'a 2 minute",
            imgSrc: './images/kay.jpg'
        },
        {
            name: 'Bibou',
            message: 'reçu sa commande de Body à bretelles et imprimé animal.',
            time: "il y'a 2 minute",
            imgSrc: './images/Bibou2.jpg'
        },
        {
            name: 'Naomie',
            message: 'reçu sa commande de Body à bretelles et imprimé animal.',
            time: "il y'a 2 minute",
            imgSrc: './images/nao.jpg'
        }
    ];

    return (
        <div className="recent-updates">
            <h2>Mises à jour récentes</h2>
            <div className="updates">
                {updates.map((update, index) => (
                    <div className="update" key={index}>
                        <div className="profil-photo">
                            <img src={update.imgSrc} alt={update.name} />
                        </div>
                        <div className="message">
                            <p><b>{update.name}</b> {update.message}</p>
                            <small className="text-muted">{update.time}</small>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentUpdates;
