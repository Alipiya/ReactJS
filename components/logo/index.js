import React from 'react';
import styles from './Logo.module.css';

export const Logotip = ({ messageProps }) => {

    return (<div className={styles.centrTopLogo}>
        <h1 className={styles.titleMessenger}><br></br>
            КРУТОЙ <br></br><br></br>
            <p className={styles.titleMessengerMax}>{messageProps}</p>
        </h1>
    </div>
    )
};