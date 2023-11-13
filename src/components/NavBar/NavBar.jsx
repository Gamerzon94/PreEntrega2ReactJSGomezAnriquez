import * as React from 'react';
import { Button } from '@mui/material';
import { CardWidget } from '../CardWidget/CardWidget';
import styles from './NavBar.module.css'
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav>
            <div className={styles.navBarBody}> 
                <div className={styles.navBarButtons}>
                    <div className={styles.navBarImg}>
                        <Link to={'/'}><img src="JC_Jenson_Logo.png" alt="JCJenson Logo" /></Link>
                    </div>
                    <Button variant="contained">Inicio</Button>
                    <Button variant="contained">Articulos de Oficina</Button>
                    <Button variant="contained">Articulos civiles</Button>
                    <Button variant="contained">Worker Drones</Button>
                </div>
                <CardWidget/>
            </div>
        </nav>
    )
}