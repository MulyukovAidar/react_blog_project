import React from 'react';
import LikeButton from './LikeButton';
import './CardFooter.css'

class CardFooter extends React.Component{
    render(){
        return(
            <div className="card-footer">
                <div className="content">
                    <LikeButton/>
                </div>
            </div>
        );
    }
}

export default CardFooter;
