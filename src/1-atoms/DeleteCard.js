import React from 'react';
import styles from "./DeleteButton.module.css";

class DeleteCard extends React.Component{
    render(){
        return(
            <button className={styles["delete-card-button"]}>X</button>
        );
    }
}

export default DeleteCard;
