import React from 'react';
import styles from './UserDataInput.module.css'

const UserDataInput = props => {
    return(
        <input className={styles.input} {...props}/>
    );
};

export default UserDataInput;
