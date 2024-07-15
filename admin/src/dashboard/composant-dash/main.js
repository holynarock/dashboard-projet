import React from 'react';
import { Link } from 'react-router-dom';
import '../css/styles.css';  // Assurez-vous d'importer vos styles CSS

const Dashboard = () => {
    return (
        <main>
            <h1 className="text-4xl">Dashboard</h1>

            <div className="date">
                <input type="date" />
            </div>

            <div className="insights">
                <div className="sales">
                    <span className="material-icons-sharp">analytics</span>
                    <div className="middle">
                        <div className="left">
                            <h3>Total Sales</h3>
                            <h1>1500dt</h1>
                        </div>
                        <div className="progress">
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div className="number">
                                <p>81%</p>
                            </div>
                        </div>
                    </div>
                    <small className="text-muted">Last 24 Hours</small>
                </div>
                {/* END OF SALES */}
                <div className="expenses">
                    <span className="material-icons-sharp">bar_chart</span>
                    <div className="middle">
                        <div className="left">
                            <h3>Total Expenses</h3>
                            <h1>800dt</h1>
                        </div>
                        <div className="progress">
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div className="number">
                                <p>62%</p>
                            </div>
                        </div>
                    </div>
                    <small className="text-muted">Last 24 Hours</small>
                </div>
                {/* END OF EXPENSES */}
                <div className="income">
                    <span className="material-icons-sharp">stacked_line_chart</span>
                    <div className="middle">
                        <div className="left">
                            <h3>Total Income</h3>
                            <h1>500dt</h1>
                        </div>
                        <div className="progress">
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div className="number">
                                <p>44%</p>
                            </div>
                        </div>
                    </div>
                    <small className="text-muted">Last 24 Hours</small>
                </div>
                {/* END OF INCOME */}
            </div>
            {/* RECENT ORDERS */}
            <div className="recent-orders">
                <h2>Dernières commandes</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Nom du produit</th>
                            <th>Numero du produit</th>
                            <th>Payement</th>
                            <th>Statut</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Exemples d'entrées de commande */}
                        <tr>
                            <td>Pantalon en lin et coton</td>
                            <td>85631</td>
                            <td>dû</td>
                            <td className="warning">livraison en attente</td>
                            <td className="primary">details</td>
                        </tr>
                        {/* Ajoutez plus de commandes ici */}
                    </tbody>
                </table>
                <Link to="/">show All</Link>
            </div>
        </main>
    );
};

export default Dashboard;
