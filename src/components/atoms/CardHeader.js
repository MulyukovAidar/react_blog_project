import React from 'react';
import styles from './CardHeader.module.css';
import {Route} from 'react-router';
import DeleteCard from "./DeleteCard";

class CardHeader extends React.Component{
    render(props){
        return(
            <div className={styles["card-header"]}>
                <span className="floatLeft">NotATypicalUser</span>
                {/*<span className="floatRight">hi</span>*/}
                {/*<div className="clear"></div>*/}
                <Route path={'/admin'} component={DeleteCard} exact/>
                {/*<button  className={styles.floatRight}>X</button>*/}
            </div>
        );
    }
}
export default CardHeader;
