import React from 'react';
import { Link } from 'react-router-dom';
import '../css/styles.css';  // Assurez-vous d'importer vos styles CSS
import { IoGrid } from "react-icons/io5";

const Sidebar = () => {
    return (
        <aside>
            <div className="top">
                <div className="logo">
                    <img src="../images/La-Moderna.jpeg" alt="Logo" />
                    <h2>DASH<span className="danger">BOARD</span></h2>
                </div>
                <div className="close" id="close-btn">
                    <span className="material-icons-sharp">close</span>
                </div>
            </div>

            <div className="sidebar">
                <Link to="/">

                    <IoGrid />
                    <h3>Dashboard</h3>
                </Link>
                <Link to="/customers" className="active">
                    <span className="material-icons-sharp">person_outline</span>
                    <h3>Clients</h3>
                </Link>
                <Link to="/orders">
                    <span className="material-icons-sharp">receipt_long</span>
                    <h3>Ordres</h3>
                </Link>
                <Link to="/analytics">
                    <span className="material-icons-sharp">insights</span>
                    <h3>Statistique</h3>
                </Link>
                <Link to="/messages">
                    <span className="material-icons-sharp">mail_outline</span>
                    <h3>Messages</h3>
                    <span className="message-count">26</span>
                </Link>
                <Link to="/products">
                    <span className="material-icons-sharp">inventory</span>
                    <h3>Produits</h3>
                </Link>
                <Link to="/reports">
                    <span className="material-icons-sharp">report_gmailerrorred</span>
                    <h3>Reports</h3>
                </Link>
                <Link to="/settings">
                    <span className="material-icons-sharp">settings</span>
                    <h3>Parametres</h3>
                </Link>
                <Link to="/add-product">
                    <span className="material-icons-sharp">add</span>
                    <h3>Add Product</h3>
                </Link>
                <Link to="/logout">
                    <span className="material-icons-sharp">logout</span>
                    <h3>Logout</h3>
                </Link>
            </div>
        </aside>
    );
};

export default Sidebar;
