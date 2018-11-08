import React, {Component} from 'react';
import './PostHeader.css';


class PostHeader extends Component{
    constructor(props){
        super(props);
        this.state = {
            headerText: props.text,
        }
    }
    render(){
        return(
            <header className="post-header">{this.props.headerText}</header>
        );
    }
}

export default PostHeader;
