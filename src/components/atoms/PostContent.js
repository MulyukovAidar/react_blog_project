import React from 'react';
import './PostContent.css';

class PostContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            postText: props.text,
        }
    }

    render(){
        return(
            <div className="post-content">
                <p>{this.props.postText}</p>
            </div>
        );
    }
}

export default PostContent;

