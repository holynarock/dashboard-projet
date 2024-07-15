import React from 'react';
import '../css/styles.css';

const SalesAnalytics = () => {
    const items = [
        {
            type: 'online',
            icon: 'shopping_cart',
            title: 'commande en ligne',
            time: 'il y a 24 heures',
            change: '+39%',
            changeClass: 'success',
            quantity: '3849'
        },
        {
            type: 'offline',
            icon: 'local_mall',
            title: 'article hors ligne',
            time: 'il y a 24 heures',
            change: '-17%',
            changeClass: 'danger',
            quantity: '1100'
        },
        {
            type: 'customers',
            icon: 'person',
            title: 'Nouveau client',
            time: 'il y a 24 heures',
            change: '+25%',
            changeClass: 'success',
            quantity: '849'
        }
    ];

    return (
        <div className="sales-analytics">
            <h2>Analyse des Ventes</h2>
            {items.map((item, index) => (
                <div className={`item ${item.type}`} key={index}>
                    <div className="icon">
                        <span className="material-icons-sharp">{item.icon}</span>
                    </div>
                    <div className="right">
                        <div className="info">
                            <h3>{item.title}</h3>
                            <small className="text-muted">{item.time}</small>
                        </div>
                        <h5 className={item.changeClass}>{item.change}</h5>
                        <h3>{item.quantity}</h3>
                    </div>
                </div>
            ))}
            <div className="item add-product">
                <div>
                    <span className="material-icons-sharp">add</span>
                    <h3>Ajouter produit</h3>
                </div>
            </div>
        </div>
    );
};

export default SalesAnalytics;
