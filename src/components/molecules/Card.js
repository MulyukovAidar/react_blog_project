import React from 'react'
import CardFooter from '../atoms/CardFooter';
import CardContent from '../atoms/CardContent';
import CardHeader from '../atoms/CardHeader';
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
