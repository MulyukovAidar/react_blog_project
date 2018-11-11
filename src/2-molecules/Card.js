import React from 'react'
import CardFooter from '../1-atoms/CardFooter';
import CardContent from '../1-atoms/CardContent';
import CardHeader from '../1-atoms/CardHeader';
import './Card.css'

class Card extends React.Component{
    render(){
        return(
            <div className="card">
                <CardHeader/>
                <CardContent/>
                <CardFooter/>
            </div>
        );
    }

}

export default Card;
